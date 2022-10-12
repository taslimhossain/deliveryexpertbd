import React from 'react';
import useAsync from '../../hooks/useAsync';
import SelectServices from '../../services/SelectServices';


const DistrictOptions = () => {
  const { data } = useAsync(SelectServices.getAllDropdown);
  return (
    <>
      {data?.district?.map((item, i) => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </>
  );
};

export default DistrictOptions;
