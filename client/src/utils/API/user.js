import axios from "axios";

export default {
    create: function (userData) {
        return axios.post("/api/user", userData);
    },
    validate: function (username) {
        return axios.get(`/api/user/validate/${username}`)
    },
    get: function (id) {
        return axios.get("/api/user/" + id);
    },
    update: function (id, updateData) {
        return axios.put("/api/user/" + id, updateData);
    },
    delete: function (id) {
        return axios.delete("/api/user/" + id);
    }
};