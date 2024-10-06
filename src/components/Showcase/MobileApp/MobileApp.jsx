import { useCallback, useState } from "react";
import ShowcaseCard from "../ShowcaseCard";
import Pedal from "./Pedal";
import Simvest from "./Simvest";
import { motion } from "framer-motion";
const MobileApp = () => {
  const [currentApp, setCurrentApp] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  console.log("currentApp", currentApp);
  console.log("currentIndex", currentIndex);

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
    }),
    animate: (custom) => ({
      opacity: 1,
      y: custom * -4, // Upward movement for Mobile texts
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  const appTextVariants = {
    initial: (custom) => ({
      opacity: 0,
      y: 0,
    }),
    animate: (custom) => ({
      opacity: 1,
      y: custom * 4, // Downward movement for App texts
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <ShowcaseCard
      isChecked={isChecked}
      handleOnClick={handleOnClick}
      htmlFor={"mobile-app"}
      id={"mobile-app"}
      className={`translate-y-[116px] overflow-hidden group`}
    >
      {currentIndex === 0 ? (
        <motion.div
          className="bg-[#d9d9d9] w-fit h-full group-has-[:checked]:py-[57px] group-has-[:checked]:pl-[43px] transition-all ease-in-out duration-300 z-50"
          variants={containerVariants}
          initial="initial"
          animate="animate"
        >
          {/* Mobile text layers - moving upward */}
          <motion.h2
            custom={4}
            variants={mobileTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] ml-2 peer-[:checked]:ml-[42px] -mt-2"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D10",
            }}
          >
            Mobile
          </motion.h2>
          <motion.h2
            custom={3}
            variants={mobileTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] ml-2 peer-[:checked]:ml-[42px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D25",
            }}
          >
            Mobile
          </motion.h2>
          <motion.h2
            custom={2}
            variants={mobileTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] ml-2 peer-[:checked]:ml-[42px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D50",
            }}
          >
            Mobile
          </motion.h2>
          <motion.h2
            custom={1}
            variants={mobileTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] ml-2 peer-[:checked]:ml-[42px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D75",
            }}
          >
            Mobile
          </motion.h2>

          {/* Center Mobile and App */}
          <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[90%] group-has-[:checked]:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px] -mt-[3px]">
            Mobile
          </h2>
          <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[3.8rem] group-has-[:checked]:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]">
            App
          </h2>

          {/* App text layers - moving downward */}
          <motion.h2
            custom={1}
            variants={appTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D75",
            }}
          >
            App
          </motion.h2>
          <motion.h2
            custom={2}
            variants={appTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D50",
            }}
          >
            App
          </motion.h2>
          <motion.h2
            custom={3}
            variants={appTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D25",
            }}
          >
            App
          </motion.h2>
          <motion.h2
            custom={4}
            variants={appTextVariants}
            className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] ml-2 peer-[:checked]:ml-[42px] -mt-[3px]"
            style={{
              WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D10",
            }}
          >
            App
          </motion.h2>
        </motion.div>
      ) : (
        <div className="font-poppins pl-[43px] pt-[68px] z-50">
          <p className={`text-xl text-[#2D2D2D] font-medium tracking-widest`}>
            product category
          </p>
          <h2 className=" text-[64px] font-extrabold text-[#2D2D2D]/10  leading-none mt-3">
            Mobile
          </h2>
          <h2 className=" text-[64px] font-extrabold text-[#2D2D2D]/10  leading-none">
            App
          </h2>
          <p
            className={`text-xl text-[#2D2D2D] font-medium tracking-widest mt-[69px]`}
          >
            product name
          </p>
          {currentApp === "pedal" ? (
            <img
              src="/images/mobile-app/pedal/pedal-logo.png"
              alt="pedal-logo"
              className="w-[122px] -translate-x-10 -translate-y-3"
            />
          ) : (
            <img
              src="/images/mobile-app/simvest/simvest-logo.png"
              alt="simvest-logo"
              className="w-[193px] mt-[11px] mb-[37px]"
            />
          )}
          <p className={`text-xl text-[#2D2D2D] font-medium tracking-widest`}>
            role
          </p>
          <p className="text-[32px] font-extralight leading-none">ux/ui</p>
          <p className="text-[32px] font-extralight leading-none">designer</p>
        </div>
      )}

      <div
        className={`w-[748px] h-full absolute right-[56px] top-0 invisible blur-sm peer-checked:blur-none peer-checked:visible transition-all duration-500  border-red-400 -z-50 `}
      >
        {!currentApp && (
          <div className="relative flex justify-center gap-x-[40px] pt-[89px] mr-1">
            <div onClick={() => setCurrentApp("pedal")} className={`relative`}>
              <h2
                style={{
                  rotate: "-90deg",
                  WebkitTextStroke: currentApp !== "pedal" && "1px #585858",
                }}
                className={`font-oswald ${
                  currentApp === "pedal" ? "text-[#2D2D2D]" : "text-[#d9d9d9]"
                } transition-all text-[110px] font-bold absolute -left-[10.6rem] top-[166px] -z-10`}
              >
                pedal
              </h2>
              <img
                src="/images/mobile-app/pedal/pedal.png"
                alt="pedal"
                className={`w-[245px] z-50 transition-all duration-300`}
              />
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
                  currentApp === "simvest" ? "text-[#2D2D2D]" : "text-[#d9d9d9]"
                } transition-all text-[110px] font-bold absolute -right-[13.05rem] top-[166px] -z-10`}
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
        )}
        {currentApp === "pedal" && (
          <Pedal
            currentApp={currentApp}
            setCurrentApp={setCurrentApp}
            currentIndex={currentIndex}
            setCurrentIndex={setCurrentIndex}
          />
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

export default MobileApp;
