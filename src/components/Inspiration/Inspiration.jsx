const Inspiration = () => {
  return (
    <div className="h-[597px] bg-[#A67458] mt-[120px] flex justify-between items-start">
      <div className="w-[399px] h-[333px] mt-[131px] ml-[103px] font-poppins font-medium text-[14px] text-[#2D2D2D]">
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
          <b>legible and visually aesthetic.</b>
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
          insp<span className="text-[#D9D9D9]">i</span>ration
        </h2>
      </div>
    </div>
  );
};

export default Inspiration;
