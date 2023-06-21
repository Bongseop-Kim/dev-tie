"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const DesignClient = () => {
  const tieItemList = [
    { name: "원 포인트", imgSrc: "/images/pointParrot.png", link: "/point" },
    { name: "원 패턴 스트라이프", imgSrc: "/images/patternDesign.png", link: "/points/one" },
    { name: "투 패턴 스트라이프", imgSrc: "/images/twoDesign.png", link: "/points/two" },
    { name: "포 패턴 스트라이프", imgSrc: "/images/fourDesign.png", link: "/points/four" },
  ];
  const router = useRouter();

  return (
    <div className="flex flex-col items-center gap-20 py-20">
      <div className="flex flex-col items-center gap-8">
        <p className="text-2xl font-bold">내가 만드는 나만의 상품</p>
        <div className="flex gap-8 ">
          {tieItemList.map((item) => (
            <div
              key={item.name}
              onClick={() => router.push(item.link)}
              className="cursor-pointer flex flex-col gap-2 hover:font-bold "
            >
              <Image src={item.imgSrc} height="100" width="300" alt={item.name} className="rounded-md" />
              <div>{item.name}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DesignClient;
