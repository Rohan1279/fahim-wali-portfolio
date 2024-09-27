import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ShowcaseCard = ({ className, children }) => {
  const [isClicked, setisClicked] = useState(false);
  const handleOnClick = () => {
    setisClicked((prev) => !prev);
  };
  return (
    <div
      onClick={handleOnClick}
      className={`${className} ${isClicked && "bg-red-600 w-full"}
 w-[268px] h-[555px] rounded-[10px] bg-[#d9d9d9]`}
    >
      {children}
    </div>
  );
};

export default ShowcaseCard;
