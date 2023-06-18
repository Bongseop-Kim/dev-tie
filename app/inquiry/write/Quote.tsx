"use client";

import Input from "@/app/components/input/Input";
import RadioInput from "@/app/components/input/RadioInput";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface QuoteProps {
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  tiePrice: number;
  designPrice: number;
  fabricPrice: number;
  labelPrice: number;
  quantity: number;
}

const Quote: React.FC<QuoteProps> = ({
  register,
  errors,
  tiePrice,
  designPrice,
  fabricPrice,
  labelPrice,
  quantity,
}) => {
  const totalPrice = tiePrice + designPrice + fabricPrice + labelPrice;

  return (
    <div className="py-4 w-full">
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full">넥타이 종류</div>
        <div className="flex gap-4 w-full">
          <RadioInput id="tie" label="일반,선염" register={register} required />
          <RadioInput id="tie" label="일반,날염(준비중)" register={register} required />
          <RadioInput id="tie" label="지퍼,선염" register={register} required />
          <RadioInput id="tie" label="지퍼,날염(준비중)" register={register} required />
          <RadioInput id="tie" label="유아" register={register} required />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full">넥타이 원단</div>
        <div className="flex gap-4 w-full">
          <RadioInput id="fabric" label="실크" register={register} required />
          <RadioInput id="fabric" label="폴리" register={register} required />
          <RadioInput id="fabric" label="친황경 재생섬유" register={register} required />
          <RadioInput id="fabric" label="제공" register={register} required />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full">디자인</div>
        <div className="flex gap-4 w-full items-center">
          <RadioInput id="design" label="디자인 있어요" register={register} required />
          <RadioInput id="design" label="참고 사진 있어요" register={register} required />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full flex gap-4 items-center">
          라벨
          <div className="text-sm text-neutral-400 ">500장 이상 주문가능합니다.</div>
        </div>
        <div className="flex gap-4 w-full items-center">
          <RadioInput id="label" label="품표만" register={register} required />
          <RadioInput id="label" label="로고 라벨만" register={register} required />
          <RadioInput id="label" label="품표, 로고" register={register} required />
          <RadioInput id="label" label="제공" register={register} required />
          <RadioInput id="label" label="필요 없음" register={register} required />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full flex items-center gap-4">
          케이스
          <div className="text-sm text-neutral-400 "> 하드케이스,종이케이스는 1,000장 이상 부터 가능합니다.</div>
        </div>
        <div className="flex gap-4 w-full items-center">
          <RadioInput id="boxPackage" label="폴리백(기본)" register={register} required />
          <RadioInput id="boxPackage" label="하드 케이스" register={register} required />
          <RadioInput id="boxPackage" label="종이 케이스" register={register} required />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full flex items-center gap-4">
          수량
          <div className="text-sm text-neutral-400 ">
            100장 미만은 4장단위로 주문가능합니다. 400장 이상 별도 문의 바랍니다.
          </div>
        </div>
        <div className="flex gap-4 w-full items-center">
          <Input id="quantity" type="number" label="수량" register={register} errors={errors} required valueAsNumber />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full flex items-center gap-4">
          희망 납기일 <div className="text-sm text-neutral-400 ">원단 발주부터 제작까지 기간은 1달입니다.</div>
        </div>
        <div className="flex gap-4 w-full items-center">
          <input type="date" {...register("deadline")} className={`p-4 border rounded-md`} />
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full flex items-center gap-4">
          예상 금액 <div className="text-sm text-neutral-400 ">디자인에 따라 금액은 변동될 수 있습니다.</div>
        </div>
        <div className="flex flex-col w-full ">
          <div className="grid grid-cols-7">
            <div className="py-2 flex justify-center border-y border-r">봉제비용</div>
            <div className="py-2 flex justify-center border-y border-r">디자인비용</div>
            <div className="py-2 flex justify-center border-y border-r">원단비용</div>
            <div className="py-2 flex justify-center border-y border-r">라벨</div>
            <div className="py-2 flex justify-center border-y border-r">단가</div>
            <div className="py-2 flex justify-center border-y border-r">공급가액</div>
            <div className="py-2 flex justify-center border-y">총합</div>
          </div>
          <div className="grid grid-cols-7">
            <div className="py-2 flex justify-center border-b border-r">{tiePrice.toLocaleString("ko-KR")}</div>
            <div className="py-2 flex justify-center border-b border-r">{designPrice.toLocaleString("ko-KR")}</div>
            <div className="py-2 flex justify-center border-b border-r">{fabricPrice.toLocaleString("ko-KR")}</div>
            <div className="py-2 flex justify-center border-b border-r">{labelPrice.toLocaleString("ko-KR")}</div>
            <div className="py-2 flex justify-center border-b border-r">
              {(totalPrice / quantity ? totalPrice / quantity : 0).toLocaleString("ko-KR")}
            </div>
            <div className="py-2 flex justify-center border-b border-r">{totalPrice.toLocaleString("ko-KR")}</div>
            <div className="py-2 flex justify-center border-b">{(totalPrice * 1.1).toLocaleString("ko-KR")}</div>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-2 items-center gap-4 w-full p-4">
        <div className="whitespace-nowrap w-full flex items-center gap-4">
          희망 가격<div className="text-sm text-neutral-400 ">원단 발주부터 제작까지 기간은 1달입니다.</div>
        </div>
        <div className="flex gap-4 w-full items-center">
          <Input
            id="hopePrice"
            label="희망 가격"
            type="number"
            register={register}
            errors={errors}
            required
            valueAsNumber
          />
        </div>
      </div>
    </div>
  );
};

export default Quote;
