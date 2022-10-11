import React from 'react';
import { Textarea } from '@windmill/react-ui'

const InputTextArea = ({
  register,
  defaultValue,
  required,
  name,
  label,
  rows,
  placeholder,
}) => {
  return (
    <>

      <Textarea 
        {...register(`${name}`, {
          required: required ? false : `${label} is required!`,
        })}
        defaultValue={defaultValue}
        placeholder={placeholder}
        name={name}
        rows={rows}
      className="border text-sm focus:outline-none block w-full bg-gray-100 dark:bg-white border-transparent focus:bg-white" />
    </>
  );
};

export default InputTextArea;
