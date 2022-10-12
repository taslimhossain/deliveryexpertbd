import React from "react";
import useAsync from "../../hooks/useAsync";
import { Select } from "@windmill/react-ui";
import SelectServices from "../../services/SelectServices";

const SelectPickupOption = ({ register, name, label}) => {
  const { data } = useAsync(SelectServices.getAllDropdown);
  return (
    <>
      <Select className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        {data?.pickuplocation?.map((item, i) => (
          <option key={item.id} value={item.id}>{item.name}</option>
        ))}
      </Select>
    </>
  );
};

export default SelectPickupOption;
