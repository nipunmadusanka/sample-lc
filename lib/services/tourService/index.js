import axiosInstance from "@/lib/axiosInstance";

const addNewTour = async (tourData) => {
  try {
    const response = await axiosInstance.post("/tour/add", tourData);
    return response?.data;
  } catch (err) {
    console.error("Add new tour error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllForWeb = async (data) => {
  try {
    const response = await axiosInstance.get("/tour/all-web", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all tours for web error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllForDashboard = async (data) => {
  try {
    const response = await axiosInstance.get("/tour/all-dashboard", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all tours for dashboard error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getSingleTour = async (slug) => {
  try {
    const response = await axiosInstance.get(`/tour/single/${slug}`);
    return response?.data;
  } catch (err) {
    console.error("Get single tour error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getTourById = async (id) => {
  try {
    const response = await axiosInstance.get(`/tour/getById/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Get tour by ID error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const deleteTour = async (id) => {
  try {
    const response = await axiosInstance.delete(`/tour/delete/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Delete tour error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const handleStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(`/tour/status/${id}`, { status });
    return response?.data;
  } catch (err) {
    console.error("Update tour status error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const updateTour = async (id, tourData) => {
  try {
    const response = await axiosInstance.put(`/tour/update/${id}`, tourData);
    return response?.data;
  } catch (err) {
    console.error("Update tour error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export {
  addNewTour,
  getAllForWeb,
  getAllForDashboard,
  getSingleTour,
  getTourById,
  deleteTour,
  handleStatus,
  updateTour,
};
