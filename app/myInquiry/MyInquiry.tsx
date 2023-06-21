"use client";

import { useRouter } from "next/navigation";
import { SafeInquiry } from "../types";

interface InquiryClientProps {
  myInquiries: SafeInquiry[] | null;
}

const MyInquiryClient: React.FC<InquiryClientProps> = ({ myInquiries }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex flex-col items-end gap-4">
        <div className="mx-auto w-full">
          <div className="grid grid-cols-6 mt-10">
            <div className="border-t px-4 py-3 bg-neutral-100 col-span-1 font-bold flex justify-center">번호</div>
            <div className="border-t px-4 py-3 bg-neutral-100 col-span-3 font-bold flex justify-center">제목</div>
            <div className="border-t px-4 py-3 bg-neutral-100 col-span-1 font-bold flex justify-center">작성자</div>
            <div className="border-t px-4 py-3 bg-neutral-100 col-span-1 font-bold flex justify-center">작성일</div>
          </div>
          {myInquiries &&
            myInquiries.map((inquiry, index) => (
              <div
                key={inquiry.id}
                className="grid grid-cols-6 cursor-pointer hover:bg-neutral-50"
                onClick={() => router.push(`/inquiry/detail/${inquiry.id}`)}
              >
                <div className="border-t px-4 py-4 col-span-1 flex justify-center">{index}</div>
                <div className="border-t px-4 py-4 col-span-3 flex gap-2">{inquiry.title}</div>
                <div className="border-t px-4 py-4 col-span-1 flex justify-center">{inquiry.author}</div>
                <div className="border-t px-4 py-4 col-span-1 flex justify-center">
                  {inquiry.createdAt.substring(0, 10)}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default MyInquiryClient;
