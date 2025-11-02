"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const items = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companion" },
  { label: "Profile", href: "/my-journey" },
  { label: "Pricing", href: "/subscription" },
];

const NavItem = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-between gap-5 max-lg:gap-3">
      {items.map(({ label, href }) => (
        <Link
          href={href}
          key={label}
          className={pathName === href ? "font-bold" : ""}
        >
          {label}
        </Link>
      ))}
    </nav>
  );
};

export default NavItem;
