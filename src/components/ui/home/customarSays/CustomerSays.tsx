import { clientSays } from "@/constants/Constants";
import SectionTitle from "../../shared/sectionTitle/SectionTitle";
import { FaTwitter } from "react-icons/fa";
import Image from "next/image";

const CustomerSays = () => {
  return (
    <div className="CContainer py-16 bg-[#252835]">
      <SectionTitle
        title="What our customers say"
        desc="Read why thousands of marketers, writers, and entrepreneurs love us so much."
      />
      <div className="">
        <div className="columns-1 sm:columns-2 lg:columns-4 gap-5 lg:gap-8 [&>Image:not(:first-child)]:mt-8 md:[&>Image:not(:first-child)]:mt-10 py-16">
          {clientSays.map((item, index) => (
            <div
              key={index}
              className="border shadow-md rounded-lg px-6 py-8 w-full flex flex-col h-fit mb-6 bg-white"
            >
              <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <Image
                    width={100}
                    height={100}
                    alt="logo"
                    className="object-cover w-16 h-16 rounded-full"
                    src={item.image}
                  />
                  <div className="flex flex-col">
                    <span className="text-xl text-primary-dark font-semibold">
                      {item.name}
                    </span>
                    <span>{item.twitterUsername}</span>
                  </div>
                </div>

                <div>
                  <FaTwitter className="text-primary-lightBlue" />
                </div>
              </div>
              <span className="text-primary-dark leading-5 mt-5">
                {item.review}
              </span>
              <span className="text-primary-lightBlue font-thin hover:underline hover:cursor-pointer">
                {item.hashTag}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerSays;
