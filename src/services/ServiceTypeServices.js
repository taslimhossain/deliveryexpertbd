import requests from './httpService';

const ServiceTypeServices = {
  addItem(body) {
    return requests.post('/admin/servicetype', body);
  },

  getAllItems() {
    return requests.get('/admin/servicetype');
  },
  getItemById(id) {
    return requests.get(`/admin/servicetype/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/servicetype/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/servicetype/${id}`);
  },
};

export default ServiceTypeServices;
