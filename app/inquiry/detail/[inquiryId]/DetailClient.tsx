"use client";

import { SafeInquiry } from "@/app/types";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { RxTriangleDown, RxTriangleUp } from "react-icons/rx";

import DetailQuote from "./DetailQuote";
import ButtonWidth from "@/app/components/ButtonWidth";

interface DetailClientProps {
  inquiry: SafeInquiry | null;
}

const DetailClient: React.FC<DetailClientProps> = ({ inquiry }) => {
  const router = useRouter();
  const [password, setPassword] = useState("");
  const [toggle, setToggle] = useState(false);

  const handleDelete = () => {
    if (!(password === inquiry?.password)) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    axios
      .delete(`/api/inquiry/${inquiry?.id}`)
      .then(() => {
        toast.success("게시글이 삭제되었습니다.");
        router.push("/inquiry");
      })
      .catch(() => {
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="md:mt-10 flex flex-col gap-8">
      <div>
        <div className="flex">
          <div className="whitespace-pre w-24 pl-4 pr-14 py-2 bg-neutral-100 border-t">제목</div>
          <div className="pl-4 w-full py-2 border-t">{inquiry?.title}</div>
        </div>
        <div className="flex">
          <div className="whitespace-pre w-24 pl-4 pr-14 py-2 bg-neutral-100 border-y">작성자</div>
          <div className="pl-4 w-full py-2 border-y">{inquiry?.author}</div>
        </div>
      </div>
      <div className="pl-4 flex flex-col gap-10">
        <div className="flex justify-end">
          <div className="text-sm ">작성일 : {inquiry?.createdAt.slice(0, 10)}</div>
        </div>
        <div>{inquiry?.content}</div>
        <div
          onClick={() => setToggle(!toggle)}
          className="flex gap-2 border-t pt-2 hover:text-indigo-700 hover:font-bold"
        >
          <p className="">첨부 이미지</p>
          {toggle ? <RxTriangleUp size={24} /> : <RxTriangleDown size={24} />}
        </div>
        {inquiry?.image && toggle && <Image src={inquiry.image as string} alt="img" width={900} height={600} />}
        <div>
          <div className="w-full border-t border-y-4 py-2 flex justify-center bg-neutral-100">상세견적</div>
          <DetailQuote inquiry={inquiry} />
        </div>
      </div>
      <div className="flex">
        <div className="whitespace-pre w-24 pl-4 pr-14 py-2 bg-neutral-100 border-y">비밀번호</div>
        <div className="pl-4 w-full py-2 border-y flex gap-2 items-center">
          <input className="border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <div className="text-sm text-neutral-400">수정 및 삭제하려면 비밀번호를 입력하세요</div>
        </div>
      </div>
      <div className="flex justify-between">
        <div>
          <ButtonWidth label="목록" onClick={() => router.push("/inquiry")} small width="24" outline />
        </div>
        <div className="flex gap-4">
          <ButtonWidth label="삭제" onClick={handleDelete} width="24" outline small />
          <ButtonWidth label="수정" onClick={() => router.push("/inquiry")} width="24" small />
        </div>
      </div>
    </div>
  );
};

export default DetailClient;
