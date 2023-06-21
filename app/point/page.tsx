"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { useRouter } from "next/navigation";
import * as htmlToImage from "html-to-image";

import Container from "../components/Container";
import ClientOnly from "../components/ClientOnly";
import ColorList from "./ColorList";
import Button from "../components/Button";
import Banner from "@/app/components/Banner";
import FileInput from "../components/input/FileInput";
import Tie from "../components/Tie";
import Moveable from "react-moveable";

const CustomTie = () => {
  const router = useRouter();
  const [tieColor, setTieColor] = useState("black");
  const [pointLogo, setPointLogo] = useState("");
  const [isClick, setIsClick] = useState(true);
  const downloadRef = useRef<HTMLDivElement>(null);
  const targetRef = useRef<HTMLDivElement>(null);
  const moveableRef = useRef<Moveable>(null);

  const width = downloadRef.current?.offsetWidth;
  const height = downloadRef.current?.offsetHeight;

  const donwLoad = async () => {
    if (downloadRef.current === null) {
      return;
    }
    setIsClick(false);
    const dataUrl = await htmlToImage.toPng(downloadRef.current);

    const link = document.createElement("a");
    link.download = "youngsun.png";
    link.href = dataUrl;
    link.click();
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
          <div ref={downloadRef} className="bg-neutral-100 w-full rounded relative flex justify-center">
            {pointLogo && (
              <>
                <div className="absolute" onClick={() => setIsClick(!isClick)}>
                  <div
                    ref={targetRef}
                    style={{
                      maxWidth: "auto",
                      maxHeight: "auto",
                      minWidth: "auto",
                      minHeight: "auto",
                      width: 50,
                      height: 50,
                    }}
                  >
                    <Image src={pointLogo} className="pointer-events-none" alt="image" fill />
                  </div>
                  {isClick && (
                    <Moveable
                      ref={moveableRef}
                      target={targetRef}
                      draggable={true}
                      throttleDrag={1}
                      edgeDraggable={false}
                      startDragRotate={0}
                      throttleDragRotate={0}
                      resizable={isClick}
                      keepRatio={false}
                      throttleResize={1}
                      renderDirections={["nw", "n", "ne", "w", "e", "sw", "s", "se"]}
                      rotatable={isClick}
                      throttleRotate={0}
                      rotationPosition={"top"}
                      snappable={true}
                      bounds={{
                        left: -((width ? width : 0) / 2) + 25,
                        top: 0,
                        right: (width ? width : 0) / 2 + 25,
                        bottom: height,
                      }}
                      onDrag={(e) => {
                        e.target.style.transform = e.transform;
                      }}
                      onResize={(e) => {
                        e.target.style.width = `${e.width}px`;
                        e.target.style.height = `${e.height}px`;
                        e.target.style.transform = e.drag.transform;
                      }}
                      onRotate={(e) => {
                        e.target.style.transform = e.drag.transform;
                      }}
                    />
                  )}
                </div>
              </>
            )}
            <Tie tieColor={tieColor} />
          </div>
          <div className="w-full pl-10 flex flex-col gap-8">
            <ColorList setTieColor={setTieColor} />
            <div>
              <p className="text-neutral-400 text-sm pb-2">이미지를 클릭하면 사이즈와 크기를 조절할 수 있습니다.</p>
              <FileInput setLogo={setPointLogo} />
            </div>
            <Button label="이미지 저장하기" outline onClick={donwLoad} />
            <Button label="견적 페이지로 이동하기" onClick={() => router.push("/quote")} />
          </div>
        </div>
      </Container>
    </ClientOnly>
  );
};

export default CustomTie;
