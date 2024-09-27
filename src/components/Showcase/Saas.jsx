import ShowcaseCard from "./ShowcaseCard";

const Saas = () => {
  const htmlFor = "saas";
  return (
    <ShowcaseCard htmlFor={htmlFor} id={"saas"} className={``}>
      <p
        className={`opacity-0 peer-checked:opacity-100 transition-all duration-300 ease-in-out delay-150 font-poppins text-xl text-[#161414] tracking-widest mt-[126px] ml-[57px] `}
      >
        product category
      </p>
      <h2 className="font-poppins text-[80px] font-extrabold text-[#2d2d2d] leading-[90%] peer-checked:text-[#2d2d2d]/10 select-none transition-all duration-300 ease-in-out delay-150 ml-[54px]">
        SaaS
      </h2>
    </ShowcaseCard>
  );
};

export default Saas;

// position: absolute;
// width: 232px;
// height: 97px;
// left: calc(50% - 232px/2 - 408px);
// top: calc(50% - 97px/2 - 386px);

// font-family: 'Poppins';
// font-style: normal;
// font-weight: 800;
// font-size: 80px;
// line-height: 80%;
// /* or 64px */
// display: flex;
// align-items: center;
// text-align: right;

// color: #2D2D2D;

// opacity: 0.1;
