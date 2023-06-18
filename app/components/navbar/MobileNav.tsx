"use client";

import { useCallback, useState } from "react";
import Logo from "./Logo";
import { useRouter } from "next/navigation";
import { AiOutlineMenu } from "react-icons/ai";
import { SlBag } from "react-icons/sl";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";
import { SafeUser } from "@/app/types";
import { signOut } from "next-auth/react";

import MenuItem from "./MenuItem";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const MobileNav: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="md:hidden flex items-center justify-between">
      <div onClick={toggleOpen} className="cursor-pointer">
        <AiOutlineMenu size={24} />
      </div>
      <Logo />
      <div onClick={() => router.push("/cart")} className="cursor-pointer">
        <SlBag size={22} />
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-full bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <MenuItem onClick={() => router.push("/")} label="디자인" />
            <MenuItem onClick={() => router.push("/portpolio")} label="포트폴리오" />
            <MenuItem onClick={() => router.push("/")} label="견적 및 문의" />
            <hr />
            {currentUser ? (
              <>
                <MenuItem onClick={() => router.push("/myInquiry")} label="문의내역" />
                <MenuItem onClick={() => router.push("/myInfo")} label="개인정보" />
                <hr />
                <MenuItem onClick={() => signOut()} label="로그아웃" />
              </>
            ) : (
              <>
                <MenuItem onClick={loginModal.onOpen} label="로그인" />
                <MenuItem onClick={registerModal.onOpen} label="회원가입" />
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
