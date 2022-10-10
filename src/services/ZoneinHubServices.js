import requests from './httpService';

const ZoneinHubServices = {
  addItem(body) {
    return requests.post('/admin/hubandzone', body);
  },

  getAllItems() {
    return requests.get('/admin/hubandzone');
  },
  getItemById(id) {
    return requests.get(`/admin/hubandzone/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/hubandzone/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/hubandzone/${id}`);
  },
};

export default ZoneinHubServices;
