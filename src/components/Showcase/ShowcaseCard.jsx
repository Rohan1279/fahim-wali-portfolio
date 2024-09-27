import { useState } from "react";

// eslint-disable-next-line react/prop-types
const ShowcaseCard = ({ className, children, htmlFor, id }) => {
  const [isClicked, setisClicked] = useState(false);
  const handleOnClick = () => {
    setisClicked((prev) => !prev);
  };
  return (
    <label
      htmlFor={htmlFor}
      onClick={handleOnClick}
      className={`${className}   
 min-w-[268px] h-[555px] rounded-[10px] bg-[#d9d9d9]`}
    >
      <input type="radio" id={id} className="invisible" />
      {children}
    </label>
  );
};

export default ShowcaseCard;
