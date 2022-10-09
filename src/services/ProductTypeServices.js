import requests from './httpService';

const ProductTypeServices = {
  addItem(body) {
    return requests.post('/admin/producttype', body);
  },

  getAllItems() {
    return requests.get('/admin/producttype');
  },
  getItemById(id) {
    return requests.get(`/admin/producttype/${id}`);
  },
  updateItem(id, body) {
    return requests.put(`/admin/producttype/${id}`, body);
  },
  deleteItem(id) {
    return requests.delete(`/admin/producttype/${id}`);
  },
};

export default ProductTypeServices;
