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
          className={`rounded bg-gradient-to-r hover:from-[#2B59FF] hover:to-[#BB2BFF]  hover:text-white active:from-[#0035F5] active:to-[#A600F5]  ${
            pathname === `/${list?.location}`
              ? "from-[#2B59FF] to-[#BB2BFF] text-white"
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
