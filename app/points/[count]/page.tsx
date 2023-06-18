"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import ColorList from "../../point/ColorList";
import Banner from "../../components/Banner";
import ClientOnly from "../../components/ClientOnly";
import Container from "../../components/Container";
import Button from "../../components/Button";
import Tie from "../../components/Tie";
import FileInput from "../../components/input/FileInput";

import * as htmlToImage from "html-to-image";

interface IParams {
  count?: string;
}
const Points = ({ params }: { params: IParams }) => {
  const [tieColor, setTieColor] = useState("black");
  const router = useRouter();
  const [one, setOne] = useState("");
  const [two, setTwo] = useState("");
  const [three, setThree] = useState("");
  const [four, setFour] = useState("");
  const [logos, setLogos] = useState<string[]>([]); // useState로 logos 배열 선언
  const ref = useRef<HTMLDivElement>(null);

  const donwLoad = async () => {
    if (ref.current === null) {
      return;
    }
    const dataUrl = await htmlToImage.toJpeg(ref.current);

    const link = document.createElement("a");
    link.download = "youngsun.png";
    link.href = dataUrl;
    link.click();
  };

  useEffect(() => {
    // params.count가 변경될 때마다 logos 배열 업데이트
    switch (params.count) {
      case "one":
        setLogos([one, one, one, one]);
        break;
      case "two":
        setLogos([one, two, one, two]);
        break;
      case "four":
        setLogos([one, two, three, four]);
        break;
      default:
        setLogos([]);
        break;
    }
  }, [params.count, one, two, three, four]);

  const editor = () => {
    switch (params.count) {
      case "one":
        return <FileInput setLogo={setOne} />;
      case "two":
        return (
          <>
            <FileInput setLogo={setOne} />
            <FileInput setLogo={setTwo} />
          </>
        );
      case "four":
        return (
          <>
            <FileInput setLogo={setOne} />
            <FileInput setLogo={setTwo} />
            <FileInput setLogo={setThree} />
            <FileInput setLogo={setFour} />
          </>
        );
    }
  };
  return (
    <ClientOnly>
      <Banner
        img="/images/designBack.png"
        title="디자인"
        p1="자유롭게 이미지를 넣고 색상을 선택하여"
        p2="원하는 상품의 디자인을 손쉽게 구현할 수 있습니다."
      />
      <Container>
        <div className="flex pt-10">
          <div ref={ref} className="bg-neutral-100 w-full rounded relative flex justify-center">
            <Tie tieColor={tieColor} logo={logos} />
          </div>
          <div className="w-full pl-10 flex flex-col gap-8">
            <ColorList setTieColor={setTieColor} />
            {editor()}
            <Button label="이미지 저장하기" outline onClick={donwLoad} />
            <Button label="견적 페이지로 이동하기" onClick={() => router.push("/quote")} />
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default Points;
