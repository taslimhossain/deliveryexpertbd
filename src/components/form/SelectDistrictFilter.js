import React from "react";
import { Select } from "@windmill/react-ui";
import SelectServices from "../../services/SelectServices";
import useAsync from "../../hooks/useAsync";

const SelectDistrictFilter = ({ setDistrictFilter }) => {
  const { data } = useAsync(SelectServices.getAllDropdown);
  return (
    <>
      <Select
        onChange={(e) => setDistrictFilter(e.target.value)}
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white"
      >
      
      <option value="All" defaultValue hidden>Select Distric</option>
      <option value="">All Distric</option>
      {data?.district?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.name}
        </option>
      ))}
    
      </Select>
    </>
  );
};

export default SelectDistrictFilter;
