"use client";

import Button from "@/app/components/Button";
import Input from "@/app/components/input/Input";
import RadioInput from "@/app/components/input/RadioInput";
import Submit from "@/app/components/input/Submit";
import Textarea from "@/app/components/input/Textarea";
import { SafeUser } from "@/app/types";
import { BiDownArrow, BiUpArrow } from "react-icons/bi";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { useS3Upload } from "next-s3-upload";
import Quote from "./Quote";

interface WriteClientProps {
  currentUser?: SafeUser | null;
}

const WriteClient: React.FC<WriteClientProps> = ({ currentUser }) => {
  const router = useRouter();
  const [toggle, setToggle] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [imageFile, setImageFile] = useState();
  let { uploadToS3 } = useS3Upload();

  const {
    register,
    setValue,
    handleSubmit,
    watch,
    setError,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      userId: "",
      author: "",
      title: "",
      content: "",
      email: "",
      phoneNum: "",
      privacy: "비공개",
      password: "",
      tie: "일반,선염",
      fabric: "실크",
      design: "디자인 있어요",
      label: "필요 없음",
      boxPackage: "폴리백(기본)",
      quantity: 0,
      deadline: "",
      hopePrice: 0,
    },
  });
  const phoneNum = watch("phoneNum");
  const tie = watch("tie");
  const fabric = watch("fabric");
  const design = watch("design");
  const label = watch("label");
  const quantity = watch("quantity");

  let [tiePrice, designPrice, fabricPrice, labelPrice] = [0, 0, 0, 0];

  if (quantity > 3 && quantity < 100) {
    if (design) {
      designPrice = 400000;
    } else {
      designPrice = 200000;
    }
  } else if (quantity < 4) {
    designPrice = 0;
  } else {
    if (design) {
      designPrice = 200000;
    } else {
      designPrice = 100000;
    }
  }

  if (quantity > 3 && quantity < 200) {
    if (tie) {
      tiePrice = 6000 * quantity;
    }

    if (fabric === "제공") {
      designPrice = 100000;
    } else if (fabric === "실크") {
      fabricPrice = 7000 * quantity;
    } else {
      fabricPrice = 6000 * quantity;
    }
  } else if (quantity > 199 && quantity < 401) {
    if (tie) {
      tiePrice = 5000 * quantity;
    }

    if (fabric === "실크") {
      fabricPrice = 6000 * quantity;
    } else if (fabric === "폴리") {
      fabricPrice = 3000 * quantity;
    }
  }

  switch (label) {
    case "품표만":
      labelPrice = 500 * quantity;
      break;
    case "로고 라벨만":
      labelPrice = 500 * quantity;
      break;
    case "품표, 로고":
      labelPrice = 1000 * quantity;
  }

  useEffect(() => {
    if (currentUser) {
      setValue("userId", currentUser.id);
      setValue("author", currentUser.name);
      setValue("email", currentUser.email);
    }
  }, [currentUser, setValue]);

  useEffect(() => {
    if (phoneNum.length === 10) {
      setValue("phoneNum", phoneNum.replace(/(\d{3})(\d{3})(\d{4})/, "$1-$2-$3"));
    }
    if (phoneNum.length === 13) {
      setValue("phoneNum", phoneNum.replace(/-/g, "").replace(/(\d{3})(\d{4})(\d{4})/, "$1-$2-$3"));
    }
  }, [phoneNum, setValue]);

  const onSubmit: SubmitHandler<FieldValues> = async (data) => {
    setIsLoading(true);
    const regex = /^\d{3}-\d{4}-\d{4}$/;
    if (!regex.test(data.phoneNum)) {
      setError("phoneNum", { message: "번호가 형식에 일치하지 않습니다." });
      setIsLoading(false);
      return;
    }

    let image = { url: "" };
    if (imageFile) {
      image = await uploadToS3(imageFile);
    }

    axios
      .post("/api/inquiry", { ...data, tiePrice, designPrice, fabricPrice, labelPrice, image: image.url })
      .then(() => {
        toast.success("등록 완료");
        router.push("/inquiry");
      })
      .catch((error) => toast.error("Something went error."))
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleFileChange = async (event: any) => {
    setImageFile(event.target.files[0]);
  };

  return (
    <form className="flex flex-col gap-4 mt-10" onSubmit={handleSubmit(onSubmit)}>
      <Input id="title" label="제목" register={register} errors={errors} disabled={isLoading} maxLength={50} required />
      <Input
        id="author"
        label="작성자"
        register={register}
        errors={errors}
        disabled={isLoading}
        maxLength={14}
        required
      />
      <input onChange={handleFileChange} type="file" />
      <Textarea
        id="content"
        register={register}
        errors={errors}
        placeholder="자세한 금액 견적문의는 넥타이 견적 페이지를 이용해주세요. 개인정보는 관리자에게만 노출됩니다."
        required
      />
      <div className="w-full border rounded-md flex flex-col items-center">
        <div
          className="w-full py-4 cursor-pointer hover:bg-neutral-100 flex items-center justify-center gap-4"
          onClick={() => setToggle(!toggle)}
        >
          {toggle ? <BiUpArrow size={18} /> : <BiDownArrow size={18} />}
          상세 견적 {toggle ? "접기" : "펼치기"}
        </div>
        {toggle && (
          <Quote
            register={register}
            errors={errors}
            tiePrice={tiePrice}
            designPrice={designPrice}
            fabricPrice={fabricPrice}
            labelPrice={labelPrice}
            quantity={quantity}
          />
        )}
      </div>
      <Input id="email" label="email" type="email" register={register} errors={errors} disabled={isLoading} required />
      <Input
        id="phoneNum"
        label="휴대폰 번호"
        register={register}
        errors={errors}
        disabled={isLoading}
        maxLength={13}
        required
      />
      <div className="flex gap-4">
        <RadioInput id="privacy" label="비공개" register={register} required />
        <RadioInput id="privacy" label="공개" register={register} required />
      </div>
      <Input
        id="password"
        label="비밀번호"
        register={register}
        errors={errors}
        type="password"
        autoComplete="new-password"
        required
      />
      <div className="flex gap-4">
        <Button label="취소" onClick={() => !isLoading && router.push("/inquiry")} outline />
        <Submit label="확인" />
      </div>
    </form>
  );
};

export default WriteClient;
