"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const HomeClient = () => {
  const router = useRouter();

  const tieItemList = [
    { name: "원 포인트", imgSrc: "/images/pointParrot.png", link: "/point" },
    { name: "원 패턴 스트라이프", imgSrc: "/images/patternDesign.png", link: "/points/one" },
    { name: "투 패턴 스트라이프", imgSrc: "/images/twoDesign.png", link: "/points/two" },
    { name: "포 패턴 스트라이프", imgSrc: "/images/fourDesign.png", link: "/points/four" },
  ];

  return (
    <>
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
        <div className="w-full flex flex-col gap-8 items-center">
          <div className="flex flex-col items-center gap-2">
            <p className="text-2xl font-bold">소량부터 대량까지</p>
            <p className="text-2xl font-bold">생각하시는 모든것을 만들어드립니다.</p>
            <p className="text-neutral-600">
              영선산업은 30여년 동안 축적된 경험과 기술로 맡겨 주시는 모든 고객분들에게 최고의 만족도를 보장합니다.
            </p>
            <p className="text-neutral-600">고객분들에게 항상 고마운 마음을 담아 최선을 다하겠습니다.</p>
          </div>
          <div className="w-full flex justify-between">
            <Image src="/images/equipment1.png" alt="equipment" width={300} height={300} />
            <Image src="/images/equipment2.png" alt="equipment" width={300} height={300} />
            <Image src="/images/equipment3.png" alt="equipment" width={300} height={300} />
            <Image src="/images/equipment4.png" alt="equipment" width={300} height={300} />
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 w-full">
          <p className="text-2xl font-bold">HOW TO DESIGNTOOL</p>
          <p>한눈에 보는 홈페이지 사용방법</p>
          <div className="w-full flex mt-10 flex-col md:flex-row justify-between flex-wrap">
            <Image src="/images/one.gif" alt="gif" width={600} height={600} />
            <Image src="/images/two.gif" alt="gif" width={600} height={600} />
          </div>
        </div>
        <div className="flex justify-center gap-24 flex-col md:flex-row">
          <div className="flex items-center flex-col md:flex-row">
            <Image src="/images/design.jpeg" width={140} height={140} alt="image" />
            <div>
              <p className="text-lg ">쉽고 빠르게 만들기</p>
              <div className="mt-2">
                <p className="text-sm text-neutral-700">별도 프로그램 설치없이</p>
                <p className="text-sm text-neutral-700">디자인 툴로 간편하게</p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <Image src="/images/detail.jpeg" width={140} height={140} alt="image" />
            <div>
              <p className="text-lg ">꼼꼼한 상품 제작</p>
              <div className="mt-2">
                <p className="text-sm text-neutral-700">커스텀 제작에 대한 최고의 노하우로</p>
                <p className="text-sm text-neutral-700">최고의 품질 보장</p>
              </div>
            </div>
          </div>
          <div className="flex items-center flex-col md:flex-row">
            <Image src="/images/stream.jpeg" width={140} height={140} alt="image" />
            <div>
              <p className="text-lg ">실시간 견적</p>
              <div className="mt-2">
                <p className="text-sm text-neutral-700">실시간 견적 서비스로 빠르고</p>
                <p className="text-sm text-neutral-700">안정적인 가격 제안</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeClient;
