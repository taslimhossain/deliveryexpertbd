import requests from './httpService';

const RidercostServices = {
  addItem(body) {
    return requests.post('/admin/ridercost', body);
  },

  getAllItems() {
    return requests.get('/admin/ridercost');
  },
  getItemById(id) {
    return requests.get(`/admin/ridercost/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/ridercost/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/ridercost/${id}`);
  },
};

export default RidercostServices;
