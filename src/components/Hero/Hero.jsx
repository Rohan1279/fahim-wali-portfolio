import AnimatedLeftBanner from "./AnimatedLeftBanner";
import AnimatedSketchMobile from "./AnimatedSketchMobile";
const Hero = () => {
  return (
    <>
      <div className="pt-[9px] hidden md:block">
        <img
          src="/images/fahimwali_logo.png"
          alt="Hero"
          className="w-[202px] h-[116px] object-cover mx-auto"
        />
        <div className="flex space-x-[142px] justify-center items-center pl-[61px] pr-[92px]">
          {/* HERO LEFT */}
          <div className="translate-y-[40px]">
            <AnimatedLeftBanner />
          </div>
          {/* HERO RIGHT */}
          <div className="flex flex-col items-start translate-y-[67px]">
            <div className="uppercase font-oswald font-light text-[#D9D9D9] flex justify-center items-end leading-none gap-x-[20px]">
              <h1 className="text-[128px] tracking-[-0.87rem]">fahim</h1>
              <span className="text-[36px] tracking-[0.67rem] mb-[6px]">
                wali
              </span>
            </div>
            <div className="mt-2 scale-[2] origin-left ml-[10px]">
              <AnimatedSketchMobile />
            </div>
          </div>
        </div>
      </div>
      <div className="pt-[14px] visible md:hidden flex flex-col justify-start items-center">
        <img
          src="/images/fahimwali_logo.png"
          alt="Hero"
          className="w-[136px] object-fill mx-auto"
        />
        <div className="-translate-y-[0px]">
          <AnimatedLeftBanner />
        </div>
        <div className="flex flex-col items-center -translate-y-[50px]">
          <div className="uppercase font-oswald font-light text-[#D9D9D9] flex justify-center items-end leading-none gap-x-[14px]">
            <h1 className="text-[128px] tracking-[-0.87rem]">fahim</h1>
            <span className="text-[36px] tracking-[0.67rem] mb-[6px]">
              wali
            </span>
          </div>
          <AnimatedSketchMobile />
        </div>
      </div>
    </>
  );
};

export default Hero;
