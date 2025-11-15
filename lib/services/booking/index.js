import axiosInstance from "@/lib/axiosInstance";

const newBooking = async (bookingData) => {
  try {
    const response = await axiosInstance.post("/booking/add", bookingData);
    return response?.data;
  } catch (err) {
    console.error("New booking error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getBookings = async (data) => {
  try {
    const response = await axiosInstance.get("/booking/all", { params: data });
    return response?.data;
  } catch (err) {
    console.error("Get bookings error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const handleStatus = async (id, status) => {
  try {
    const response = await axiosInstance.put(`/booking/status/${id}`, { status });
    return response?.data;
  } catch (err) {
    console.error("Update booking status error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export { newBooking, getBookings, handleStatus };
