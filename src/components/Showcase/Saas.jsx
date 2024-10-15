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

const Saas = ({ delay, index }) => {
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
    <>
      <ShowcaseCard
        delay={delay}
        index={index}
        htmlFor={"saas"}
        id={"saas"}
        isChecked={isChecked}
        handleOnClick={handleOnClick}
        className={`relative group`}
      >
        <div className="z-50 pt-[126px] bg-[#d9d9d9] w-fit h-full ">
          <p
            className={`font-poppins text-xl text-[#161414] tracking-widest ml-[57px] font-medium opacity-0 ${
              isChecked ? "opacity-100" : ""
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
                delay: isChecked ? 1 : 0.15,
              }}
              className="w-3/4 h-full absolute right-0 top-0 -z-50 "
            >
              <Swiper
                spaceBetween={50}
                slidesPerView={1}
                effect=""
                speed={500}
                modules={[]}
                onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className={`w-full h-full relative `}
              >
                <SwiperSlide className="flex flex-col pr-[64px] relative">
                  <img
                    src="/images/saas/slide-1.png"
                    alt="slide-1"
                    className="w-[710px] mt-auto ml-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex pr-[93px]">
                  <img
                    src="/images/saas/slide-2.png"
                    alt="slide-2"
                    className="my-auto w-[652px] ml-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex pr-[93px]">
                  <img
                    src="/images/saas/slide-3.png"
                    alt="slide-3"
                    className="my-auto w-[652px] ml-auto"
                  />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center pr-[174px] ">
                  <img
                    src="/images/saas/slide-4.png"
                    alt="slide-4"
                    className="my-auto w-[423px] ml-auto "
                  />
                </SwiperSlide>

                {/* NEXT & PREV BUTTON */}
                <button
                  className=""
                  onClick={() => swiperRef.current.slidePrev()}
                >
                  <img
                    src="/images/carousal-backward.png"
                    alt="carousal-backward"
                    className={`absolute bottom-[21px] left-[105px] size-[50px] z-50 ${
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
        {/* CLOSE BUTTON */}
        {isChecked && (
          <motion.button
            onClick={handleCloseClick}
            className="absolute top-[18px] rounded-full right-4 z-50 flex items-center justify-center"
            initial={{
              scale: 0,
              opacity: 0,
              rotate: -180,
              y: -50,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
              y: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              rotate: 180,
              y: -50,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
              rotate: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.6,
            }}
          >
            <motion.div
              className="rounded-full"
              whileHover={{
                rotate: 90,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <img
                src="/images/close-button.svg"
                alt="close-button"
                className="size-[46px]"
              />
            </motion.div>
          </motion.button>
        )}
      </ShowcaseCard>
      {/* VIEW PDF */}
      {isChecked && (
        <motion.a
          href={"https://app.storylane.io/share/itvfjcoo4ft4"}
          target="_blank"
          initial={{
            y: -100,
            width: 61,
            height: 61,
            opacity: 0,
            borderRadius: "50%",
            filter: "blur(10px)",
            transform: "translateX(-50%)",
          }}
          animate={{
            y: 0,
            width: 282,
            height: 61,
            opacity: 1,
            borderRadius: "0px",
            filter: "blur(0px)",
            transform: "translateX(-50%)",
          }}
          transition={{
            duration: 1,
            ease: [0.23, 1, 0.32, 1], // Custom easing for smooth motion
            opacity: { duration: 0.8 },
            width: {
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
            borderRadius: {
              delay: 0.2,
              duration: 0.8,
            },
            filter: {
              delay: 0.1,
              duration: 0.8,
            },
          }}
          className={`absolute -bottom-[101px] left-1/2 overflow-hidden gradientBorderMask`}
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              duration: 0.5,
              ease: "easeOut",
            }}
            type="email"
            name="email"
            placeholder="Type your email address here..."
            className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.4 }}
            >
              VIEW PRODUCT WALK-THRU
            </motion.span>
          </motion.button>
        </motion.a>
      )}
    </>
  );
};

export default Saas;
