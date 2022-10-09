import requests from './httpService';

const WeightServices = {
  addItem(body) {
    return requests.post('/admin/weight', body);
  },

  getAllItems() {
    return requests.get('/admin/weight');
  },
  getItemById(id) {
    return requests.get(`/admin/weight/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/weight/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/weight/${id}`);
  },
};

export default WeightServices;
