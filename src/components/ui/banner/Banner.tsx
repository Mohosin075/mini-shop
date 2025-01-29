const Banner = () => {
  return (
    <div className="relative h-[600px] text-center border-b-2 border-[#3b4055]">
      <div className="bgShadow inset-y-20 inset-x-0"></div>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-primary-light px-6 space-y-6 md:w-3/5  xl:w-2/5 mx-auto">
        <h1 className="space-y-2">
          Discover Amazing Offers at
          <span className="bg-gradient-to-r from-[#9268df] to-[#FFC947] bg-clip-text text-transparent underline  decoration-[#FFC947]">
            MiniShop
          </span>
        </h1>
        <p className="mb-6">
          Explore the best deals on high-quality products. Shop now and enjoy a
          seamless shopping experience with MiniShop!
        </p>
        <div className="flex flex-col space-y-3">
          <button className="CBtnBG">Discover now</button>
        </div>
      </div>
      <div className="bgShadow right-10 bottom-0"></div>
    </div>
  );
};

export default Banner;
