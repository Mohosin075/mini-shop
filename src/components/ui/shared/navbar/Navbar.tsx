"use client";
import { ListItem } from "@/constants/Constants";
import Logo from "./Logo";

import Profile from "./Profile";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <div className="CContainer drop-shadow-lg flex justify-between items-center py-3">
      <div className="bgShadow inset-y-20 inset-x-0"></div>
      {/* Navbar Left */}
      <div className="flex items-center md:gap-8 lg:gap-14">
        <Logo />
        <ul className="min-h-full hidden lg:flex items-center gap-2">
          {ListItem.map((list, i) => (
            <li
              key={i}
              className={`rounded bg-gradient-to-r hover:from-[#9268df] hover:to-[#FFC947]  hover:text-white active:from-[#5c37a0] active:to-[#c9854e]  ${
                pathname === `/${list?.location}`
                  ? "from-[#5c37a0] to-[#c9854e] text-white"
                  : ""
              }`}
            >
              <Link
                href={`/${list?.location}`}
                className="flex items-center px-4 py-2 text-sm md:text-lg capitalize"
              >
                {list?.Label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Navbar right */}
      <Profile />
    </div>
  );
};

export default Navbar;
