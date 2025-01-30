"use client";
import { ListItem } from "@/types";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavList = ({ Lists }: { Lists: ListItem[] }) => {
  const pathname = usePathname();
  return (
    <ul className="menu min-h-full  p-4 space-y-1 md:space-y-2 flex">
      {Lists.map((list, i) => (
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
            <span className="mr-2 text-lg md:text-xl">{list?.icon}</span>
            {list?.Label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavList;
