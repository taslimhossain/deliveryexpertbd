import requests from './httpService';

const DistrictsServices = {
  addDistrict(body) {
    console.log('submit distric', body)
    return requests.post('/admin/district', body);
  },
  getAllDistrict() {
    return requests.get('/admin/district');
  },
  getDistrictById(id) {
    return requests.get(`/admin/district/${id}`);
  },
  updateDistrict(id, body) {
    return requests.put(`/admin/district/${id}`, body);
  },
  deleteDistrict(id) {
    return requests.delete(`/admin/district/${id}`);
  },
};

export default DistrictsServices;
