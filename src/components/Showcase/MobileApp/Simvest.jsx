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
const Simvest = ({
  currentApp,
  setCurrentApp,
  currentIndex,
  setCurrentIndex,
}) => {
  const swiperRef = useRef(null);

  return (
    <>
      <div className="hidden md:flex h-full  pt-[89px] leading-none  border-blue-500 -z-50">
        {/* <h1 className="text-6xl text-black">asdasd</h1> */}

        <Swiper
          // spaceBetween={}
          slidesPerView={1}
          effect=""
          speed={500}
          modules={[]}
          onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={`h-full relative`}
        >
          <SwiperSlide className="flex">
            <div
              onClick={() => setCurrentApp("simvest")}
              className=" border-blue-500 relative w-fit flex gap-x-[43px]"
            >
              <div className="font-poppins font-normal text-[14px] leading-normal -tracking-[0.02em] w-[335px] mt-[100px] ">
                <p className="">
                  Simvest is a{" "}
                  <span className="text-[14px] font-bold">
                    stock trading app
                  </span>{" "}
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
                <motion.h2
                  initial={{
                    x: -10,
                    rotate: "90deg",
                  }}
                  animate={{
                    x: 0,
                    rotate: "90deg",
                  }}
                  style={{
                    rotate: "90deg",
                    WebkitTextStroke: currentApp !== "simvest" && "1px #585858",
                  }}
                  className={`font-oswald ${
                    currentApp === "simvest"
                      ? "text-[#A67458]"
                      : "text-[#d9d9d9]"
                  }  text-[110px] font-bold absolute -right-[13.5rem] top-[193px] -z-10`}
                >
                  simvest
                </motion.h2>
                <motion.img
                  initial={{
                    x: 10,
                  }}
                  animate={{
                    x: 0,
                  }}
                  src="/images/mobile-app/simvest/simvest.png"
                  alt="simvest"
                  className={`w-[245px] z-50`}
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
          <SwiperSlide className="font-poppins font-normal text-[14px] text-justify leading-normal px-10 mt-8 bg-[#d9d9d9] h-full">
            <motion.img
              src="/images/mobile-app/simvest/simvest-logo.png"
              alt="simvest-logo"
              className="w-[193px]  mb-8 mx-auto "
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
            />
            <p className=" ">
              Simvest is a{" "}
              <span className="text-[14px] font-bold">stock trading app</span>{" "}
              that also provide users with risk factor analysis, predictive
              analysis, and market trends to make comprehensive decisions to buy
              and sell shares.
            </p>
            <p className="mt-[44px]">
              I designed the user interface for the product and focused on
              iterating the product’s interface using customer surveys, user
              reviews, and feedbacks.
            </p>
          </SwiperSlide>
          {
            // create an array of length 9 to render 9 slides
            Array.from({ length: 4 }).map((_, index) => (
              <SwiperSlide key={index} className=" ">
                <img
                  src={`/images/mobile-app/simvest/mobile/simvest (${
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

export default Simvest;
