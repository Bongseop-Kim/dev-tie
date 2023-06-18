"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  id: string;
  label?: string;
  disabled?: boolean;
  required?: boolean;
  type?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  maxLength?: number;
  minLength?: number;
  autoComplete?: string;
  valueAsNumber?: boolean;
}

const Input: React.FC<InputProps> = ({
  maxLength,
  minLength,
  id,
  type = "text",
  label,
  disabled,
  register,
  required,
  errors,
  valueAsNumber,
  autoComplete = "off",
}) => {
  return (
    <div className="w-full relative">
      <input
        id={id}
        disabled={disabled}
        {...register(id, { required, maxLength: maxLength, minLength: minLength, valueAsNumber })}
        placeholder=""
        type={type}
        autoComplete={autoComplete}
        className={`peer w-full p-4 pt-8 font-light bg-white border-2 rounded-md outline-none transition disabled:opacity-70 disabled:cursor-not-allowed pl-4
        ${errors[id] ? "border-rose-500" : "border-neutral-300"}
        ${errors[id] ? "focus:border-rose-500" : "focus:border-black"}
        `}
      />
      <label
        className={`absolute z-0 text-md duration-150 transform -translate-y-3 top-5 z-10 origin-[0] left-4
      peer-placeholder-shown:scale-100
      peer-placeholder-shown:translate-y-0
      peer-focus:scale-75
      peer-focus:-translate-y-4
      ${errors[id] ? "text-rose-500" : "text-zinc-400"}
      `}
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
