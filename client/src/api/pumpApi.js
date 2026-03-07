import api from "./axios";

export const getPumps = () => api.get("/pumps");

export const getPumpById = (id) => api.get(`/pumps/${id}`);

export const createPump = (data) =>
  api.post("/pumps", data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

export const deletePump = (id) => api.delete(`/pumps/${id}`);

export const updatePump = (id, data) =>
  api.put(`/pumps/${id}`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });