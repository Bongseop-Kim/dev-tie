"use client";

import MenuItem from "./MenuItem";
import { useRouter } from "next/navigation";

const MenuList = () => {
  const router = useRouter();

  return (
    <div className="flex">
      <MenuItem onClick={() => router.push("/design")} label="디자인" />
      <MenuItem onClick={() => router.push("/portpolio")} label="포트폴리오" />
      <MenuItem onClick={() => router.push("/inquiry")} label="견적 및 문의" />
    </div>
  );
};

export default MenuList;
