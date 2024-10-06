import { useCallback, useState, useRef } from "react";
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
import { motion, AnimatePresence } from "framer-motion";
import ShowcaseCard from "./ShowcaseCard";
import LinearBlur from "../ProgressiveBlur/ProgressiveBlur";

const Saas = () => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isChecked, setIsChecked] = useState(false);
  const handleOnClick = useCallback(
    (e) => {
      if (!isChecked) {
        setIsChecked(true);
      } else {
        e.preventDefault();
      }
    },
    [isChecked]
  );

  const handleCloseClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsChecked(false);
  }, []);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
      // filter: "blur(4px)",
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <ShowcaseCard
      htmlFor={"saas"}
      id={"saas"}
      isChecked={isChecked}
      handleOnClick={handleOnClick}
      className={`relative group`}
    >
      <div className="z-50 pt-[126px] bg-[#d9d9d9] w-fit h-full">
        <p
          className={`font-poppins text-xl text-[#161414] tracking-widest ml-[57px] font-medium opacity-0 blur-sm ${
            isChecked ? "opacity-100 blur-none" : ""
          } transition-all duration-500 ease-in-out delay-150`}
        >
          product category
        </p>
        <h2
          className={`font-poppins text-[80px] font-extrabold text-[#2d2d2d] leading-[90%] ml-[54px] ${
            isChecked ? "text-[#2d2d2d]/10" : ""
          } transition-all duration-300 ease-in-out delay-150`}
        >
          SaaS
        </h2>

        <motion.div
          className="mt-[78px] ml-[57px]"
          variants={containerVariants}
          initial="hidden"
          animate={isChecked ? "visible" : "hidden"}
        >
          <motion.div variants={itemVariants}>
            <p className="font-poppins font-medium text-xl text-[#161414] tracking-widest">
              product name
            </p>
            <h3 className="font-poppins font-extrabold text-[48px] text-[#2D2D2D]">
              Driip
            </h3>
          </motion.div>

          <motion.div variants={itemVariants}>
            <p className="font-poppins font-medium text-xl text-[#161414] tracking-widest leading-[3.7rem] mt-5">
              role
            </p>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-poppins font-extralight text-[32px] text-[#2d2d2d] leading-[6px]">
              product
            </h3>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="font-poppins font-extralight text-[32px] text-[#2d2d2d]">
              designer
            </h3>
          </motion.div>
        </motion.div>
      </div>
      <AnimatePresence>
        {isChecked && (
          <motion.div
            initial={{
              x: 100,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{
              x: 0,
              opacity: 1,
              filter: "blur(0px)",
            }}
            exit={{
              x: 100,
              opacity: 0,
              filter: "blur(10px)",
            }}
            transition={{
              duration: isChecked ? 0.8 : 0.3,
              ease: isChecked ? [0.4, 0, 0.2, 1] : [0.4, 0, 1, 1],
              delay: isChecked ? 0.15 : 1,
            }}
            className="w-[745px] h-full absolute right-0 top-0 -z-50"
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              effect=""
              speed={500}
              modules={[]}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className={`w-full h-full relative`}
            >
              <SwiperSlide className="flex flex-col pr-[64px] relative">
                <img
                  src="/images/saas/slide-1.png"
                  alt="slide-1"
                  className="mt-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <img
                  src="/images/saas/slide-2.png"
                  alt="slide-2"
                  className="my-auto w-[652px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <img
                  src="/images/saas/slide-3.png"
                  alt="slide-3"
                  className="my-auto w-[652px]"
                />
              </SwiperSlide>
              <SwiperSlide className="flex justify-center pr-[64px]">
                <img
                  src="/images/saas/slide-4.png"
                  alt="slide-4"
                  className="my-auto w-[423px]"
                />
              </SwiperSlide>

              <button
                className=""
                onClick={() => swiperRef.current.slidePrev()}
              >
                <img
                  src="/images/carousal-backward.png"
                  alt="carousal-backward"
                  className={`absolute bottom-[21px] left-0 size-[50px] z-50 ${
                    currentIndex !== 0
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  } transition-all duration-[350] ease-in-out`}
                />
              </button>

              <button
                className=""
                onClick={() => swiperRef.current.slideNext()}
              >
                <img
                  src="/images/carousal-forward.png"
                  alt="carousal-forward"
                  className={`absolute bottom-[21px] right-[86px] size-[50px] z-50  ${
                    currentIndex !== 3
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-0"
                  } transition-all duration-[350] ease-in-out`}
                />
              </button>
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>
      {isChecked && (
        <button
          onClick={handleCloseClick}
          className="absolute top-[18px] right-4 z-50"
        >
          <img
            src="/images/close-button.svg"
            alt="close-button"
            className="size-[46px]"
          />
        </button>
      )}
    </ShowcaseCard>
  );
};

export default Saas;
