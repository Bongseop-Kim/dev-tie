"use client";

import { SafeInquiry } from "@/app/types";

interface DetailQuoteProps {
  inquiry: SafeInquiry | null;
}

const DetailQuote: React.FC<DetailQuoteProps> = ({ inquiry }) => {
  let [tiePrice, designPrice, fabricPrice, labelPrice, quantity, hopePrice, totalPrice] = [0, 0, 0, 0, 0, 0, 0];
  let [boxPackage, deadline, design, fabric, label, tie] = ["", "", "", "", "", ""];
  if (inquiry) {
    tiePrice = inquiry.tiePrice;
    designPrice = inquiry.designPrice;
    fabricPrice = inquiry.fabricPrice;
    labelPrice = inquiry.labelPrice;
    quantity = inquiry.quantity;
    hopePrice = inquiry.hopePrice;
    totalPrice = tiePrice + designPrice + fabricPrice + labelPrice;

    boxPackage = inquiry.boxPackage;
    design = inquiry.design;
    fabric = inquiry.fabric;
    label = inquiry.label;
    tie = inquiry.tie;
    deadline = inquiry.deadline || "미정";
  }

  return (
    <div className="flex flex-col w-full ">
      <div className="grid grid-cols-6">
        <div className="py-2 flex justify-center border-y border-r bg-neutral-100 ">봉제</div>
        <div className="py-2 flex justify-center border-y border-r bg-neutral-100">디자인</div>
        <div className="py-2 flex justify-center border-y border-r bg-neutral-100">원단</div>
        <div className="py-2 flex justify-center border-y border-r bg-neutral-100">라벨</div>
        <div className="py-2 flex justify-center border-y border-r bg-neutral-100">패키지</div>
        <div className="py-2 flex justify-center border-y bg-neutral-100">수량</div>
      </div>
      <div className="grid grid-cols-6">
        <div className="py-2 flex justify-center border-b border-r">{tie}</div>
        <div className="py-2 flex justify-center border-b border-r">{design}</div>
        <div className="py-2 flex justify-center border-b border-r">{fabric}</div>
        <div className="py-2 flex justify-center border-b border-r">{label}</div>
        <div className="py-2 flex justify-center border-b border-r">{boxPackage}</div>
        <div className="py-2 flex justify-center border-b ">{quantity}</div>
      </div>
      <div className="grid grid-cols-6">
        <div className="py-2 flex justify-center border-b border-r">{tiePrice.toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r">{designPrice.toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r">{fabricPrice.toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r">{labelPrice.toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r"></div>
        <div className="py-2 flex justify-center border-b "></div>
      </div>
      <div className="grid grid-cols-6">
        <div className="py-2 flex justify-center border-b border-r bg-neutral-100">단가</div>
        <div className="py-2 flex justify-center border-b border-r bg-neutral-100">공급가액</div>
        <div className="py-2 flex justify-center border-b border-r bg-neutral-100">총합</div>
        <div className="py-2 flex justify-center border-b border-r bg-neutral-100">희망가격</div>
        <div className="py-2 flex justify-center border-b border-r bg-neutral-100">마감기한</div>
        <div className="py-2 flex justify-center border-b "></div>
      </div>
      <div className="grid grid-cols-6">
        <div className="py-2 flex justify-center border-b border-r">
          {(totalPrice / quantity ? totalPrice / quantity : 0).toLocaleString("ko-KR")}
        </div>
        <div className="py-2 flex justify-center border-b border-r">{totalPrice.toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r">{(totalPrice * 1.1).toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r">{hopePrice.toLocaleString("ko-KR")}</div>
        <div className="py-2 flex justify-center border-b border-r">{deadline}</div>
        <div className="py-2 flex justify-center border-b "></div>
      </div>
    </div>
  );
};

export default DetailQuote;
