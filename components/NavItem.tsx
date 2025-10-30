"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const items = [
  { label: "Home", href: "/" },
  { label: "Companions", href: "/companions" },
  { label: "My Journey", href: "/my-journey" },
];

const NavItem = () => {
  const pathName = usePathname();

  return (
    <nav className="flex justify-between gap-5">
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
