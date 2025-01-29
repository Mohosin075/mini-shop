import Link from "next/link";
import { FaBars } from "react-icons/fa";

const Profile = () => {
  return (
    <div className="flex items-center gap-3 md:gap-5">
      <Link href="/login">
        <button className="py-[7px]  px-2 md:px-4 rounded-md text-xs md:text-lg border  text-primary-light hover:border-[#BB2BFF] bg-gradient-to-r from-[#FC6739] to-[#FFC947] bg-clip-text hover:text-transparent transition-all duration-100 flex items-center gap-2">Sign in</button>
      </Link>
      <label
        htmlFor="my-drawer-2"
        className="drawer-button lg:hidden btn bg-primaryGray text-xl"
      >
        <FaBars />
      </label>
    </div>
  );
};

export default Profile;
