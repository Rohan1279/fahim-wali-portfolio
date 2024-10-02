import { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const MobileApp = () => {
  const H2 = ({ style }) => (
    <h2
      className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 -mt-[3px]"
      style={{
        WebkitTextStroke: "1px rgb(217, 217, 217)",
      }}
    >
      Mobile
    </h2>
  );

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
      htmlFor={"mobile-app"}
      id={"mobile-app"}
      className={`translate-y-[116px] transition-all ease-in-out duration-300 has-[:checked]:py-[57px]`}
    >
      <>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 -mt-2"
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D10",
          }}
        >
          Mobile
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 "
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D25",
          }}
        >
          Mobile
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 "
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D50",
          }}
        >
          Mobile
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 "
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D75",
          }}
        >
          Mobile
        </h2>
        {/* //! CENTER */}
        <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[90%] peer-checked:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 -mt-[3px]">
          Mobile
        </h2>
        <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[3.8rem] peer-checked:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2">
          App
        </h2>
        {/* //! CENTER */}
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 -mt-[3px]"
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D75",
          }}
        >
          App
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 -mt-[3px]"
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D50",
          }}
        >
          App
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 -mt-[3px]"
          style={{
            WebkitTextStroke: isChecked ? "1px #2D2D2D10" : "1px #2D2D2D25",
          }}
        >
          App
        </h2>
      </>

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

export default MobileApp;
