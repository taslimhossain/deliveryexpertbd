import requests from './httpService';

const ZonesServices = {
  addItem(body) {
    return requests.post('/admin/zone', body);
  },
  getAllItem() {
    return requests.get('/admin/zone');
  },
  getItemById(id) {
    return requests.get(`/admin/zone/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/zone/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/zone/${id}`);
  },
};

export default ZonesServices;
