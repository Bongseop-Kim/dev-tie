"use client";

import { Dispatch, SetStateAction } from "react";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface RadioInputProps {
  label: string;
  id: string;
  register: UseFormRegister<FieldValues>;
  required?: boolean;
}

const RadioInput: React.FC<RadioInputProps> = ({ label, required, id, register }) => {
  return (
    <label className="flex border-2 rounded-md p-4 w-full cursor-pointer hover:bg-neutral-50">
      <input className="cursor-pointer" type="radio" value={label} {...register(id, { required })} />
      <div className="px-4">{label}</div>
    </label>
  );
};

export default RadioInput;
