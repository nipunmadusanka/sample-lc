// lib/axiosInstance.js
import axios from "axios";
import Storage from "@/lib/DataStorage";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true, // send refresh cookie
});

// separate instance to avoid interceptor recursion when refreshing
const refreshClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  withCredentials: true,
});

let isRefreshing = false;
let failedQueue = [];

// allow consumer to register a fallback (e.g., redirect to login)
let onAuthFailure = () => {
  // default fallback: clear token and reload / send to login
  Storage.removeItem("accessToken");
  if (typeof window !== "undefined") {
    window.location.href = "/login";
  }
};

const processQueue = (error, token = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else p.resolve(token);
  });
  failedQueue = [];
};

// Request interceptor: attach access token if present
axiosInstance.interceptors.request.use(
  (config) => {
    const token = Storage.getItem("accessToken");
    if (token) {
      config.headers = config.headers || {};
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(normalizeError(err))
);

// Response interceptor: refresh logic + other status handling
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // early guard
    if (!error || !error.config) {
      return Promise.reject(normalizeError(error));
    }

    const originalRequest = error.config;

    // === refresh logic for 401 ===
    const isRefreshEndpoint = originalRequest.url?.includes("/refresh");
    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshEndpoint
    ) {
      originalRequest._retry = true;

      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject });
        })
          .then((token) => {
            originalRequest.headers = originalRequest.headers || {};
            originalRequest.headers["Authorization"] = `Bearer ${token}`;
            return axiosInstance(originalRequest);
          })
          .catch((err) => Promise.reject(normalizeError(err)));
      }

      isRefreshing = true;
      try {
        const refreshResp = await refreshClient.post("/admin/refresh-token");
        const newAccessToken = refreshResp.data?.data?.token;

        if (!newAccessToken) {
          throw new Error("No access token in refresh response");
        }

        // persist new token
        Storage.setItem("accessToken", newAccessToken);

        // update default header so subsequent requests carry it
        axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${newAccessToken}`;

        processQueue(null, newAccessToken);
        isRefreshing = false;

        originalRequest.headers = originalRequest.headers || {};
        originalRequest.headers["Authorization"] = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (err) {
        processQueue(err, null);
        isRefreshing = false;
        Storage.removeItem("accessToken");
        onAuthFailure(); // trigger global logout/redirect
        return Promise.reject(normalizeError(err));
      }
    }

    // === other status handling & network errors ===
    return Promise.reject(normalizeError(error));
  }
);

// error normalization helper
function normalizeError(error) {
  // network errors or no response
  if (!error || !error.response) {
    return {
      isError: true,
      errorCode: "NETWORK_ERROR",
      errorMsg: error?.message || "Network error occurred",
      raw: error,
    };
  }

  const status = error.response.status;
  const msg =
    error.response.data?.message ||
    error.response.statusText ||
    "Request failed";

  const base = {
    isError: true,
    errorCode: status,
    errorMsg: msg,
    raw: error,
  };

  switch (status) {
    case 400:
      return base;
    case 401:
      return base;
    case 403:
      return { ...base, errorMsg: msg || "Forbidden" };
    case 404:
      return { ...base, errorMsg: msg || "Not found" };
    case 500:
      return { ...base, errorMsg: msg || "Server error" };
    default:
      return base;
  }
}

// allow external code to override what happens when auth fails
export function setAuthFailureHandler(fn) {
  if (typeof fn === "function") {
    onAuthFailure = fn;
  }
}

export default axiosInstance;
