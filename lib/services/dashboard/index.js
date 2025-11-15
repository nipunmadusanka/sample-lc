import axiosInstance from "@/lib/axiosInstance";

const getDashboardTrends = async (data) => {
  try {
    const response = await axiosInstance.get("/dashboard/trends", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get dashboard trends error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getDashBoardTrendDays = async () => {
  try {
    const response = await axiosInstance.get("/dashboard/bookingsbyday");
    return response?.data;
  } catch (err) {
    console.error("Get dashboard trend days error:", err);
    return { error: err.errorMsg || err.message };
  }
}  

export { getDashboardTrends, getDashBoardTrendDays };