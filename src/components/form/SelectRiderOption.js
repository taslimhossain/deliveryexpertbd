import React from "react";
import { Select } from "@windmill/react-ui";

const SelectRiderOption = ({ register, name, label}) => {
  return (
    <>
      <Select
        className="border h-12 text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white"
        name={name}
        {...register(`${name}`, {
          required: `${label} is required!`,
        })}
      >
        <option value="" defaultValue hidden>Select pay type</option>
        <option value="freelance">Freelance</option>
        <option value="job">Job</option>
      </Select>
    </>
  );
};

export default SelectRiderOption;
