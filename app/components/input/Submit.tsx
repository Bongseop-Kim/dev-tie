interface SubmitProps {
  label: string;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
}

const Submit: React.FC<SubmitProps> = ({ label, small, outline, disabled }) => {
  return (
    <input
      value={label}
      disabled={disabled}
      className={`disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full 
      ${outline ? "bg-white" : "bg-black"}
      ${outline ? "border-black" : "border-black"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-2" : "py-3"}
      ${small ? "text-sm" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}
      `}
      type="submit"
    ></input>
  );
};

export default Submit;
