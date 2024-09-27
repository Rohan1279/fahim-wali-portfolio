const Inspiration = () => {
  return (
    <div className="h-[597px] w-full bg-[#A67458] mt-[240px] flex justify-center items-start pl-[103px] pr-[58px]">
      <div className="w-[399px] h-[333px] text-balance mt-[131px] font-poppins font-medium text-[14px] text-[#2D2D2D]">
        <p>
          Saul Bass&apos;s ability to distill complex ideas into simple,
          powerful visuals serves as a guiding principle for my designs. In
          finding beauty and meaning in everyday objects and concepts, my
          designs feature bold, geometric shapes, and striking color palettes
          that convey emotion. I embrace minimalism not as a constraint, but as
          a tool to create maximum impact with carefully chosen elements.
        </p>
        <p className="mt-6">
          I seek inspiration from diverse fields like mathematics, architecture,
          and film to inform my design process. This cross-pollination of ideas
          allows me to bring fresh perspectives to each project. For visual
          element, I experiment with dramatic typography that are both{" "}
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
            <svg
              width="176"
              height="272"
              viewBox="0 0 176 272"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="absolute -bottom-1 left-5 -translate-x-full translate-y-full"
            >
              <circle cx="11.5" cy="260.5" r="11.5" fill="#2F67AA" />
              <line
                x1="21.9983"
                y1="261"
                x2="176.002"
                y2="261"
                stroke="#D9D9D9"
              />
              <line x1="175.5" y1="261" x2="175.5" stroke="#D9D9D9" />
            </svg>
          </span>
          ration
        </h2>
      </div>
    </div>
  );
};

export default Inspiration;
