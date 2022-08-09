import requests from './httpService';

const DistrictsServices = {
  addDistrict(body) {
    return requests.post('/districts/add', body);
  },
  getAllDistrict() {
    return requests.get('/admin/district');
  },
  getDistrictById(id) {
    return requests.get(`/districts/${id}`);
  },
  updateDistrict(id, body) {
    return requests.put(`/districts/${id}`, body);
  },
  deleteDistrict(id) {
    return requests.delete(`/districts/${id}`);
  },
};

export default DistrictsServices;
