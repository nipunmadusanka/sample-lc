import axiosInstance from "@/lib/axiosInstance";

const getAllGalleryImagesForWeb = async () => {
  try {
    const response = await axiosInstance.get("/gallery/all-web");
    return response?.data;
  } catch (err) {
    console.error("Get all gallery images for web error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllGalleryForDashboard = async (data) => {
  try {
    const response = await axiosInstance.get("/gallery/all-dashboard", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get all gallery for dashboard error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const addGalleryImage = async (galleryData) => {
  try {
    const response = await axiosInstance.post("/gallery/add", galleryData);
    return response?.data;
  } catch (err) {
    console.error("Add gallery image error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const galleryDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(`/gallery/delete/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Delete gallery image error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export {
  getAllGalleryImagesForWeb,
  getAllGalleryForDashboard,
  addGalleryImage,
  galleryDelete,
};
