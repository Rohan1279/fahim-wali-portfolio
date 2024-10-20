import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const Philosophy = () => {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });
  const pathLength1 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);

  const circleScale = useTransform(scrollYProgress, [0.5, 1], [0, 1]);
  return (
    <>
      <div className="hidden md:flex justify-center h-fit  gap-x-[286px] pl-[103px] pr-[176px] pt-[127px] pb-[154px]">
        <div className="leading-[105px]">
          <h2 className=" uppercase font-oswald font-light text-[90px] text-[#A67458]">
            design
          </h2>
          <h2 className="uppercase tracking-[-0.12em] text-[#d9d9d9] text-[128px] font-bold font-oswald">
            ph
            <span className="text-[#2F67AA]">i</span>
            losophy
          </h2>
        </div>
        <div className="h-fit w-[389px] font-poppins text-[#A67458] font-medium mt-[3px] text-[14px] ">
          <p className="mb-6 ">
            Perhaps most importantly, I share Bass&apos;s philosophy of{" "}
            <b className="text-[16px] text-[#d9d9d9]">
              &quot;beauty for beauty&apos;s sake&quot;
            </b>{" "}
            and believe in creating designs that are inherently beautiful and
            meaningful, regardless of their commercial value. This commitment to
            artistic integrity drives me to continually push boundaries and
            evolve as a designer.
          </p>
          <p>
            In essence, my work aims to carry forward Bass&apos;s legacy of
            innovation, simplicity, and visual impact. By channeling his spirit
            of curiosity and audacity, I hope to create timeless designs that
            resonate with viewers and stand the test of time.
          </p>
        </div>
      </div>
      <div
        ref={containerRef}
        className="visible md:hidden flex flex-col justify-start items-center pb-[41px] pt-[45px]"
      >
        <div className="leading-none text-center">
          <h2 className="uppercase font-oswald font-extralight text-[#2F67AA] text-[64px] tracking-wide">
            design
          </h2>
          <h2 className="uppercase tracking-[-0.12em] text-[#d9d9d9] text-[80px] font-bold font-oswald">
            ph
            <span className="text-[#A67458] relative">
              i
              <motion.svg
                ref={svgRef}
                width="376"
                height="252"
                viewBox="0 0 176 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute bottom-[23px] -right-[103px] translate-y-full "
              >
                <motion.line
                  x1="175.5"
                  y1="0"
                  x2="175.5"
                  y2="170"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  // style={{ pathLength: isInView ? pathLength1 : 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                />

                <motion.circle
                  cx="176"
                  cy="178"
                  r="8"
                  fill="#2F67AA"
                  // style={{ scale: isInView ? circleScale : 0 }}
                  className="absolute bottom-0"
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.svg>
            </span>
            losophy
          </h2>
        </div>
        <div className="mt-[194px] font-poppins text-[#A67458] font-medium text-[12px] px-[67px]">
          <p className="mb-6 ">
            Perhaps most importantly, I share Bass&apos;s philosophy of{" "}
            <b className="text-[#d9d9d9]">
              &quot;beauty for beauty&apos;s sake&quot;
            </b>{" "}
            and believe in creating designs that are inherently beautiful and
            meaningful, regardless of their commercial value. This commitment to
            artistic integrity drives me to continually push boundaries and
            evolve as a designer.
          </p>
          <p>
            In essence, my work aims to carry forward Bass&apos;s legacy of
            innovation, simplicity, and visual impact. By channeling his spirit
            of curiosity and audacity, I hope to create timeless designs that
            resonate with viewers and stand the test of time.
          </p>
        </div>
      </div>
    </>
  );
};

export default Philosophy;
