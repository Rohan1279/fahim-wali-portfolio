import React, { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
import { motion } from "framer-motion";

const Branding = ({ delay, index }) => {
  const [isChecked, setIsChecked] = useState(false);

  console.log("isChecked", isChecked);
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

  const imageVariants = {
    hidden: { x: -100, opacity: 0 },
    visible: (custom) => ({
      x: 0,
      opacity: 1,
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
        <div className={` relative w-[794px] h-[540px] mt-[32px] ml-[35px]`}>
          {images.map((image, index) => (
            <motion.img
              key={image.alt}
              src={image.src}
              alt={image.alt}
              className={image.className}
              initial="hidden"
              animate={isChecked ? "visible" : "hidden"}
              variants={imageVariants}
              custom={image.customDelay}
            />
          ))}
        </div>
        <div
          style={{
            transform: isChecked && "translateY(0px)",
          }}
          className={`absolute top-0 right-0 pt-[100px] pr-[74px] text-right  ${
            isChecked ? "bg-[#d9d9d9]" : "bg-transparent"
          } h-full w-[300px] z-50 font-poppins text-[128px] font-extrabold text-[#2d2d2d] leading-[5.2rem] group-hover/branding:-translate-y-3 ease-in-out duration-300 group-active/branding:scale-95`}
        >
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
      </ShowcaseCard>
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
      {isChecked && (
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
