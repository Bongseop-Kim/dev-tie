"use client";

interface MenuItemProps {
  onClick: () => void;
  label: string;
  sm?: boolean;
}

const MenuItem: React.FC<MenuItemProps> = ({ onClick, label, sm }) => {
  return (
    <div
      onClick={onClick}
      className={`${
        sm
          ? "cursor-pointer hover:text-neutral-500"
          : "px-4 py-3 cursor-pointer hover:text-neutral-500 transition font-semibold"
      } `}
    >
      {label}
    </div>
  );
};

export default MenuItem;
