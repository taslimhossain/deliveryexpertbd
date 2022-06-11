import requests from "./httpService";

const UserServices = {
  getDashboard(body) {
    return requests.get(`./dashboard`, body);
    //return requests.get(`/userdashboard`, body);
  },
  getAllUsers(body) {
    return requests.get(`/user`, body);
  },
  getUserById(id) {
    return requests.get(`/user/${id}`);
  },

  deleteUser(id) {
    return requests.delete(`/user/${id}`);
  },
};

export default UserServices;
