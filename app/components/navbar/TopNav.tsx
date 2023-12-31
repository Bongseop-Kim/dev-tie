"use client";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import MenuItem from "./MenuItem";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";

interface TopNavProps {
  currentUser?: SafeUser | null;
}

const TopNav: React.FC<TopNavProps> = ({ currentUser }) => {
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();

  return (
    <div className="hidden md:flex justify-end">
      {currentUser ? (
        <div className="flex flex-row gap-6 p-2">
          <MenuItem onClick={() => signOut()} label="로그아웃" sm />
        </div>
      ) : (
        <div className="flex flex-row gap-6 p-2">
          <MenuItem onClick={loginModal.onOpen} label="로그인" sm />
          <MenuItem onClick={registerModal.onOpen} label="회원가입" sm />
        </div>
      )}
    </div>
  );
};

export default TopNav;
