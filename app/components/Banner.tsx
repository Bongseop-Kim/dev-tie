"use client";

import Image from "next/image";

interface BannerProps {
  img: string;
  title: string;
  p1: string;
  p2: string;
}

const Banner: React.FC<BannerProps> = ({ img, title, p1, p2 }) => {
  return (
    <div className="relative overflow-hidden hidden md:block mt-2">
      <Image src={img} alt="Banner Img" width={2000} height={1000} />
      <div className="absolute top-4 py-4 w-full">
        <div className="max-w-[1420px] mx-auto xl:px-20 md:px-10 px-6">
          <p className="text-3xl font-semibold leading-9 text-blue-600 pb-4 ">{title}</p>
          <p className="text-gray-600 whitespace-pre-line">
            {p1}
            <br />
            {p2}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
