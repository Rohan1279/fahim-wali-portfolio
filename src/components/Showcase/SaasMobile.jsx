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
      <h2 className="-rotate-90 font-poppins font-semibold text-[16px] translate-y-36 text-[#2d2d2d] transition-all group-hover/saas:-translate-y-3 ease-in-out duration-300 group-active/saas:scale-95 group-has-[:checked]:opacity-0">
        Consumer
      </h2>
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
                  src="/images/saas/driip.png"
                  alt="driip"
                  className="w-full my-auto"
                />
              </SwiperSlide>
              <SwiperSlide className="flex flex-col relative">
                <div className="flex justify-evenly gap-x-2 items-end h-1/3 pt-24">
                  <motion.div variants={itemVariants} className="">
                    <p className="font-poppins font-medium text-lg text-[#161414] tracking-widest">
                      product name
                    </p>
                    <h3 className="font-poppins font-extrabold text-[36px] text-[#2D2D2D]">
                      Dravmo
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
                  src="/images/saas/dravmo.png"
                  alt="dravmo"
                  className="w-full my-auto"
                />
              </SwiperSlide>

              <button
                className="absolute bottom-4 left-3 z-50"
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
                className="absolute bottom-4 right-3 z-50"
                onClick={(e) => {
                  e.stopPropagation();
                  swiperRef.current?.slideNext();
                }}
              >
                <img
                  src="/images/carousal-forward.png"
                  alt="carousal-forward"
                  className={`size-[50px] ${
                    currentIndex !== 1 ? "opacity-100 scale-100" : "opacity-0 scale-0"
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
        <div className="flex flex-col gap-y-3 absolute -bottom-[230px] left-1/2 -translate-x-1/2 w-full items-center">
          <motion.a
            href={"https://generated-bowl-a9a.notion.site/Driip_Pivot_Case-Study-20ef256a042d80c69096da9557ea9c2b"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            initial={{
              y: -100,
              width: 61,
              height: 61,
              opacity: 0,
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              width: 282,
              height: 61,
              opacity: 1,
              borderRadius: "0px",
              filter: "blur(0px)",
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
            className="overflow-hidden gradientBorderMask"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.5, ease: "easeOut" }}
              type="button"
              className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
              >
                VIEW DRIIP CASE STUDY
              </motion.span>
            </motion.button>
          </motion.a>

          <motion.a
            href={"https://driip.ai"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            initial={{
              y: -100,
              width: 61,
              height: 61,
              opacity: 0,
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              width: 282,
              height: 61,
              opacity: 1,
              borderRadius: "0px",
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1],
              opacity: { duration: 0.8 },
              width: {
                delay: 0.25,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
              borderRadius: { delay: 0.25, duration: 0.8 },
              filter: { delay: 0.15, duration: 0.8 },
            }}
            className="overflow-hidden gradientBorderMask"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.65, duration: 0.5, ease: "easeOut" }}
              type="button"
              className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.85, duration: 0.4 }}
              >
                VISIT DRIIP
              </motion.span>
            </motion.button>
          </motion.a>

          <motion.a
            href={"https://dravmo.io"}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            initial={{
              y: -100,
              width: 61,
              height: 61,
              opacity: 0,
              borderRadius: "50%",
              filter: "blur(10px)",
            }}
            animate={{
              y: 0,
              width: 282,
              height: 61,
              opacity: 1,
              borderRadius: "0px",
              filter: "blur(0px)",
            }}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1],
              opacity: { duration: 0.8 },
              width: {
                delay: 0.3,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
              borderRadius: { delay: 0.3, duration: 0.8 },
              filter: { delay: 0.2, duration: 0.8 },
            }}
            className="overflow-hidden gradientBorderMask"
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.7, duration: 0.5, ease: "easeOut" }}
              type="button"
              className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9, duration: 0.4 }}
              >
                VISIT DRAVMO
              </motion.span>
            </motion.button>
          </motion.a>
        </div>
      )}
    </motion.label>
  );
};

export default SaasMobile; 