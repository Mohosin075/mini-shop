import Link from "next/link";

const FooterLIst = ({ lists, title }: { lists: string[]; title: string }) => {
  return (
    <div>
      <h4 className="mb-5">{title}</h4>
      <div className="flex flex-col gap-4">
        {lists.map((label, i) => (
          <Link key={i} href="" className="hover:underline hover:text-white">
            {label}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default FooterLIst;
