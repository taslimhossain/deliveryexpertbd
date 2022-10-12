import requests from './httpService';

const OrderServices = {
  getAllOrders(body, headers) {
    return requests.get('/orders', body, headers);
  },

  getOrderByUser(id, body) {
    return requests.get(`/orders/user/${id}`, body);
  },

  getOrderById(id, body) {
    return requests.get(`/orders/${id}`, body);
  },

  updateOrder(id, body, headers) {
    return requests.put(`/orders/${id}`, body, headers);
  },

  deleteOrder(id) {
    return requests.delete(`/orders/${id}`);
  },

  getOrderCost(body) {
    return requests.post('/price-plan', body);
  },


};

export default OrderServices;
