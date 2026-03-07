import axios from "axios";

const API = "http://localhost:5000/api/pumps";

export const getPumps = () => axios.get(API);

export const createPump = (data) =>
    axios.post(API, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });

    export const updatePump = (id, data) =>
        axios.put(`${API}/${id}`, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

export const deletePump = (id) => axios.delete(`${API}/${id}`);