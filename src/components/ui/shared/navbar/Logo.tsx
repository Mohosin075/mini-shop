import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" className="cursor-pointer flex items-center gap-3">
      <Image
        width={100}
        height={100}
        alt="logo"
        className="object-cover w-14 md:w-16"
        src="https://cdn-icons-png.freepik.com/256/8221/8221607.png"
      />
      <h3>Mini Shop</h3>
    </Link>
  );
};

export default Logo;
