import React, { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
import { motion } from "framer-motion";

const Branding = () => {
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
      className: "w-[467px] absolute left-[62px] top-10 z-50",
      customDelay: 0,
    },
    {
      src: "/images/branding/hero.png",
      alt: "hero",
      className: "w-[593px] absolute bottom-[0]",
      customDelay: 1,
    },
    {
      src: "/images/branding/cup.png",
      alt: "cup",
      className: "w-[187px] absolute right-[48px] z-50",
      customDelay: 2,
    },
    {
      src: "/images/branding/water-bottle.png",
      alt: "water-bottle",
      className: "w-[282px] absolute right-0 top-[141px] z-40",
      customDelay: 3,
    },
    {
      src: "/images/branding/water-bottle-2.png",
      alt: "water-bottle-2",
      className: "w-[176px] absolute right-[53px] bottom-5 z-50",
      customDelay: 4,
    },
  ];

  return (
    <ShowcaseCard
      isChecked={isChecked}
      handleOnClick={handleOnClick}
      htmlFor="branding"
      id="branding"
      className="translate-y-[38px] transition-all ease-in-out duration-300 relative overflow-hidden group/branding"
    >
      <div className="relative w-[794px] h-[540px] mt-[32px] ml-[35px]">
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
      <div className="absolute top-0 right-0 pt-[100px] pr-[74px] text-right bg-[#d9d9d9] h-full w-[300px] transition-all delay-[600ms] z-50 font-poppins text-[128px] font-extrabold text-[#2d2d2d] leading-[5.2rem]">
        <span className="block">br</span>
        <span className="block">an</span>
        <span className="block text-[#A67458] -mt-1">di</span>
        <span className="block">ng</span>
      </div>
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
  );
};

export default Branding;
