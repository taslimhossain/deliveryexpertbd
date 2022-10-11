import React from 'react';
import { Input, Label } from '@windmill/react-ui';

const InputCheckbox = ({
  register,
  defaultValue,
  required,
  name,
  label,
}) => {
  return (
    <>
    { console.log('register register', register) }
    <Label check>
      <Input
        {...register(`${name}`, {
          required: required ? false : `${label} is required!`,
        })}
        defaultValue={defaultValue}
        name={name}
        id={name}
      type="checkbox" />
      <span className="ml-2">{label}</span>
    </Label>

    </>
  );
};

export default InputCheckbox;
