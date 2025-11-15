import axiosInstance from "@/lib/axiosInstance";

const addNewArticle = async (articleData) => {
  try {
    const response = await axiosInstance.post("/article/add", articleData);
    return response?.data;
  } catch (err) {
    console.error("Add article error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const handleStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(`/article/status/${id}`, {
      status,
    });
    return response?.data;
  } catch (err) {
    console.error("Update status error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getArticlesForDashboard = async (data) => {
  try {
    const response = await axiosInstance.get("/article/all-dashboard", {
      params: data,
    });
    return response?.data;
  } catch (err) {
    console.error("Get dashboard articles error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const articleDelete = async (id) => {
  try {
    const response = await axiosInstance.delete(`/article/delete/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Delete article error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllArticleForWeb = async (data) => {
  try {
    const response = await axiosInstance.get("/article/all-web", {
      params: data,
    });
    return response?.data;
  } catch (err) {
    console.error("Get all articles error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getTopArticles = async () => {
  try {
    const response = await axiosInstance.get("/article/top");
    return response?.data;
  } catch (err) {
    console.error("Get top articles error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getSingleArticle = async (slug) => {
  try {
    const response = await axiosInstance.get(`/article/single/${slug}`);
    return response?.data;
  } catch (err) {
    console.error("Get single article error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const uploadArticleImage = async (imageFile) => {
  try {
    const response = await axiosInstance.post("/article/upload-image", imageFile);
    return response?.data;
  } catch (err) {
    console.error("Upload article image error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export {
  addNewArticle,
  handleStatus,
  getArticlesForDashboard,
  articleDelete,
  getAllArticleForWeb,
  getTopArticles,
  getSingleArticle,
  uploadArticleImage,
};
