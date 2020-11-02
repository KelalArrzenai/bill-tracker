import axios from "axios";

export default {
  createUser: function(userData) {
    return axios.post("/api/users/", userData);
  },
  getUser: function(userData) {
    return axios.get('/api/users/' + userData);
  },
  deleteUser: function(userId) {
    return axios.delete("/api/users/" + userId);
  },
  getBills: function(userId) {
    return axios.get("/api/bills/" + userId); //add back userID when state is available
  },
  saveBill: function(billData) {
    return axios.post("/api/bills/", billData);
  },
  updateBill: function(billId) {
    return axios.put("/api/bills/" + billId);
  },
  deleteBill: function(billId) {
    return axios.delete("/api/bills/" + billId);
  }
};