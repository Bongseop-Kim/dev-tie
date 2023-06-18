"use client";

import Image from "next/image";
import { Dispatch, SetStateAction, useState } from "react";
import ColorModal from "./ColorModal";
import "react-color-palette/lib/css/styles.css";

interface ColorListProps {
  setTieColor: Dispatch<SetStateAction<string>>;
}

const ColorList: React.FC<ColorListProps> = ({ setTieColor }) => {
  const [isOpen, setIsOpen] = useState(false);
  const colorList = [
    ["bg-slate-950", "black"],
    ["bg-red-600", "#DC2626"],
    ["bg-orange-500", "#F97316"],
    ["bg-yellow-300", "#FDE047"],
    ["bg-lime-500", "#84CC16"],
    ["bg-teal-700", "#EC4899"],
    ["bg-sky-500", "#0EA5E9"],
    ["bg-blue-800", "#1E40AF"],
    ["bg-violet-700", "#6D28D9"],
    ["bg-fuchsia-500", "#D946EF"],
    ["bg-pink-500", "#EC4899"],
  ];

  return (
    <div>
      <div>색상</div>
      <div className="flex py-2 gap-4 flex-wrap">
        {colorList.map((color) => (
          <div
            key={color[0]}
            onClick={() => setTieColor(color[1])}
            className={`rounded-md w-8 h-8 cursor-pointer ${color[0]}`}
          ></div>
        ))}
        <div className="cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          <Image src="/images/pallete.png" alt="pallete" width={32} height={24} />
        </div>
      </div>
      {isOpen && <ColorModal setIsOpen={setIsOpen} setTieColor={setTieColor} />}
    </div>
  );
};

export default ColorList;
