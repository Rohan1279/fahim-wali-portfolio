import { useCallback, useRef, useState } from "react";
import ShowcaseCard from "../ShowcaseCard";
import Pedal from "./Pedal";
import Simvest from "./Simvest";
import { motion, transform } from "framer-motion";
import PDFModal from "../../PDFModal/PDFModal";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  EffectCards,
  EffectCube,
  EffectCreative,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/effect-cube";
import "swiper/css/effect-creative";
import "swiper/css/pagination";

const containerVariants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const mobileTextVariants = {
  initial: (custom) => ({
    opacity: 0,
    y: 0,
    // color: "#2D2D2D",
    // scale: 1.05,
    // filter: "blur(10px)",
    // transform: "rotate3D(1, 0, 0, 90deg)",
  }),
  animate: (custom) => ({
    opacity: 1,
    y: custom * -4, // Upward movement for Mobile texts
    // color: "#D9D9D9",
    // scale: 1,
    // filter: "blur(0px)",
    // transform: "rotate3D(1, 0, 0, 0deg)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};

const appTextVariants = {
  initial: (custom) => ({
    opacity: 0,
    y: 0,
    // color: "#2D2D2D",
    // scale: 1.05,
    // filter: "blur(10px)",
    // transform: "rotate3D(1, 0, 0, 90deg)",
  }),
  animate: (custom) => ({
    opacity: 1,
    y: custom * 4, // Downward movement for App texts
    // color: "#D9D9D9",
    // scale: 1,
    // filter: "blur(0px)",
    // transform: "rotate3D(1, 0, 0, 0deg)",
    transition: {
      duration: 0.8,
      ease: [0.16, 1, 0.3, 1],
    },
  }),
};
const MobileApp = ({ delay, index }) => {
  const [currentApp, setCurrentApp] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  console.log("currentIndex", currentIndex);
  const [shown, setShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const handleOnClick = useCallback(
    (e) => {
      if (!isChecked) {
        setIsChecked(true);
      } else {
        // Prevent the click from propagating to the label when checked
        e.preventDefault();
      }
    },
    [isChecked]
  );

  const handleCloseClick = useCallback((e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsChecked(false);
    setCurrentApp(null);
  }, []);
  const CloseButton = () => {
    return (
      <motion.button
        onClick={handleCloseClick}
        className="absolute top-3 right-3 rounded-full z-50 flex items-center justify-center"
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
    );
  };
  const PdfButton = () => {
    return (
      <>
        {" "}
        <>
          <motion.button
            // href={
            //   "https://drive.google.com/file/d/1zMbyK-hjfJQUNqn00KPDV_Ss06V7gQtb/view?usp=sharing"
            // }
            // target="_blank"
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
            onClick={() => setShown(true)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
              }}
              className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="uppercase"
              >
                view ux/ui case study{" "}
              </motion.span>
            </motion.button>
          </motion.button>

          <PDFModal pdfUrl={"/pedal.pdf"} shown={shown} setShown={setShown} />
        </>
      </>
    );
  };
  const apps = [
    { name: "pedal", image: "/images/mobile-app/pedal/pedal.png" },
    { name: "simvest", image: "/images/mobile-app/simvest/simvest.png" },
  ];
  const swiperRef = useRef(null);

  return (
    <>
      <ShowcaseCard
        delay={delay}
        index={index}
        isChecked={isChecked}
        handleOnClick={handleOnClick}
        htmlFor={"mobile-app"}
        id={"mobile-app"}
        className={`hidden md:block mt-[66px] md:mt-[116px] overflow-hidden group/mobileApp`}
      >
        {currentIndex === 0 || !currentApp ? (
          <motion.div
            style={{
              transform: isChecked && "translateY(0px)",
            }}
            className={`${
              isChecked ? "bg-[#d9d9d9]" : "bg-transparent"
            }  w-fit h-full group-has-[:checked]:py-[57px] group-has-[:checked]:pl-[43px] transition-all ease-in-out duration-300 z-50 group-hover/mobileApp:-translate-y-3 group-active/mobileApp:scale-95`}
            variants={containerVariants}
            initial="initial"
            animate="animate"
          >
            {/* Mobile text layers - moving upward */}
            <motion.h2
              custom={4}
              variants={mobileTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[90%] ml-2 peer-[:checked]:ml-[42px] -mt-2"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D10",
              }}
            >
              Mobile
            </motion.h2>
            <motion.h2
              custom={3}
              variants={mobileTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[90%] ml-2 peer-[:checked]:ml-[42px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D25",
              }}
            >
              Mobile
            </motion.h2>
            <motion.h2
              custom={2}
              variants={mobileTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[90%] ml-2 peer-[:checked]:ml-[42px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D50",
              }}
            >
              Mobile
            </motion.h2>
            <motion.h2
              custom={1}
              variants={mobileTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[90%] ml-2 peer-[:checked]:ml-[42px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D75",
              }}
            >
              Mobile
            </motion.h2>

            {/* Center Mobile and App */}
            <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[90%] group-has-[:checked]:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px] -mt-[3px] z-[999]">
              Mobile
            </h2>
            <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[3.8rem] group-has-[:checked]:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]">
              App
            </h2>

            {/* App text layers - moving downward */}
            <motion.h2
              custom={1}
              variants={appTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D75",
              }}
            >
              App
            </motion.h2>
            <motion.h2
              custom={2}
              variants={appTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D50",
              }}
            >
              App
            </motion.h2>
            <motion.h2
              custom={3}
              variants={appTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D25",
              }}
            >
              App
            </motion.h2>
            <motion.h2
              custom={4}
              variants={appTextVariants}
              className="font-poppins text-[64px] font-extrabold text-transparent leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
              style={{
                WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D10",
              }}
            >
              App
            </motion.h2>
          </motion.div>
        ) : (
          <div className=" font-poppins pl-[43px] pt-[68px] z-[100] w-fit h-full bg-[#d9d9d9]">
            <motion.p
              className="text-xl text-[#2D2D2D] font-medium tracking-widest"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.05, duration: 0.4, ease: "easeOut" }}
            >
              product category
            </motion.p>
            <motion.h2
              className="text-[64px] font-extrabold text-[#2D2D2D]/10 leading-none mt-3"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.4, ease: "easeOut" }}
            >
              Mobile
            </motion.h2>
            <motion.h2
              className="text-[64px] font-extrabold text-[#2D2D2D]/10 leading-none"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
            >
              App
            </motion.h2>
            <motion.p
              className="text-xl text-[#2D2D2D] font-medium tracking-widest mt-[69px]"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.4, ease: "easeOut" }}
            >
              product name
            </motion.p>
            {currentApp === "pedal" ? (
              <motion.img
                src="/images/mobile-app/pedal/pedal-logo.png"
                alt="pedal-logo"
                className="w-[122px] -ml-10 -translate-y-3"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
              />
            ) : (
              <motion.img
                src="/images/mobile-app/simvest/simvest-logo.png"
                alt="simvest-logo"
                className="w-[193px] mt-[11px] mb-[37px]"
                initial={{ y: 10, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 0.4, ease: "easeOut" }}
              />
            )}
            <motion.p
              className="text-xl text-[#2D2D2D] font-medium tracking-widest"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.4, ease: "easeOut" }}
            >
              role
            </motion.p>
            <motion.p
              className="text-[32px] font-extralight leading-none"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.35, duration: 0.4, ease: "easeOut" }}
            >
              ux/ui
            </motion.p>
            <motion.p
              className="text-[32px] font-extralight leading-none"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.4, ease: "easeOut" }}
            >
              designer
            </motion.p>
          </div>
        )}

        <div
          className={`w-[748px] h-full absolute right-[56px] top-0 invisible blur-sm peer-checked:blur-none peer-checked:visible border-red-400 -z-50 `}
        >
          {!currentApp && isChecked && (
            <div className="relative flex justify-center gap-x-[40px] pt-[89px] mr-1">
              <div
                onClick={() => setCurrentApp("pedal")}
                className={`relative cursor-pointer group/pedal`}
              >
                <h2
                  style={{
                    rotate: "-90deg",
                    WebkitTextStroke: currentApp !== "pedal" && "1px #585858",
                  }}
                  className={`font-oswald ${
                    currentApp === "pedal" ? "text-[#2D2D2D]" : "text-[#d9d9d9]"
                  } group-hover/pedal:text-[#2D2D2D] transition-all text-[110px] font-bold absolute -left-[10.6rem] top-[166px] -z-10`}
                >
                  pedal
                </h2>
                <img
                  src="/images/mobile-app/pedal/pedal.png"
                  alt="pedal"
                  className={`w-[245px] z-50 transition-all duration-300`}
                />
              </div>

              <motion.div
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.5, ease: "easeOut" }}
                onClick={() => setCurrentApp("simvest")}
                className={`relative cursor-pointer group/simvest z-0`}
              >
                <h2
                  style={{
                    rotate: "90deg",
                    WebkitTextStroke: currentApp !== "simvest" && "1px #585858",
                  }}
                  className={`font-oswald ${
                    currentApp === "simvest"
                      ? "text-[#2D2D2D]"
                      : "text-[#d9d9d9]"
                  } group-hover/simvest:text-[#2D2D2D] text-[#d9d9d9] transition-all text-[110px] font-bold absolute  -right-[13.05rem] top-[166px] -z-10`}
                >
                  simvest
                </h2>
                <img
                  src="/images/mobile-app/simvest/simvest.png"
                  alt="simvest"
                  className={`w-[245px] transition-all duration-300 z-50`}
                />
                {/* ${currentApp === "simvest" ? "ml-[110px]" : "ml-[95px]"} */}
              </motion.div>
            </div>
          )}
          {currentApp === "pedal" && (
            <>
              <Pedal
                currentApp={currentApp}
                setCurrentApp={setCurrentApp}
                currentIndex={currentIndex}
                setCurrentIndex={setCurrentIndex}
              />
              Pedal
            </>
          )}
          {currentApp === "simvest" && (
            <Simvest
              currentApp={currentApp}
              setCurrentApp={setCurrentApp}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          )}
        </div>

        {isChecked && (
          // <button
          //   onClick={handleCloseClick}
          //   className="absolute top-[18px] right-4 z-50"
          // >
          //   <img
          //     src="/images/close-button.svg"
          //     alt="close-button"
          //     className="size-[46px]"
          //   />
          // </button>
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
      <motion.label
        htmlFor={"mobile-app"}
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
        className="block md:hidden w-full h-[507px] rounded-[10px] bg-[#d9d9d9] cursor-pointer relative group overflow-hidden translate-y-[66px]"
      >
        <input
          type="checkbox"
          id="mobile-app"
          checked={isChecked}
          className="invisible"
          onChange={() => {}} // Controlled component
        />
        {/* CARD TITLE */}
        <div
          className={`absolute top-24 -left-9 font-poppins font-extrabold -rotate-90  transition-all group-hover/mobile-app:-translate-y-3 ease-in-out duration-300 group-active/mobile-app:scale-95 group-has-[:checked]:opacity-0 leading-8`}
        >
          <p
            style={{
              WebkitTextStroke: "1px #2D2D2D",
            }}
            className="text-[48px] text-transparent"
          >
            Mobile
          </p>
          <p className="text-[#a67458] text-[32px]">App</p>
        </div>
        {/* CARD BODY */}
        {!currentApp && isChecked && (
          <div className="relative pt-12 h-full">
            <Swiper
              // effect={"cube"}
              effect={"creative"}
              grabCursor={true}
              pagination={{
                dynamicBullets: true,
                bulletClass: "swiper-pagination-bullet",
              }}
              modules={[EffectCreative, EffectCube, Pagination]}
              cubeEffect={{
                shadow: false,
                // slideShadows: true,
                // shadowOffset: 20,
                // shadowScale: 0.94,
              }}
              creativeEffect={{
                prev: {
                  // shadow: true,
                  translate: [-30, 0, -200],
                },
                next: {
                  translate: ["100%", 0, 0],
                },
              }}
              className="w-full pb-7 border-black mt-auto "
              onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
              onSwiper={(swiper) => (swiperRef.current = swiper)}
            >
              <SwiperSlide>
                <div
                  className={`relative cursor-pointer w-fit mx-auto ${
                    currentIndex === 1
                      ? "saturate-[.25] blur-[2px]"
                      : "blur-none"
                  } transition-all duration-300 `}
                  onClick={() => setCurrentApp("pedal")}
                >
                  <h2
                    style={{
                      rotate: "-90deg",
                      WebkitTextStroke: "1px #585858",
                    }}
                    className={`font-oswald ${
                      currentIndex === 1
                        ? "text-[#585858] "
                        : "text-transparent"
                    } transition-all text-7xl font-bold absolute -left-[7.0rem] top-[166px] -z-10`}
                  >
                    pedal
                  </h2>
                  <img
                    src="/images/mobile-app/pedal/pedal.png"
                    alt="pedal"
                    className="w-[200px] z-50 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div
                  className={`relative cursor-pointer w-fit mx-auto ${
                    currentIndex === 0
                      ? "saturate-[.25] blur-[2px]"
                      : "blur-none"
                  } transition-all duration-300 delay-150`}
                  onClick={() => setCurrentApp("simvest")}
                >
                  <h2
                    style={{
                      rotate: "90deg",
                      WebkitTextStroke:
                        currentApp !== "simvest" && "1px #585858",
                    }}
                    className={`font-oswald ${
                      currentIndex === 0 ? "text-[#585858]" : "text-transparent"
                    } group-hover/simvest:text-[#2D2D2D] transition-all  delay-300 text-7xl font-bold absolute -right-[8.7rem] top-[166px] -z-10`}
                  >
                    simvest
                  </h2>
                  <img
                    src="/images/mobile-app/simvest/simvest.png"
                    alt="simvest"
                    className="w-[200px] z-50 transition-all duration-300"
                  />
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        )}
        {currentApp === "pedal" && (
          <>
            <Pedal
              currentApp={currentApp}
              setCurrentApp={setCurrentApp}
              currentIndex={currentIndex}
              setCurrentIndex={setCurrentIndex}
            />
          </>
        )}
        {currentApp === "simvest" && (
          <Simvest
            currentApp={currentApp}
            setCurrentApp={setCurrentApp}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
        )}
        {/* CLOSE BUTTON */}
        {isChecked && (
          <motion.button
            onClick={handleCloseClick}
            className="absolute top-3 right-3 rounded-full z-50 flex items-center justify-center"
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
      </motion.label>
      {/* PDF BUTTON */}
      {currentApp === "pedal" && <PdfButton />}
    </>
  );
};

export default MobileApp;
