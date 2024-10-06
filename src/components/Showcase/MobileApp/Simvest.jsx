import { useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  EffectFlip,
  EffectCube,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";

const Simvest = ({
  currentApp,
  setCurrentApp,
  currentIndex,
  setCurrentIndex,
}) => {
  const swiperRef = useRef(null);

  return (
    <div className="h-full  pt-[89px] leading-none flex border-blue-500 -z-50">
      {/* <h1 className="text-6xl text-black">asdasd</h1> */}

      <Swiper
        // spaceBetween={}
        slidesPerView={1}
        effect=""
        speed={500}
        modules={[]}
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className={`h-full relative `}
      >
        <SwiperSlide className="flex">
          <div
            onClick={() => setCurrentApp("simvest")}
            className=" border-blue-500 relative w-fit flex gap-x-[43px]"
          >
            <div className="font-poppins font-normal text-[14px] leading-normal -tracking-[0.02em] w-[335px] mt-[100px] ">
              <p className="">
                Simvest is a{" "}
                <span className="text-[14px] font-bold">stock trading app</span>{" "}
                that also provide users with risk factor analysis, predictive
                analysis, and market trends to make comprehensive decisions to
                buy and sell shares.
              </p>
              <p className="mt-[44px]">
                I designed the user interface for the product and focused on
                iterating the product’s interface using customer surveys, user
                reviews, and feedbacks.
              </p>
              <div className="flex justify-between items-end w-full">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setCurrentApp(null);
                    if (swiperRef.current) {
                      swiperRef.current.slideTo(0); // Reset Swiper to the first slide
                    }
                  }}
                  className="font-poppins font-normal text-[14px] underline underline-offset-1 text-[#737373] mt-[70px]"
                >
                  back to mobile app{" "}
                </button>
                <button
                  className="size-[50px] mr-[12px]"
                  onClick={() => swiperRef.current.slideNext()}
                >
                  <img
                    src="/images/carousal-forward.png"
                    alt="carousal-forward"
                    className={` z-50  ${
                      currentIndex !== 3
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-0"
                    } transition-all duration-[350] ease-in-out translate-y-3`}
                  />
                </button>
              </div>
            </div>
            <div
              onClick={() => setCurrentApp("simvest")}
              className={`relative`}
            >
              <h2
                style={{
                  rotate: "90deg",
                  WebkitTextStroke: currentApp !== "simvest" && "1px #585858",
                }}
                className={`font-oswald ${
                  currentApp === "simvest" ? "text-[#A67458]" : "text-[#d9d9d9]"
                } transition-all text-[110px] font-bold absolute -right-[13.05rem] top-[196px] -z-10`}
              >
                simvest
              </h2>
              <img
                src="/images/mobile-app/simvest/simvest.png"
                alt="simvest"
                className={`w-[245px] z-50 transition-all duration-300`}
              />
              {/* ${currentApp === "simvest" ? "ml-[110px]" : "ml-[95px]"} */}
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide className="w-[669px] h-full flex flex-col relative pt-2">
          <img
            src="/images/mobile-app/simvest/slide-2.png"
            alt="slide-2"
            className="h-[455px] w-[669px] ml-auto"
          />
          <div className="ml-auto flex justify-between w-[664px] mt-[40px]">
            <button
              className="size-[50px] z-50"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <img
                src="/images/carousal-backward.png"
                alt="carousal-backward"
                className={` z-50  ${
                  currentIndex !== 3
                    ? "opacity-100 scale-100"
                    : "opacity-0 scale-0"
                } transition-all duration-[350] ease-in-out`}
              />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setCurrentApp(null);
                if (swiperRef.current) {
                  swiperRef.current.slideTo(0); // Reset Swiper to the first slide
                }
              }}
              className="flex-1 font-poppins font-normal text-[14px] underline underline-offset-1 text-[#737373]"
            >
              back to mobile app{" "}
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Simvest;
