"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface TextareaProps {
  id: string;
  placeholder: string;
  disabled?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}

const Textarea: React.FC<TextareaProps> = ({ id, placeholder, errors, disabled, register, required }) => {
  return (
    <textarea
      disabled={disabled}
      {...register(id, { required })}
      className={`w-full h-64 p-4 border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
    ${errors[id] ? "border-rose-500" : "border-neutral-300"}
    ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
    ${errors[id] ? "placeholder-rose-500" : "placeholder-zinc-400"}
    `}
      placeholder={placeholder}
    />
  );
};

export default Textarea;
