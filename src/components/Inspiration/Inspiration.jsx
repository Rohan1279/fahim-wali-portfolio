"use client";

import React, { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";

export default function Inspiration() {
  const containerRef = useRef(null);
  const svgRef = useRef(null);
  const isInView = useInView(containerRef, { once: false, amount: 0.3 });
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end center"],
  });
  const pathLength1 = useTransform(scrollYProgress, [0, 0.6], [0, 1]);
  const pathLength2 = useTransform(scrollYProgress, [0.6, 0.8], [0, 1]);
  const circleScale = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <>
      <div
        ref={containerRef}
        className=" hidden md:flex justify-center items-start h-[597px] w-full bg-[#A67458] mt-[257px]  pl-[103px] pr-[58px]"
      >
        <div className="w-[399px] h-[333px] text-balance mt-[131px] font-poppins font-medium text-[14px] text-[#2D2D2D]">
          <p>
            Saul Bass&apos;s ability to distill complex ideas into simple,
            powerful visuals serves as a guiding principle for my designs. In
            finding beauty and meaning in everyday objects and concepts, my
            designs feature bold, geometric shapes, and striking color palettes
            that convey emotion. I embrace minimalism not as a constraint, but
            as a tool to create maximum impact with carefully chosen elements.
          </p>
          <p className="mt-6">
            I seek inspiration from diverse fields like mathematics,
            architecture, and film to inform my design process. This
            cross-pollination of ideas allows me to bring fresh perspectives to
            each project. For visual element, I experiment with dramatic
            typography that are both{" "}
            <b className="text-[16px]">legible and visually aesthetic.</b>
          </p>
        </div>
        <img
          src="/images/saul-bass.svg"
          alt="saul-bass"
          className="w-[322px] h-[553px] ml-[57px]"
        />
        <div className="font-oswald text-[128px] font-semibold text-[#161414] leading-[105px] tracking-[-0.12em] -translate-x-[3.8rem] -mt-2">
          <h2 className="uppercase">design</h2>
          <h2 className="uppercase translate-x-[3.6rem] mr-[65px]">
            insp
            <span className="text-[#D9D9D9] relative inline-block">
              i
              <motion.svg
                ref={svgRef}
                width="176"
                height="272"
                viewBox="0 0 176 272"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute -bottom-1 left-5 -translate-x-full translate-y-full"
              >
                <motion.line
                  x1="175.5"
                  y1="0"
                  x2="175.5"
                  y2="261"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  style={{ pathLength: isInView ? pathLength1 : 0 }}
                  transition={{ delay: 0.2, duration: 1 }}
                />
                <motion.line
                  x1="176.002"
                  y1="261"
                  x2="21.9983"
                  y2="261"
                  stroke="#D9D9D9"
                  strokeWidth="1"
                  style={{ pathLength: isInView ? pathLength2 : 0 }}
                  transition={{ delay: 0.4, duration: 1 }}
                />
                <motion.circle
                  cx="11.5"
                  cy="260.5"
                  r="11.5"
                  fill="#2F67AA"
                  style={{ scale: isInView ? circleScale : 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                />
              </motion.svg>
            </span>
            ration
          </h2>
        </div>
      </div>

      <div className="relative visible md:hidden flex flex-col w-full bg-[#A67458] pb-7 rounded-b-[20px]">
        <img
          src="/images/saul-bass.svg"
          alt="saul-bass"
          className="w-[322px] h-[553px] ml-[6px]"
        />
        <div className="font-oswald text-[70px] font-semibold text-[#D9D9D9] leading-[3.8rem] tracking-[-0.11em] absolute -top-[5px] left-6">
          <h2 className="uppercase">design</h2>
          <h2 className="uppercase translate-x-[2.07rem] ">
            insp
            <span className="text-[#2F67AA] relative inline-block">i</span>
            ration
          </h2>
        </div>

        <div className="mt-10 text-balance font-poppins font-medium text-[12px] text-[#2D2D2D] pl-[36px] pr-[16px]">
          <p>
            Saul Bass&apos;s ability to distill complex ideas into simple,
            powerful visuals serves as a guiding principle for my designs. In
            finding beauty and meaning in everyday objects and concepts, my
            designs feature bold, geometric shapes, and striking color palettes
            that convey emotion. I embrace minimalism not as a constraint, but
            as a tool to create maximum impact with carefully chosen elements.
          </p>
          <p className="mt-6">
            I seek inspiration from diverse fields like mathematics,
            architecture, and film to inform my design process. This
            cross-pollination of ideas allows me to bring fresh perspectives to
            each project. For visual element, I experiment with dramatic
            typography that are both <b>legible and visually aesthetic.</b>
          </p>
        </div>
      </div>
    </>
  );
}
