"use client";

import Logo from "./Logo";
import { SafeUser } from "@/app/types";

import Container from "../Container";
import UserMenu from "./UserMenu";
import TopNav from "./TopNav";
import MobileNav from "./MobileNav";

import MenuList from "./MenuList";

interface NavbarProps {
  currentUser?: SafeUser | null;
}

const Navbar: React.FC<NavbarProps> = ({ currentUser }) => {
  return (
    <div className="fixed w-full bg-white z-40 shadow-sm">
      <div className="py-4 border-b-[1px]">
        <Container>
          <TopNav currentUser={currentUser} />
          <div className="hidden md:flex flex-row items-center justify-between gap-3 md:gap-0">
            <Logo />
            <MenuList />
            <UserMenu currentUser={currentUser} />
          </div>
          <MobileNav currentUser={currentUser} />
        </Container>
      </div>
    </div>
  );
};

export default Navbar;
