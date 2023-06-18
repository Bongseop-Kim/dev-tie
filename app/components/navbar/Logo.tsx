"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

const Logo = () => {
  const router = useRouter();

  return (
    <div onClick={() => router.push("/")} className="flex items-center gap-4 cursor-pointer">
      <Image alt="Logo" height="20" width="30" src="/images/logo.png" />
      <div className="font-bold text-xl">영선산업</div>
    </div>
  );
};

export default Logo;
