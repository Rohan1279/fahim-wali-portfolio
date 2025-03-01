import { useCallback, useState, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion, AnimatePresence } from "framer-motion";

const SaasMobile = ({ isChecked, handleOnClick, handleCloseClick }) => {
  const swiperRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20,
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
    <motion.label
      htmlFor={"saas"}
      onClick={handleOnClick}
      initial={{
        opacity: 0,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        filter: "blur(0px)",
        transition: {
          duration: 0.7,
          delay: 0.15,
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.8,
        },
      }}
      className="block md:hidden w-full h-[507px] rounded-[10px] bg-[#d9d9d9] cursor-pointer relative group"
    >
      <input
        type="checkbox"
        id="saas"
        checked={isChecked}
        className="invisible"
        onChange={() => {}}
      />

      <h2
        className={`absolute top-11 -left-5 font-poppins -rotate-90 text-[48px] font-extrabold text-[#2d2d2d] transition-all group-hover/saas:-translate-y-3 ease-in-out duration-300 group-active/saas:scale-95 group-has-[:checked]:opacity-0`}
      >
        Saa<span className="text-[#a67458]">S</span>
      </h2>

      <AnimatePresence>
        {isChecked && (
          <motion.div
            initial={{ x: 100, opacity: 0, filter: "blur(10px)" }}
            animate={{ x: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ x: 100, opacity: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1],
              delay: 1,
            }}
            className="w-full h-full absolute right-0 top-0 -z-50"
          >
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              speed={500}
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
              className="w-full h-full relative"
            >
              <SwiperSlide className="flex flex-col relative">
                <div className="flex justify-evenly gap-x-2 items-end h-1/3 pt-24">
                  <motion.div variants={itemVariants} className="">
                    <p className="font-poppins font-medium text-lg text-[#161414] tracking-widest">
                      product name
                    </p>
                    <h3 className="font-poppins font-extrabold text-[36px] text-[#2D2D2D]">
                      Driip
                    </h3>
                  </motion.div>
                  <hr className="border border-[#2d2d2d] w-0 h-24" />
                  <div>
                    <motion.div variants={itemVariants}>
                      <p className="font-poppins font-medium text-lg text-[#161414] tracking-widest leading-[3rem]">
                        role
                      </p>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <h3 className="font-poppins font-extralight text-[26px] text-[#2d2d2d] leading-[6px]">
                        product
                      </h3>
                    </motion.div>
                    <motion.div variants={itemVariants}>
                      <h3 className="font-poppins font-extralight text-[26px] text-[#2d2d2d]">
                        designer
                      </h3>
                    </motion.div>
                  </div>
                </div>
                <img
                  src="/images/saas/slide-1.png"
                  alt="slide-1"
                  className="mt-auto w-full h-full object-cover"
                />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <img
                  src="/images/saas/slide-2.png"
                  alt="slide-2"
                  className="my-auto w-[652px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <img
                  src="/images/saas/slide-3.png"
                  alt="slide-3"
                  className="my-auto w-[652px] mx-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="flex">
                <img
                  src="/images/saas/slide-4.png"
                  alt="slide-4"
                  className="my-auto w-[423px] mx-auto"
                />
              </SwiperSlide>

              <button
                className="absolute bottom-11 left-3 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperRef.current?.slidePrev();
                }}
              >
                <img
                  src="/images/carousal-backward.png"
                  alt="carousal-backward"
                  className={`size-[50px] ${
                    currentIndex !== 0 ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  } transition-all duration-[350] ease-in-out`}
                />
              </button>

              <button
                className="absolute bottom-11 right-3 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperRef.current?.slideNext();
                }}
              >
                <img
                  src="/images/carousal-forward.png"
                  alt="carousal-forward"
                  className={`size-[50px] ${
                    currentIndex !== 3 ? "opacity-100 scale-100" : "opacity-0 scale-0"
                  } transition-all duration-[350] ease-in-out`}
                />
              </button>
            </Swiper>
          </motion.div>
        )}
      </AnimatePresence>

      {isChecked && (
        <motion.button
          onClick={handleCloseClick}
          className="absolute top-3 right-3 rounded-full z-50 flex items-center justify-center"
          initial={{ scale: 0, opacity: 0, rotate: -180, y: -50 }}
          animate={{ scale: 1, opacity: 1, rotate: 0, y: 0 }}
          exit={{ scale: 0, opacity: 0, rotate: 180, y: -50 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, rotate: -10 }}
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
              className="size-[36px]"
            />
          </motion.div>
        </motion.button>
      )}

      {isChecked && (
        <motion.a
          href={"https://driip.ai"}
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
            ease: [0.23, 1, 0.32, 1],
            opacity: { duration: 0.8 },
            width: {
              delay: 0.2,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
              damping: 15,
            },
            borderRadius: { delay: 0.2, duration: 0.8 },
            filter: { delay: 0.1, duration: 0.8 },
          }}
          className="block md:hidden absolute -bottom-20 left-1/2 overflow-hidden gradientBorderMask"
        >
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
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
    </motion.label>
  );
};

export default SaasMobile; 