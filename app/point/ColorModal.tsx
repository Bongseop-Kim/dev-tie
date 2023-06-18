"use client";

import { Dispatch, SetStateAction } from "react";
import { IoMdClose } from "react-icons/io";
import Button from "../components/Button";
import { ColorPicker, useColor } from "react-color-palette";

interface ColorModalProps {
  disabled?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  setTieColor: Dispatch<SetStateAction<string>>;
}

const ColorModal: React.FC<ColorModalProps> = ({ disabled, setIsOpen, setTieColor }) => {
  const [color, setColor] = useColor("hex", "#121212");

  const handleSubmit = () => {
    setTieColor(color.hex);
    setTimeout(() => {
      setIsOpen(false);
    }, 300);
  };

  return (
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-neutral-800/70">
      <div className="relative w-full md:w-4/6 lg:w-3/6 xl:w-2/5 my-6 mx-auto h-full lg:h-auto md:h-auto">
        {/*content*/}
        <div className="translate h-full lg:h-auto md:h-auto border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/*header*/}
          <div className="flex items-center p-6 rounded-t justify-center relative border-b-[1px]">
            <button
              className="p-1 border-0 hover:opacity-70 transition absolute left-9"
              onClick={() => setIsOpen(false)}
            >
              <IoMdClose size={18} />
            </button>
            <div className="text-lg font-semibold">색상 팔레트</div>
          </div>
          <div className="relative p-6 flex-auto flex justify-center">
            <ColorPicker width={480} height={250} color={color} onChange={setColor} hideHSV dark hideRGB hideHEX />
          </div>
          <div className="flex flex-col gap-2 p-6">
            <div className="flex flex-row items-center gap-4 w-full">
              <Button disabled={disabled} label="선택 완료" onClick={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorModal;
