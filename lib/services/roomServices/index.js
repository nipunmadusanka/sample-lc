import axiosInstance from "@/lib/axiosInstance";

const addNewRoom = async (roomData) => {
  try {
    const response = await axiosInstance.post("/room/add", roomData);
    return response?.data;
  } catch (err) {
    console.error("Add new room error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getRooms = async () => {
  try {
    const response = await axiosInstance.get("/room/all");
    return response?.data;
  } catch (err) {
    console.error("Get rooms error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getRoomById = async (id) => {
  try {
    const response = await axiosInstance.get(`/room/single/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Get room by ID error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const getAllRoomTitles = async () => {
  try {
    const response = await axiosInstance.get("/room/get-all-titles");
    return response?.data;
  } catch (err) {
    console.error("Get all room titles error:", err);
    return { error: err.errorMsg || err.message };
  }
};

const deleteRoom = async (id) => {
  try {
    const response = await axiosInstance.delete(`/room/delete/${id}`);
    return response?.data;
  } catch (err) {
    console.error("Delete room error:", err);
    return { error: err.errorMsg || err.message };
  }
};

export { addNewRoom, getRooms, getRoomById, getAllRoomTitles, deleteRoom };
