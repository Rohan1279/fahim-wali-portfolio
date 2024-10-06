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

const Pedal = ({
  currentApp,
  setCurrentApp,
  currentIndex,
  setCurrentIndex,
}) => {
  const swiperRef = useRef(null);
  return (
    <div className="h-full pt-[89px] leading-none flex border-blue-500 ">
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
            onClick={() => setCurrentApp("pedal")}
            className=" border-blue-500 relative w-fit"
          >
            <h2
              style={{
                rotate: "-90deg",
                WebkitTextStroke: currentApp !== "pedal" && "1px #585858",
              }}
              className={`font-oswald ${
                currentApp === "pedal" ? "text-[#2D2D2D]" : "text-[#d9d9d9]"
              } transition-all text-[110px] font-bold absolute -left-[4.6rem] top-[196px] -z-10`}
            >
              pedal
            </h2>
            <img
              src="/images/mobile-app/pedal/pedal.png"
              alt="pedal"
              className={`w-[245px] z-50 ${
                currentApp === "pedal" ? "ml-[110px]" : "ml-[95px]"
              } transition-all duration-300`}
            />
          </div>
          <div className="font-poppins font-normal text-[14px] leading-normal max-w-[333px] ml-[67px] mt-[73px]">
            <p className="">
              Pedal is an{" "}
              <span className="text-[14px] font-bold">e-Bike sharing app</span>{" "}
              that allow riders to rent and ride across their favourite cities
              and contribute to an eco-friendly environment.
            </p>
            <p className="mt-[44px]">
              I joined the PEDAL team and worked on the MVP and made necessary
              changes to the MVP to make the user experience seamless and visual
              upgrades to the app’s user interface.
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
        </SwiperSlide>
        <SwiperSlide className="w-[669px] h-full flex flex-col relative pt-2">
          <img
            src="/images/mobile-app/pedal/slide-2.png"
            alt="slide-2"
            className="h-[455px] w-[669px] ml-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="flex w-[657px] h-full flex-col relative pr-[16px] pt-2">
          <img
            src="/images/mobile-app/pedal/slide-3.png"
            alt="slide-2"
            className="h-[455px] w-[669px] ml-auto"
          />
        </SwiperSlide>
        <SwiperSlide className="flex w-[657px] h-full flex-col relative pr-[16px] pt-2">
          <img
            src="/images/mobile-app/pedal/slide-4.png"
            alt="slide-2"
            className="h-[455px] w-[669px] ml-auto"
          />
        </SwiperSlide>
        {currentIndex > 0 && (
          <div className="ml-auto flex justify-between w-[664px] absolute bottom-7 right-0 ">
            <button
              className="size-[50px] z-50"
              onClick={() => swiperRef.current.slidePrev()}
            >
              <img
                src="/images/carousal-backward.png"
                alt="carousal-backward"
                className={` z-50  ${
                  currentIndex <= 3
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
              className="font-poppins font-normal text-[14px] underline underline-offset-1 text-[#737373] z-50"
            >
              back to mobile app{" "}
            </button>

            <button
              className="size-[50px] z-50"
              onClick={() => swiperRef.current.slideNext()}
            >
              <img
                src="/images/carousal-forward.png"
                alt="carousal-forward"
                className={` z-50  ${
                  currentIndex === 3
                    ? "opacity-0 scale-0"
                    : "opacity-100 scale-100"
                } transition-all duration-[350] ease-in-out`}
              />
            </button>
          </div>
        )}
      </Swiper>
    </div>
  );
};

export default Pedal;
263 / 2;
