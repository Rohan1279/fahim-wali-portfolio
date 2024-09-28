import { useCallback, useState, useRef } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import ShowcaseCard from "./ShowcaseCard";

const Saas = () => {
  const swiperRef = useRef(null);
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
      className={`relative`}
    >
      <p
        className={`opacity-0 blur-sm peer-checked:blur-none peer-checked:opacity-100 transition-all duration-500 ease-in-out delay-150 font-poppins text-xl text-[#161414] tracking-widest mt-[126px] ml-[57px] font-medium`}
      >
        product category
      </p>
      <h2 className="font-poppins text-[80px] font-extrabold text-[#2d2d2d] leading-[90%] peer-checked:text-[#2d2d2d]/10 transition-all duration-300 ease-in-out delay-150 ml-[54px]">
        SaaS
      </h2>
      <div className="mt-[78px] ml-[57px] opacity-0 blur-sm peer-checked:blur-none peer-checked:opacity-100 transition-all duration-500 ease-in-out">
        <p className="font-poppins font-medium text-xl text-[#161414] tracking-widest">
          product name
        </p>
        <h3 className="font-poppins font-extrabold text-[48px] text-[#2D2D2D]">
          Driip
        </h3>
        <p className="font-poppins font-medium text-xl text-[#161414] tracking-widest leading-[3.7rem] mt-5">
          role
        </p>
        <h3 className="font-poppins font-extralight text-[32px] text-[#2d2d2d] leading-[6px]">
          product
        </h3>
        <h3 className="font-poppins font-extralight text-[32px] text-[#2d2d2d] ">
          designer
        </h3>
      </div>{" "}
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        className="w-[745px] h-full absolute right-0 top-0 z-40 opacity-0 blur-sm peer-checked:blur-none peer-checked:opacity-100 transition-all duration-500 ease-in-out delay-1000"
      >
        <SwiperSlide className="flex flex-col border-red-400 pr-[64px] relative">
          <img
            src="/images/saas/slide-1.png"
            alt="slide-1"
            className="mt-auto  border-green-500"
          />
          <button className="" onClick={() => swiperRef.current.slideNext()}>
            <img
              src="/images/carousal-forward.png"
              alt="carousal-forward"
              className="absolute bottom-[21px] right-[86px] size-[50px]"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img
            src="/images/saas/slide-2.png"
            alt="slide-2"
            className="my-auto w-[652px]"
          />
          <button className="" onClick={() => swiperRef.current.slidePrev()}>
            <img
              src="/images/carousal-backward.png"
              alt="carousal-backward"
              className="absolute bottom-[21px] left-0 size-[50px]"
            />
          </button>
          <button className="" onClick={() => swiperRef.current.slideNext()}>
            <img
              src="/images/carousal-forward.png"
              alt="carousal-forward"
              className="absolute bottom-[21px] right-[86px] size-[50px]"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex">
          <img
            src="/images/saas/slide-3.png"
            alt="slide-3"
            className="my-auto w-[652px]"
          />
          <button className="" onClick={() => swiperRef.current.slidePrev()}>
            <img
              src="/images/carousal-backward.png"
              alt="carousal-backward"
              className="absolute bottom-[21px] left-0 size-[50px]"
            />
          </button>
          <button className="" onClick={() => swiperRef.current.slideNext()}>
            <img
              src="/images/carousal-forward.png"
              alt="carousal-forward"
              className="absolute bottom-[21px] right-[86px] size-[50px]"
            />
          </button>
        </SwiperSlide>
        <SwiperSlide className="flex border justify-center pr-[64px]">
          {" "}
          <img
            src="/images/saas/slide-4.png"
            alt="slide-4"
            className="my-auto w-[423px]"
          />
          <button className="" onClick={() => swiperRef.current.slidePrev()}>
            <img
              src="/images/carousal-backward.png"
              alt="carousal-backward"
              className="absolute bottom-[21px] left-0 size-[50px]"
            />
          </button>
          <button className="" onClick={() => swiperRef.current.slideNext()}>
            <img
              src="/images/carousal-forward.png"
              alt="carousal-forward"
              className="absolute bottom-[21px] right-[86px] size-[50px]"
            />
          </button>
        </SwiperSlide>
      </Swiper>
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

export default Saas;
