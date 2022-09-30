import React from "react";
import { Select } from "@windmill/react-ui";

const SelectStatusOption = ({ register, name, label}) => {
  return (
    <>
      <Select
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>Select status</option>
        <option value="1">Active</option>
        <option value="0">InActive</option>
      </Select>
    </>
  );
};

export default SelectStatusOption;
