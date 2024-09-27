import { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const Saas = () => {
  const htmlFor = "saas";
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
      htmlFor={htmlFor}
      id={"saas"}
      isChecked={isChecked}
      handleOnClick={handleOnClick}
      className={``}
    >
      <p
        className={`opacity-0 peer-checked:opacity-100 transition-all duration-300 ease-in-out delay-150 font-poppins text-xl text-[#161414] tracking-widest mt-[126px] ml-[57px] `}
      >
        product category
      </p>
      <h2 className="font-poppins text-[80px] font-extrabold text-[#2d2d2d] leading-[90%] peer-checked:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-[54px]">
        SaaS
      </h2>
      {isChecked && (
        <button
          onClick={handleCloseClick}
          className="absolute top-2 right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center"
        >
          ×
        </button>
      )}
    </ShowcaseCard>
  );
};

export default Saas;
