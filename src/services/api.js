import axios from "axios";

const api = axios.create({
  // baseURL: `https://readiteasy.com`,
  baseURL:
    process.env.NODE_ENV === "production"
      ? //   ? `https://api.readiteasy.com`
        `http://127.0.0.1:3000/api/`
      : `http://127.0.0.1:3000/api/`,
  //   withCredentials: false, // This is the default
  //   headers: {
  //     Accept: "application/json",
  //     "Content-Type": "application/json"
  //   },
  //   xsrfHeaderName: "X-CSRFToken",
  //   xsrfCookieName: "XCSRF-TOKEN"
});

export default {
  createRoom(room) {
    return api.post("/room/add", { room: room });
  },
  updateRoom(room) {
    return api.post("/room/update", { room: room });
  },
  getRooms() {
    return api.get("/room/rooms");
  },
  getRoom(roomId) {
    return api.get("/room/fetch", { params: { id: roomId } });
  },
};
