import requests from "./httpService";

const UserServices = {
  getDashboard(body) {
    return requests.get(`/admin/dashboard`, body);
  },
  getAllMerchants(body) {
    return requests.get(`/admin/merchants/getallmerchants`, body);
  },
  getUserById(id) {
    return requests.get(`/user/${id}`);
  },

  deleteUser(id) {
    return requests.delete(`/user/${id}`);
  },

  getMerchants(body) {
    return requests.get(`/admin/merchant`, body);
  },

};

export default UserServices;
