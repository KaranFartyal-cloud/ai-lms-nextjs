import React from "react";
import NavItem from "./NavItem";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignUpButton,
  UserButton,
} from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="flex px-[10vw] mt-4 justify-between">
      <h1 className="font-bold">LOGO</h1>
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
