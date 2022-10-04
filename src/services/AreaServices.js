import requests from './httpService';

const AreaServices = {
  addItem(body) {
    return requests.post('/admin/area', body);
  },
  getAllItems() {
    return requests.get('/admin/area');
  },
  getItemById(id) {
    return requests.get(`/admin/area/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/area/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/area/${id}`);
  },
};

export default AreaServices;
