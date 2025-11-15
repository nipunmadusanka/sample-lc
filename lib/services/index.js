import axiosInstance from "../axiosInstance";
// import axios from "axios";

// export const getAllCountries = async () => {
//   try {
//     const res = await fetch("https://restcountries.com/v3.1/all");
//     if (!res.ok) throw new Error("Failed to fetch");
//     return await res.json();
//   } catch (error) {
//     console.error("Error fetching countries:", error);
//     return [];
//   }
// };

// export const getAllCountries = async () => {
//   try {
//     const response = await axiosInstance.get("/all");
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching countries:", error);
//     return [];
//   }
// };
const signIn = async (email, password) => {
  const response = await axiosInstance.post("/admin/login", {
    email,
    password,
  });
  return response?.data;
};

const signOut = async () => {
  const response = await axiosInstance.post("/admin/logout");
  return response?.data;
}

export { signIn, signOut };
