import { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";

const UserInterface = () => {
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
      htmlFor={"user-interface"}
      id={"user-interface"}
      className={`relative overflow-hidden group/interface`}
    >
      <img
        src="/images/user-interface.png"
        alt="user-interface"
        className="opacity-0 peer-checked:opacity-100 transition-all delay-500 ease-in-out absolute right-0 top-0 w-full h-full object-cover z-40"
      />
      {/* {isChecked && ()} */}
      <button
        onClick={handleCloseClick}
        className="absolute top-5 left-1/2 z-50 opacity-0 peer-checked:opacity-100 transition-all delay-500 ease-in-out"
      >
        <img
          src="/images/close-button-white.svg"
          alt="close-button"
          className="size-[55px]"
        />
      </button>

      <div className="absolute right-7 group-has-[:checked]:right-[45px] group-has-[:checked]:translate-x-0 mt-[102px] transition-all delay-[600ms] z-50  text-[#2d2d2d] group-has-[:checked]:text-[#D9D9D920]">
        <p
          className={`opacity-0 blur-sm group-has-[:checked]:blur-none group-has-[:checked]:opacity-100 transition-all duration-500 ease-in-out delay-150 font-poppins text-xl text-[#D9D9D9]  font-medium`}
        >
          product category
        </p>
        <h2 className="font-poppins  font-extralight text-[40px] leading-[3.5rem] ">
          Diegetic
        </h2>
        <h2 className="font-poppins  font-extrabold text-[96px] leading-[3.5rem]">
          User
        </h2>
        <h2 className="font-poppins  font-semibold text-[40px] leading-[3.5rem] ml-[3px]">
          Interface
        </h2>
        <div className="opacity-0 group-has-[:checked]:opacity-100 transition-all duration-500 ease-in-out delay-[600ms]">
          <h3 className="font-poppins font-medium text-xl text-[#D9D9D9] tracking-widest mt-[44px]">
            product name
          </h3>
          <img
            src="/images/KRON.png"
            alt="KRON-logo"
            className="w-[217px] -translate-x-[39px] -translate-y-2"
          />
          <h3 className="font-poppins font-medium text-xl text-[#D9D9D9] tracking-widest mt-[34px] leading-[3.5rem]">
            role{" "}
          </h3>
          <h2 className="font-poppins text-[32px] font-extralight text-[#A67458] leading-[5px]">
            product
          </h2>
          <h2 className="font-poppins text-[32px] font-extralight text-[#A67458]">
            designer
          </h2>
        </div>
      </div>
    </ShowcaseCard>
  );
};

export default UserInterface;
