"use client";

import { IoMdClose } from "react-icons/io";
import { ChangeEvent, Dispatch, SetStateAction, useRef } from "react";

interface FileInputProps {
  setLogo: Dispatch<SetStateAction<string>>;
}

const FileInput: React.FC<FileInputProps> = ({ setLogo }) => {
  const pointChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setLogo(URL.createObjectURL(e.target.files[0]));
    }
  };

  const clearInput = () => {
    setLogo("");
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };
  const inputRef = useRef<HTMLInputElement | null>(null);

  return (
    <div className="relative">
      <input
        type="file"
        ref={inputRef}
        accept="image/png, image/jpeg"
        className="w-full p-4 bg-white border-2 rounded-md outline-none border-neutral-300 focus:border-black"
        onChange={pointChange}
      />
      <div onClick={() => clearInput()}>
        <IoMdClose size={24} className="absolute top-4 right-4 z-10 cursor-pointer" />
      </div>
    </div>
  );
};

export default FileInput;
