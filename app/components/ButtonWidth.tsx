interface ButtonWidthProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
  width: string;
  outline?: boolean;
  small?: boolean;
}

const ButtonWidth: React.FC<ButtonWidthProps> = ({ small, outline, onClick, label, disabled, width }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`w-${width} rounded-md ${outline ? "bg-white" : "bg-black"}
      ${outline ? "border-neutral-400" : "border-black"}
      ${outline ? "text-black" : "text-white"}
      ${small ? "py-2" : "py-3"}
      ${small ? "text-md" : "text-md"}
      ${small ? "font-light" : "font-semibold"}
      ${small ? "border-[1px]" : "border-2"}`}
    >
      {label}
    </button>
  );
};

export default ButtonWidth;
