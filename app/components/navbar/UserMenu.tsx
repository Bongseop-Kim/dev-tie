"use client";

import Avatar from "../Avatar";
import { SlBag } from "react-icons/sl";
import { useCallback, useState } from "react";
import MenuItem from "./MenuItem";

import useRegisterModal from "@/app/hooks/useRegisterModal";
import useLoginModal from "@/app/hooks/useLoginModal";

import { signOut } from "next-auth/react";
import { SafeUser } from "@/app/types";
import { useRouter } from "next/navigation";

interface UserMenuProps {
  currentUser?: SafeUser | null;
}

const UserMenu: React.FC<UserMenuProps> = ({ currentUser }) => {
  const router = useRouter();
  const registerModal = useRegisterModal();
  const loginModal = useLoginModal();
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative pl-6">
      <div className="flex-row items-center gap-6 flex">
        <div onClick={() => router.push("/cart")} className="p-4 md:py-1 md:px-2 cursor-pointer">
          <SlBag size={22} />
        </div>

        <div onClick={toggleOpen} className="p-4 md:py-1 md:px-2 cursor-pointer">
          <Avatar src={currentUser?.image} />
        </div>
      </div>
      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-full bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            {currentUser ? (
              <>
                <MenuItem onClick={() => router.push("/myInquiry")} label="문의내역" />
                <MenuItem onClick={() => router.push("/portpolio")} label="포트폴리오" />
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

export default UserMenu;
