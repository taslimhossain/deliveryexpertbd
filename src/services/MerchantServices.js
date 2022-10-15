import requests from './httpService';

const MerchantServices = {
  addItem(body) {
    return requests.post('/admin/merchant', body);
  },

  getAllItems() {
    return requests.get('/admin/merchant');
  },
  getItemById(id) {
    return requests.get(`/admin/merchant/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/merchant/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/merchant/${id}`);
  },
};

export default MerchantServices;
