import React from "react";
import NavItem from "./NavItem";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";
import Image from "next/image";

const Navbar = () => {
  return (
    <nav className="flex px-[10vw] max-lg:px-4 items-center mt-4 justify-between">
      <Image src="/logo.png" width={80} height={80} alt="logo" />
      <div className="flex items-center gap-4">
        <NavItem />
        <SignedOut>
          <SignInButton>
            <button className="bg-[#FE5933] text-white rounded-lg font-sm text-sm sm:text-base h-5 sm:h-12 px-2 sm:px-5 cursor-pointer">
              Sign in
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
};

export default Navbar;
