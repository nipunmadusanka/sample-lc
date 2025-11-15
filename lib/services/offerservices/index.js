import axiosInstance from "@/lib/axiosInstance";

const addOffer = async (offerData) => {
  try {
    const response = await axiosInstance.post("/package/add", offerData);
    return response?.data;
  } catch (err) {
    console.error("Add offer error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getSingleOffer = async (id) => {
  try {
    const response = await axiosInstance.get(`/package/single/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Get single offer error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllOffersForDashboard = async (data) => {
  try {
    const response = await axiosInstance.get("/package/dashboard-all", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all offers for dashboard error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllOffers = async (data) => {
  try {
    const response = await axiosInstance.get("/package/web-all", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all offers error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const offerDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(`/package/delete/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Delete offer error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export {
  addOffer,
  getSingleOffer,
  getAllOffers,
  getAllOffersForDashboard,
  offerDelete,
};
