import requests from './httpService';

const AdminServices = {
  registerAdmin(body) {
    console.log('body', body);
    return requests.post('/admin/register', body);
  },

  loginAdmin(body) {
    return requests.post(`/admin/login`, body);
  },

  forgetPassword(body) {
    return requests.put('/auth/recover', body);
  },

  resetPassword(body) {
    return requests.put('/auth/reset', body);
  },

  signUpWithProvider(body) {
    return requests.post('/admin/signup', body);
  },

  addStaff(body) {
    return requests.post('/admin/add', body);
  },
  getAllStaff(body) {
    return requests.post('/admin', body);
  },
  getStaffById(id, body) {
    return requests.post(`/admin/${id}`, body);
  },

  updateStaff(id, body) {
    return requests.put(`/admin/${id}`, body);
  },
  deleteStaff(id) {
    return requests.delete(`/admin/${id}`);
  },
};

export default AdminServices;
