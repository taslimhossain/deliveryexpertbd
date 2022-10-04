import requests from './httpService';

const SelectServices = {
  getAllDropdown() {
    return requests.get('/selectoption');
  }
};

export default SelectServices;
