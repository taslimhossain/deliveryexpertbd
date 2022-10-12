import React from 'react';
import useAsync from '../../hooks/useAsync';
import SelectServices from '../../services/SelectServices';


const ProductTypeOptions = () => {
  const { data } = useAsync(SelectServices.getAllDropdown);
  return (
    <>
      {data?.producttype?.map((item, i) => (
        <option key={item.id} value={item.id}>{item.name}</option>
      ))}
    </>
  );
};

export default ProductTypeOptions;
