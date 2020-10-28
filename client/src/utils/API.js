import axios from "axios";

export default {
  createUser: function(userData) {
    return axios.post("/api/users/", userData);
  },
  deleteUser: function(userId) {
    return axios.delete("/api/users/" + userId);
  },
  getBills: function(userId) {
    return axios.get("/api/books/" + userId);
  },
  saveBill: function(billData) {
    return axios.post("/api/books", billData);
  },
  updateBill: function(billId) {
    return axios.put("/api/books/" + billId);
  },
  deleteBill: function(billId) {
    return axios.delete("/api/books/" + billId);
  }
};