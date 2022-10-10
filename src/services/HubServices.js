import requests from './httpService';

const HubServices = {
  addItem(body) {
    return requests.post('/admin/hub', body);
  },

  getAllItems() {
    return requests.get('/admin/hub');
  },
  getItemById(id) {
    return requests.get(`/admin/hub/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/hub/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/hub/${id}`);
  },
};

export default HubServices;
