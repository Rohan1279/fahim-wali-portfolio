import React, { useCallback, useRef, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
import { motion } from "framer-motion";
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
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const Branding = ({ delay, index }) => {
  const swiperRef = useRef(null);

  const [isChecked, setIsChecked] = useState(false);
  const [isSelected, setIsSelected] = useState({
    webDesign: false,
    brandingGuideline: false,
    socialContent: false,
    logoDesign: false,
    productMockups: false,
  });
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
    setIsSelected({
      webDesign: false,
      brandingGuideline: false,
      socialContent: false,
      logoDesign: false,
      productMockups: false,
    });
  }, []);

  const imageVariants = {
    hidden: { x: -100, opacity: 0, scale: 0.95, filter: "blur(10px)" },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
      scale: 1,
      filter: "blur(0px)",
      transition: {
        delay: custom * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    }),
  };

  const images = [
    {
      src: "/images/branding/color-palette.png",
      alt: "color-palette",
      className: " md:w-[467px]  md:absolute left-[62px] top-10 z-50",
      customDelay: 0,
    },
    {
      src: "/images/branding/hero.png",
      alt: "hero",
      className: " md:w-[593px]  md:absolute bottom-[0]",
      customDelay: 1,
    },
    {
      src: "/images/branding/cup.png",
      alt: "cup",
      className: " md:w-[187px]  md:absolute right-[48px] z-50",
      customDelay: 2,
    },
    {
      src: "/images/branding/water-bottle.png",
      alt: "water-bottle",
      className: " md:w-[282px]  md:absolute right-0 top-[141px] z-40",
      customDelay: 3,
    },
    {
      src: "/images/branding/water-bottle-2.png",
      alt: "water-bottle-2",
      className: "md:w-[176px]  md:absolute right-[53px] bottom-5 z-50",
      customDelay: 4,
    },
  ];

  return (
    <>
      <ShowcaseCard
        delay={delay}
        index={index}
        isChecked={isChecked}
        handleOnClick={handleOnClick}
        htmlFor="branding"
        id="branding"
        className="hidden md:block mt-[33px] md:mt-[38px] relative overflow-hidden group/branding"
      >
        <div
          className={`grid grid-cols-3 place-content-between relative w-[794px] h-[470px] mt-[72px] ml-[35px] border-black`}
        >
          {/* WD */}
          <motion.div
            initial="hidden"
            animate={isChecked ? "visible" : "hidden"}
            variants={imageVariants}
            custom={0}
            className={`cursor-pointer w-[344px] h-[214px] border-black relative group/card`}
            onClick={() => setIsSelected({ ...isSelected, webDesign: true })}
          >
            <img
              src="/images/branding/branding (3).png"
              alt=""
              className="w-full h-full object-cover group-hover/card:blur-sm transition-all duration-300"
            />
            <motion.div className="absolute size-[97%] bg-[#2d2d2d]  opacity-[0.72] top-1 left-1 rounded-xl font-poppins text-[#D9D9D9] flex flex-col justify-center items-start pl-[32px]  leading-10 shadow-md  group-hover/card:pl-10 transition-all duration-300">
              <span className="text-[32px] font-light">Web</span>
              <span className="text-[40px] font-bold">Design</span>
            </motion.div>
          </motion.div>

          {/* BRANDING GUIDLINE */}
          <motion.div
            onClick={() =>
              setIsSelected({ ...isSelected, brandingGuideline: true })
            }
            initial="hidden"
            animate={isChecked ? "visible" : "hidden"}
            variants={imageVariants}
            custom={1}
            className="cursor-pointer col-span-2 ml-auto w-[418px] h-[216px]  border-black relative group/card"
          >
            <img
              src="/images/branding/branding (5).png"
              alt=""
              className="w-full h-full object-cover group-hover/card:blur-sm transition-all duration-300"
            />
            <div className="absolute w-[98%] h-[97%] bg-[#2d2d2d] opacity-[0.72] top-[3px] left-1 rounded-xl font-poppins text-[#D9D9D9] flex flex-col justify-center items-end text-right pr-[43px] leading-10 shadow-md group-hover/card:pr-12 transition-all duration-300">
              <span className="text-[32px] font-light">Brand</span>
              <span className="text-[40px] font-bold">Guideline</span>
            </div>
          </motion.div>

          {/* SOCIAL CONTENT */}
          <motion.div
            onClick={() =>
              setIsSelected({ ...isSelected, socialContent: true })
            }
            initial="hidden"
            animate={isChecked ? "visible" : "hidden"}
            variants={imageVariants}
            custom={2}
            className="cursor-pointer w-[247px] h-[228px]  border-black relative group/card"
          >
            <img
              src="/images/branding/branding (1).png"
              alt=""
              className="w-full h-full object-cover group-hover/card:blur-sm transition-all duration-300 "
            />
            <div className="absolute w-[96%] h-[96%] bg-[#2d2d2d] opacity-[0.72] top-[5px] left-[5px] rounded-xl font-poppins text-[#D9D9D9] flex flex-col justify-end items-end text-right pr-[20px] pb-4 leading-10 shadow-md group-hover/card:pr-6 transition-all duration-300">
              <span className="text-[32px] font-light">Social</span>
              <span className="text-[40px] font-bold">Content</span>
            </div>
          </motion.div>

          {/* LOGO DESIGN  */}
          <motion.div
            onClick={() => setIsSelected({ ...isSelected, logoDesign: true })}
            initial="hidden"
            animate={isChecked ? "visible" : "hidden"}
            variants={imageVariants}
            custom={3}
            className="cursor-pointer mx-auto w-[228px] h-[228px]  border-black relative group/card"
          >
            {" "}
            <img
              src="/images/branding/branding (4).png"
              alt=""
              className="w-full h-full object-cover group-hover/card:blur-md transition-all duration-300 "
            />
            <div className="absolute w-[98%] h-[97%] bg-[#2d2d2d] opacity-[0.72] top-[3px] left-1 rounded-xl font-poppins text-[#D9D9D9] flex flex-col justify-center items-center text-right  leading-10 shadow-md group-hover/card:leading-[2.8rem] transition-all duration-300">
              <span className="text-[32px] font-light">Logo</span>
              <span className="text-[40px] font-bold">
                De<span className="text-[#A67458]">si</span>gn
              </span>
            </div>
          </motion.div>

          {/* PRODUCT MOCKUPS */}
          <motion.div
            onClick={() =>
              setIsSelected({ ...isSelected, productMockups: true })
            }
            initial="hidden"
            animate={isChecked ? "visible" : "hidden"}
            variants={imageVariants}
            custom={4}
            className="cursor-pointer ml-auto w-[256px] h-[228px]  border-black relative group/card"
          >
            {" "}
            <img
              src="/images/branding/branding (2).png"
              alt=""
              className="w-full h-full object-cover group-hover/card:blur-md transition-all duration-300 "
            />
            <div className="absolute w-[98%] h-[97%] bg-[#2d2d2d] opacity-[0.72] top-0 left-1 rounded-xl font-poppins text-[#D9D9D9] flex flex-col justify-end items-start text-right pl-[24px] pb-4 leading-10 shadow-md group-hover/card:pl-7 transition-all duration-300">
              <span className="text-[32px] font-light">Product</span>
              <span className="text-[40px] font-bold">Mockups</span>
            </div>
          </motion.div>
        </div>
        {/*//! OVERLAY */}
        <div
          className={`${
            isSelected.webDesign ||
            isSelected.brandingGuideline ||
            isSelected.socialContent ||
            isSelected.logoDesign ||
            isSelected.productMockups
              ? "absolute top-0 w-[1132px] h-[671px]"
              : "hidden"
          } z-[999]`}
        >
          {isSelected.webDesign && (
            <motion.video
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                delay: 0.25,
                duration: 0.4,
                ease: "easeOut",
              }}
              src="/web-design-video.mp4"
              autoPlay
              loop
              muted
              controls
              className="w-full h-full object-cover"
            ></motion.video>
          )}
          {isSelected.brandingGuideline && (
            <div className="h-full">
              <Swiper
                slidesPerView={1}
                effect="creative"
                speed={500}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  bulletClass: "swiper-pagination-bullet",
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
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
                modules={[EffectCreative, Pagination, Autoplay]}
                // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-full bg-[#d9d9d9]"
              >
                <SwiperSlide className="">
                  <motion.img
                    src="/images/branding/dravmo_brandbook.png"
                    alt="pedal-logo"
                    className="w-full h-full object-cover"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                  />
                </SwiperSlide>
                <SwiperSlide className="">
                  <motion.img
                    src="/images/branding/bolstar_brandbook.png"
                    alt="pedal-logo"
                    className="w-full h-full object-cover"
                    initial={{ y: 10, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
          )}
          {isSelected.socialContent && (
            <div className="h-full">
              <Swiper
                slidesPerView={1}
                effect="creative"
                speed={1500}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  bulletClass: "swiper-pagination-bullet",
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
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
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCreative, Autoplay, Pagination]}
                // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-full bg-[#d9d9d9]"
              >
                {Array.from({ length: 6 }).map((_, index) => (
                  <SwiperSlide key={index} className="">
                    <motion.img
                      src={`/images/branding/social-content/social-content (${
                        index + 1
                      }).png`}
                      alt="pedal-logo"
                      className="w-full h-full object-cover"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.25,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {isSelected.logoDesign && (
            <div className="h-full">
              <Swiper
                slidesPerView={1}
                effect="creative"
                speed={1500}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  bulletClass: "swiper-pagination-bullet",
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
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
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCreative, Autoplay, Pagination]}
                // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-full bg-[#d9d9d9]"
              >
                {Array.from({ length: 2 }).map((_, index) => (
                  <SwiperSlide key={index} className="">
                    <motion.img
                      src={`/images/branding/logo-design/${index + 1}.png`}
                      alt="pedal-logo"
                      className="w-full h-full object-cover"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.25,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}
          {isSelected.productMockups && (
            <div className="h-full">
              <Swiper
                slidesPerView={1}
                effect="creative"
                speed={1500}
                centeredSlides={true}
                pagination={{
                  clickable: true,
                  dynamicBullets: true,
                  bulletClass: "swiper-pagination-bullet",
                }}
                autoplay={{
                  delay: 2000,
                  disableOnInteraction: false,
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
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: false,
                }}
                modules={[EffectCreative, Autoplay, Pagination]}
                // onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                className="w-full h-full bg-[#d9d9d9]"
              >
                {Array.from({ length: 2 }).map((_, index) => (
                  <SwiperSlide key={index} className="">
                    <motion.img
                      src={`/images/branding/product-mockups/${index + 1}.png`}
                      alt="pedal-logo"
                      className="w-full h-full object-cover"
                      initial={{ y: 10, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.25,
                        duration: 0.4,
                        ease: "easeOut",
                      }}
                    />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          )}

          {/* CLOSE BUTTON */}
          <motion.button
            onClick={() => setIsSelected(false)}
            className="absolute top-3 rounded-full inset-x-0 z-[999] flex items-center justify-center"
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
                src={
                  isSelected.webDesign ||
                  isSelected.logoDesign ||
                  isSelected.socialContent
                    ? "/images/close-button-white.svg"
                    : "/images/close-button.svg"
                }
                alt="close-button"
                className="size-[36px]"
              />
            </motion.div>
          </motion.button>
        </div>
        {/* RIGHT SIDE */}
        <div
          style={{
            transform: isChecked && "translateY(0px)",
          }}
          className={`absolute top-0 right-0  text-right  ${
            isChecked ? "bg-[#d9d9d9]" : "bg-transparent"
          } h-full w-[300px] z-50 font-poppins text-[128px] font-extrabold text-[#2d2d2d] leading-[5.2rem] group-hover/branding:-translate-y-3 ease-in-out duration-300 group-active/branding:scale-95`}
        >
          <div className="pt-[100px] pr-[74px]">
            <span className="block">br</span>
            <span className="block">an</span>
            <span
              style={{
                color: isChecked && "#A67458",
              }}
              className={`block text-[#A67458] group-hover/branding:text-[#D9D9D9] group-checked/branding:text-[#A67458]  -mt-1  transition-colors delay-[100ms]`}
            >
              di
            </span>
            <span className="block">ng</span>
          </div>
          <p
            className={`text-[12px] ml-8 w-9/12 font-medium leading-[1.7em] mt-16 text-left ${
              isChecked ? "opacity-100" : "opacity-0"
            } transition-all `}
          >
            Explore some of my favorite conceptual landing pages, brand
            guidelines, social media contents, logo design and product mockups.{" "}
          </p>
        </div>
      </ShowcaseCard>
      {/* MOBILE VERSION */}
      <motion.label
        htmlFor={"branding"}
        onClick={handleOnClick}
        initial={{
          opacity: 0,
          // y: 40,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          // y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            delay: 0.15 * 1,
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.8,
          },
        }}
        className="block md:hidden w-full h-[507px] rounded-[10px] bg-[#d9d9d9] cursor-pointer relative group overflow-hidden translate-y-[33px]"
      >
        <input
          type="checkbox"
          id="branding"
          checked={isChecked}
          className="invisible"
          onChange={() => {}} // Controlled component
        />

        <div
          style={{
            transform: isChecked && "translateY(0px)",
          }}
          className={`absolute top-16  left-2  text-left  ${
            isChecked ? "bg-[#d9d9d9] hidden" : "bg-transparent block"
          } h-full w-[300px] z-50 font-poppins text-[60px] font-extrabold text-[#2d2d2d] leading-9 group-hover/branding:-translate-y-3 ease-in-out duration-300 group-active/branding:scale-95`}
        >
          <span className="block">br</span>
          <span className="block">an</span>
          <span
            style={{
              color: isChecked && "#A67458",
            }}
            className={`block text-[#A67458] group-hover/branding:text-[#D9D9D9] group-checked/branding:text-[#A67458]    transition-colors delay-[100ms]`}
          >
            di
          </span>
          <span className="block">ng</span>
        </div>
        <div className={`relative mt-7 w-full grid grid-cols-2 gap-2 px-2`}>
          {images.map((image, index) => (
            <div
              key={image.alt}
              className=" border-black min-w-40 h-40 rounded-2xl overflow-hidden"
            >
              <motion.img
                src={image.src}
                alt={image.alt}
                className={`${image.className} w-full h-full object-cover object-top`}
                initial="hidden"
                animate={isChecked ? "visible" : "hidden"}
                variants={imageVariants}
                custom={image.customDelay}
              />
            </div>
          ))}
        </div>
      </motion.label>
      {/* CARD CLOSE BUTTON */}
      {isChecked &&
        !isSelected.webDesign &&
        !isSelected.brandingGuideline &&
        !isSelected.socialContent &&
        !isSelected.logoDesign &&
        !isSelected.productMockups && (
          <motion.button
            onClick={handleCloseClick}
            className="absolute top-3 rounded-full right-3 z-50 flex items-center justify-center"
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
                className="size-[36px]"
              />
            </motion.div>
          </motion.button>
        )}
    </>
  );
};

export default Branding;
