import requests from './httpService';

const PickupLocationServices = {
  addItem(body) {
    return requests.post('/admin/pickuplocation', body);
  },

  getAllItems() {
    return requests.get('/admin/pickuplocation');
  },
  getItemById(id) {
    return requests.get(`/admin/pickuplocation/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/pickuplocation/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/pickuplocation/${id}`);
  },
};

export default PickupLocationServices;
