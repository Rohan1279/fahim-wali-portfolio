const Banner = () => {
  return (
    <div className="pt-[9px]">
      {/* FAHIM WALI LOGO */}
      <img
        src="/images/fahimwali_logo.png"
        alt="Banner"
        className="w-[202px] h-[116px] object-cover mx-auto"
      />
      <div className="flex space-x-[142px] justify-center items-center pl-[61px] pr-[92px]">
        {/* BANNER LEFT */}
        <div className=" translate-y-[40px]">
          <img
            src="/images/banner-left.svg"
            alt="Banner"
            className="w-[598px] h-[432px] object-cover"
          />
        </div>
        {/* BANNER RIGHT */}
        <div className="flex relative  translate-y-[67px]">
          {/* PORTFOLIO TEXT */}
          <div className="leading-[11.3rem] translate-x-[53px] z-20">
            <h1 className="font-oswald font-bold text-[200px] text-[#A67458] tracking-tight">
              PO
            </h1>
            <h1 className="font-oswald font-bold text-[200px] text-[#A67458] tracking-wide">
              RT
            </h1>
            <h1 className="font-oswald font-light text-[90px] text-[#d9d9d9] leading-[5rem] translate-x-[6px]">
              FOLIO
            </h1>
          </div>
          {/* NAME TAG */}
          <div className="relative z-10 -translate-y-5">
            <img src="/images/rectangle.png" alt="Banner" className="" />
            <img
              src="/images/fahim.png"
              alt="Banner"
              className=" absolute inset-y-9 inset-x-12 w-[250px] h-[259px] rotate-[5.46deg]"
            />
            <img
              src="/images/product-designer-sketch.svg"
              alt="Banner"
              className="object-cover absolute inset-x-16 inset-y-[310px]  rotate-[3.08deg] "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
