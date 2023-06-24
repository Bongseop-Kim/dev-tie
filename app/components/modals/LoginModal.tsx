"use client";

import { signIn } from "next-auth/react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { useCallback, useState } from "react";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import Modal from "./Modal";
import Heading from "../Heading";
import Input from "../input/Input";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

//:TODO: 폼 데이터를 다루기 위한 react-hook-form

const LoginModal = () => {
  const router = useRouter();

  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isLoading, setIsLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true);
    signIn("credentials", {
      ...data,
      redirect: false,
    }).then((callback) => {
      setIsLoading(false);

      if (callback?.ok) {
        toast.success("로그인! 👋");
        router.refresh();
        loginModal.onClose();
      }

      if (callback?.error) {
        toast.error("이메일 또는 비밀번호를 확인해주세요.");
      }
    });
  };

  const toggle = useCallback(() => {
    loginModal.onClose();
    registerModal.onOpen();
  }, [loginModal, registerModal]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="환영합니다! 👋" subtitle="로그인하세요!" />
      <Input id="email" label="이메일" disabled={isLoading} register={register} errors={errors} required />
      <Input
        id="password"
        type="password"
        label="비밀번호"
        disabled={isLoading}
        register={register}
        errors={errors}
        required
      />
    </div>
  );

  const footerContent = (
    <div className="flex flex-col gap-4 mt-3">
      <hr />
      {/* <Button outline label="카카오로 로그인" icon={RiKakaoTalkFill} onClick={() => signIn("kakao")} /> */}
      <div className="text-neutral-500 text-center mt-4 font-light">
        <div className="justify-center flex flex-row items-center gap-2">
          <div>계정이 없으신가요?</div>
          <div onClick={toggle} className="text-netural-800 cursor-pointer hover:underline">
            회원가입
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <Modal
      disabled={isLoading}
      isOpen={loginModal.isOpen}
      title="로그인"
      actionLabel="로그인"
      onClose={loginModal.onClose}
      onSubmit={handleSubmit(onSubmit)}
      body={bodyContent}
      footer={footerContent}
    />
  );
};

export default LoginModal;
