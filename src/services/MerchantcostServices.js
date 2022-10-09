import requests from './httpService';

const MerchantcostServices = {
  addItem(body) {
    return requests.post('/admin/merchantcost', body);
  },

  getAllItems() {
    return requests.get('/admin/merchantcost');
  },
  getItemById(id) {
    return requests.get(`/admin/merchantcost/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/merchantcost/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/merchantcost/${id}`);
  },
};

export default MerchantcostServices;
