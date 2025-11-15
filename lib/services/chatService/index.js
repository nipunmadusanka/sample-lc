import axiosInstance from "@/lib/axiosInstance";

const sendMessage = async (data) => {
  try {
    const response = await axiosInstance.post("/chat/send", data);
    return response?.data;
  } catch (err) {
    console.error("Send message error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export { sendMessage };
