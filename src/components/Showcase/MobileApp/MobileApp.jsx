import { useCallback, useState } from "react";
import ShowcaseCard from "../ShowcaseCard";
import Pedal from "./Pedal";
import Simvest from "./Simvest";

const MobileApp = () => {
  const [currentApp, setCurrentApp] = useState(null);
  console.log("currentApp", currentApp);

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
    setCurrentApp(null);
  }, []);

  return (
    <ShowcaseCard
      isChecked={isChecked}
      handleOnClick={handleOnClick}
      htmlFor={"mobile-app"}
      id={"mobile-app"}
      className={`translate-y-[116px] overflow-hidden group`}
    >
      <div className="border border-teal-500 w-fit h-full group-has-[:checked]:py-[57px] transition-all ease-in-out duration-300 z-50">
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   -mt-2"
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D10",
          }}
        >
          Mobile
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   "
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D25",
          }}
        >
          Mobile
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   "
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D50",
          }}
        >
          Mobile
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[90%] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   "
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D75",
          }}
        >
          Mobile
        </h2>
        {/* //! CENTER */}
        <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[90%] group-has-[:checked]:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   -mt-[3px]">
          Mobile
        </h2>
        <h2 className="font-poppins text-[64px] font-extrabold text-[#2D2D2D] leading-[3.8rem] group-has-[:checked]:text-[#2d2d2d]/10  transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px] ">
          App
        </h2>
        {/* //! CENTER */}
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   -mt-[3px]"
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D75",
          }}
        >
          App
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   -mt-[3px]"
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D50",
          }}
        >
          App
        </h2>
        <h2
          className="font-poppins text-[64px] font-extrabold text-[#d9d9d9] leading-[3.8rem] peer-checked:text-[#d9d9d9] transition-all duration-300 ease-in-out delay-150 ml-2 peer-[:checked]:ml-[42px]   -mt-[3px]"
          style={{
            WebkitTextStroke: isChecked ? "1px #c8c8c8" : "1px #2D2D2D25",
          }}
        >
          App
        </h2>
      </div>

      <div
        className={`w-[748px] h-full  absolute right-[56px] top-0 invisible blur-sm peer-checked:blur-none peer-checked:visible transition-all duration-500 border border-red-400 z-40 `}
      >
        {!currentApp && (
          <div className="relative flex justify-center gap-x-[40px] pt-[89px] mr-1">
            <div onClick={() => setCurrentApp("pedal")} className={`relative`}>
              <h2
                style={{
                  rotate: "-90deg",
                  WebkitTextStroke: currentApp !== "pedal" && "1px #585858",
                }}
                className={`font-oswald ${
                  currentApp === "pedal" ? "text-[#2D2D2D]" : "text-[#d9d9d9]"
                } transition-all text-[110px] font-bold absolute -left-[10.6rem] top-[196px] -z-10`}
              >
                pedal
              </h2>
              <img
                src="/images/mobile-app/pedal/pedal.png"
                alt="pedal"
                className={`w-[245px] z-50 transition-all duration-300`}
              />
            </div>

            <div
              onClick={() => setCurrentApp("simvest")}
              className={`relative`}
            >
              <h2
                style={{
                  rotate: "90deg",
                  WebkitTextStroke: currentApp !== "simvest" && "1px #585858",
                }}
                className={`font-oswald ${
                  currentApp === "simvest" ? "text-[#2D2D2D]" : "text-[#d9d9d9]"
                } transition-all text-[110px] font-bold absolute -right-[13.05rem] top-[196px] -z-10`}
              >
                simvest
              </h2>
              <img
                src="/images/mobile-app/simvest/simvest.png"
                alt="simvest"
                className={`w-[245px] z-50 transition-all duration-300`}
              />
              {/* ${currentApp === "simvest" ? "ml-[110px]" : "ml-[95px]"} */}
            </div>
          </div>
        )}
        {currentApp === "pedal" && (
          <Pedal currentApp={currentApp} setCurrentApp={setCurrentApp} />
        )}
        {currentApp === "simvest" && (
          <Simvest currentApp={currentApp} setCurrentApp={setCurrentApp} />
        )}
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

export default MobileApp;
