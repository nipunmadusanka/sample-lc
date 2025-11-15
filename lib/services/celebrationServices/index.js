import axiosInstance from "@/lib/axiosInstance";

const addNewCelebration = async (tourData) => {
  try {
    const response = await axiosInstance.post("/celebration/add", tourData);
    return response?.data;
  } catch (err) {
    console.error("Add celebration error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllForWeb = async (data) => {
  try {
    const response = await axiosInstance.get("/celebration/all-web", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all celebrations for web error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllForDashboard = async (data) => {
  try {
    const response = await axiosInstance.get("/celebration/all-dashboard", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all celebrations for dashboard error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getSingleCelebration = async (slug) => {
  try {
    const response = await axiosInstance.get(`/celebration/single/${slug}`);
    return response?.data;
  } catch (err) {
    console.error("Get single celebration error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const deleteCelebration = async (id) => {
  try {
    const response = await axiosInstance.delete(`/celebration/delete/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Delete celebration error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const handleStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(`/celebration/status/${id}`, { status });
    return response?.data;
  } catch (err) {
    console.error("Update celebration status error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const updateCelebration = async (id, tourData) => {
  try {
    const response = await axiosInstance.put(`/celebration/update/${id}`, tourData);
    return response?.data;
  } catch (err) {
    console.error("Update celebration error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export {
  addNewCelebration,
  getAllForWeb,
  getAllForDashboard,
  getSingleCelebration,
  deleteCelebration,
  handleStatus,
  updateCelebration,
};
