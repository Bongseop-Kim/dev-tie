"use client";

import ButtonWidth from "@/app/components/ButtonWidth";
import { SafeInquiry } from "@/app/types";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-hot-toast";

interface CheckClientProps {
  inquiry: SafeInquiry | null;
}

const CheckClient: React.FC<CheckClientProps> = ({ inquiry }) => {
  const [password, setPassword] = useState("");
  const router = useRouter();
  const hadnlePush = () => {
    if (!(password === inquiry?.password)) {
      toast.error("비밀번호가 일치하지 않습니다.");
      return;
    }
    router.push(`/inquiry/detail/${inquiry.id}`);
  };
  return (
    <div className="flex flex-col gap-4 items-center md:mt-20">
      <div>
        <p>비밀글 입니다.</p>
        <p>확인을 원하시면 비밀번호를 입력해주세요.</p>
      </div>
      <div className="pl-4 py-2 flex gap-2 items-center">
        <div className="whitespace-pre w-24 pl-4 pr-14 py-2 bg-neutral-100 border-y">비밀번호</div>
        <input className="border" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div className="flex gap-4">
        <ButtonWidth label="취소" onClick={() => router.push("/inquiry")} width="24" outline small />
        <ButtonWidth label="확인" onClick={hadnlePush} width="24" small />
      </div>
    </div>
  );
};

export default CheckClient;
