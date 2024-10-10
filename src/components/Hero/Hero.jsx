import { motion } from "framer-motion";
const Hero = () => {
  return (
    <div className="pt-[9px]">
      {/* FAHIM WALI LOGO */}
      <img
        src="/images/fahimwali_logo.png"
        alt="Hero"
        className="w-[202px] h-[116px] object-cover mx-auto"
      />
      <div className="flex space-x-[142px] justify-center items-center pl-[61px] pr-[92px]">
        {/* HERO LEFT */}
        <div className=" translate-y-[40px]">
          <img
            src="/images/banner-left.svg"
            alt="Banner"
            className="w-[598px] h-[432px] object-cover"
          />
        </div>
        {/* HERO RIGHT */}
        <div className="flex relative  translate-y-[67px]">
          {/* PORTFOLIO TEXT */}
          <div className="leading-[11.3rem] translate-x-[53px] z-20">
            <h1 className="font-oswald font-bold text-[200px] text-[#A67458] tracking-tight">
              PO
            </h1>
            <h1 className="font-oswald font-bold text-[200px] text-[#A67458] tracking-wide">
              RT
            </h1>
            <h1 className="font-oswald font-light text-[90px] text-[#d9d9d9] leading-[5rem] translate-x-[6px]">
              FOLIO
            </h1>
          </div>
          {/* NAME TAG */}
          {/* <div className="relative z-10 -translate-y-5 min-w-[364px] min-h-[419px]">
            <img
              src="/images/rectangle.png"
              alt="rectangle"
              className="min-w-[304px] min-h-[372px]"
            />
            <img
              src="/images/fahim.png"
              alt="fahim"
              className="absolute inset-y-9 inset-x-12 w-[250px] h-[259px] rotate-[5.46deg]"
            />
            <img
              src="/images/product-designer-sketch.svg"
              alt="product-designer-sketch"
              className="object-cover absolute inset-x-16 inset-y-[310px] rotate-[3.08deg]"
            />
          </div> */}
          <motion.div
            className="relative z-10 -translate-y-5 min-w-[364px] min-h-[419px]"
            initial={{
              x: "-70%",
              rotate: -15,
              opacity: 0,
              filter: "blur(10px)",
            }}
            animate={{ x: 0, rotate: 0, opacity: 1, filter: "blur(0px)" }}
            transition={{
              type: "spring",
              damping: 12,
              stiffness: 100,
              duration: 0.8,
            }}
            // whileHover={{
            //   filter: "hue-rotate(30deg)",
            //   transition: { duration: 0.3 },
            // }}
          >
            <motion.img
              src="/images/rectangle.png"
              alt="rectangle"
              className="min-w-[304px] min-h-[372px]"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1, transform: "translateY(-20px)" }}
              transition={{ delay: 0.2, duration: 0.4 }}
            />
            <motion.img
              src="/images/fahim.png"
              alt="fahim"
              className="absolute inset-y-9 inset-x-12 w-[250px] h-[259px]"
              initial={{ rotate: -10, y: 20, opacity: 0 }}
              animate={{ rotate: 5.46, y: 0, opacity: 1 }}
              transition={{
                delay: 0.4,
                type: "spring",
                damping: 10,
                stiffness: 80,
              }}
            />
            <motion.img
              src="/images/product-designer-sketch.svg"
              alt="product-designer-sketch"
              className="object-cover absolute inset-x-16 inset-y-[310px] rotate-[3.08deg]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
