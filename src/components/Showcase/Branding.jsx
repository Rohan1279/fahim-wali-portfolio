import React, { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const Branding = () => {
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
  }, []);
  return (
    <ShowcaseCard
      isChecked={isChecked}
      handleOnClick={handleOnClick}
      htmlFor={"branding"}
      id={"branding"}
      className={`translate-y-[38px] transition-all ease-in-out duration-300 relative overflow-hidden group/branding `}
    >
      <img
        src="/images/branding-image.png"
        alt="branding-image"
        className="w-[794px] mt-[32px] ml-[35px]  object-cover opacity-0 group-has-[:checked]:opacity-100 transition-all duration-500 ease-in-out "
      />
      <div className="absolute top-[100px] right-[80px] transition-all delay-[600ms] z-50  font-poppins text-[128px] font-extrabold text-[#2d2d2d] leading-[5.2rem]">
        <span className="block">br</span>
        <span className="block">an</span>
        <span className="block text-[#A67458] -mt-1">di</span>
        <span className="block">ng</span>
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

export default Branding;
