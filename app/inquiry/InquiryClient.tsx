"use client";

import { useRouter } from "next/navigation";
import Button from "../components/Button";
import { SafeInquiry, SafeUser } from "../types";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import { IoMdLock } from "react-icons/io";

interface InquiryClientProps {
  inquiries: SafeInquiry[];
  currentUser?: SafeUser | null;
}

const InquiryClient: React.FC<InquiryClientProps> = ({ inquiries, currentUser }) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(9);
  const currentInquiries = inquiries.slice(start, end);
  useEffect(() => {
    setStart(0 + 10 * (currentPage - 1));
    setEnd(10 * currentPage);
  }, [currentPage, inquiries]);

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
          {currentInquiries.map((inquiry, index) => (
            <div
              key={inquiry.id}
              className="grid grid-cols-6 cursor-pointer hover:bg-neutral-50"
              onClick={() => {
                inquiry.privacy === "비공개"
                  ? router.push(`/inquiry/check/${inquiry.id}`)
                  : router.push(`/inquiry/detail/${inquiry.id}`);
              }}
            >
              <div className="border-t px-4 py-4 col-span-1 flex justify-center">
                {inquiries.length - (currentPage - 1) * 10 - index}
              </div>
              <div className="border-t px-4 py-4 col-span-3 flex gap-2">
                {inquiry.privacy === "비공개" ? <IoMdLock size={22} /> : null}
                {inquiry.title}
              </div>
              <div className="border-t px-4 py-4 col-span-1 flex justify-center">{inquiry.author}</div>
              <div className="border-t px-4 py-4 col-span-1 flex justify-center">
                {inquiry.createdAt.substring(0, 10)}
              </div>
            </div>
          ))}
        </div>
        <div className="w-24">
          <Button label="글쓰기" onClick={() => router.push("/inquiry/write")} small />
        </div>
      </div>
      <Pagination dataLength={inquiries.length} currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default InquiryClient;
