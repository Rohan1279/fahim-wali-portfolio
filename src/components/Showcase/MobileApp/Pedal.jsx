import { useEffect, useRef, useState } from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCards,
  EffectFade,
  EffectFlip,
  EffectCube,
  EffectCreative,
  EffectCoverflow,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

import { motion } from "framer-motion";
const Pedal = ({
  currentApp,
  setCurrentApp,
  currentIndex,
  setCurrentIndex,
}) => {
  const swiperRef = useRef(null);
  useEffect(() => {
    if (!currentApp) {
      if (swiperRef.current) {
        swiperRef.current.slideTo(0); // Reset Swiper to the first slide
      }
    }
  }, [currentApp]);

  return (
    <>
      <div className="hidden md:flex h-full pt-[89px] leading-none border-blue-500">
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
              <motion.h2
                initial={{
                  x: 10,
                  rotate: "-90deg",
                }}
                animate={{
                  x: 0,
                  rotate: "-90deg",
                }}
                style={{
                  rotate: "-90deg",
                  WebkitTextStroke: currentApp !== "pedal" && "1px #585858",
                }}
                className={`font-oswald text-[#2D2D2D] -rotate-90 text-[110px] font-bold absolute -left-[4.6rem] top-[193px] -z-10`}
              >
                pedal
              </motion.h2>
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
                <span className="text-[14px] font-bold">
                  e-Bike sharing app
                </span>{" "}
                that allow riders to rent and ride across their favourite cities
                and contribute to an eco-friendly environment.
              </p>
              <p className="mt-[44px]">
                I joined the PEDAL team and worked on the MVP and made necessary
                changes to the MVP to make the user experience seamless and
                visual upgrades to the app’s user interface.
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
        </Swiper>

        {currentApp &&
          swiperRef.current &&
          swiperRef.current.activeIndex > 0 && (
            <div className="ml-auto flex justify-between w-[664px] absolute bottom-7 right-0 ">
              {/* PREVIOUS BUTTON */}
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

              {/* BACK TO MOBILE APP*/}
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

              {/* NEXT BUTTON */}
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
      </div>
      <div className="bg-[#d9d9d9] block md:hidden  leading-none pt-8 h-[88%]">
        <Swiper
          slidesPerView={1}
          effect="coverflow"
          speed={500}
          pagination={{
            dynamicBullets: true,
            bulletClass: "swiper-pagination-bullet",
          }}
          cardsEffect={{
            shadow: false,
            slideShadows: false,
          }}
          cubeEffect={{
            shadow: false,
            // slideShadows: true,
            // shadowOffset: 20,
            // shadowScale: 0.94,
          }}
          creativeEffect={{
            perspective: 1000,
            prev: {
              // shadow: true,
              translate: ["-20%", 0, -1],
            },
            next: {
              translate: ["100%", 0, 0],
            },
          }}
          fadeEffect={{
            crossFade: true,
          }}
          centeredSlides={true}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          modules={[
            EffectCards,
            EffectCreative,
            EffectCube,
            Pagination,
            EffectFade,
            EffectCoverflow,
          ]}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className=" h-full  border-black "
        >
          <SwiperSlide className="font-poppins font-normal text-[14px] text-justify leading-normal px-10 mt-2 bg-[#d9d9d9] h-full">
            <motion.img
              src="/images/mobile-app/pedal/pedal-logo.png"
              alt="pedal-logo"
              className="w-[122px] mb-3 mx-auto"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
            />
            <p className="">
              Pedal is an{" "}
              <span className="text-[14px] font-bold">e-Bike sharing app</span>{" "}
              that allow riders to rent and ride across their favourite cities
              and contribute to an eco-friendly environment.
            </p>
            <p className="mt-[24px]">
              I joined the PEDAL team and worked on the MVP and made necessary
              changes to the MVP to make the user experience seamless and visual
              upgrades to the app’s user interface.
            </p>
          </SwiperSlide>
          {
            // create an array of length 9 to render 9 slides
            Array.from({ length: 9 }).map((_, index) => (
              <SwiperSlide key={index} className=" ">
                <img
                  src={`/images/mobile-app/pedal/mobile/pedal (${
                    index + 1
                  }).png`}
                  alt={`pedal-${index}`}
                  className="w-[200px] mx-auto object-cover"
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
        {currentApp && (
          <div className=" flex justify-evenly w-full absolute bottom-6 right-0 ">
            {/* BACK TO MOBILE APP*/}
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
          </div>
        )}
      </div>
    </>
  );
};

export default Pedal;
