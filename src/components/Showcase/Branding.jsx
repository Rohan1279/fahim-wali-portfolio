import React from "react";
import ShowcaseCard from "./ShowcaseCard";

const Branding = () => {
  return (
    <ShowcaseCard
      htmlFor={"branding"}
      id={"branding"}
      className={`translate-y-[38px] transition-all ease-in-out duration-300 relative overflow-hidden group/branding pl-[35px] `}
    >
      <img
        src="/images/branding-image.png"
        alt="branding-image"
        className="w-[794px] mt-[32px] object-cover  opacity-0 group-has-[:checked]:opacity-100 transition-all duration-500 ease-in-out"
      />
      <div className="absolute top-[100px] right-[80px] transition-all delay-[600ms] z-50  font-poppins text-[128px] font-extrabold text-[#2d2d2d] leading-[5.2rem]">
        <span className="block">br</span>
        <span className="block">an</span>
        <span className="block text-[#A67458] -mt-1">di</span>
        <span className="block">ng</span>
      </div>
    </ShowcaseCard>
  );
};

export default Branding;
