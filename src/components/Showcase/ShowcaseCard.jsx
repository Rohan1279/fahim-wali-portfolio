/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
const ShowcaseCard = ({
  delay,
  index,
  className,
  children,
  htmlFor,
  id,
  isChecked,
  handleOnClick,
  ...rest
}) => {
  return (
    <motion.label
      initial={{
        opacity: 0,
        y: 40,
        filter: "blur(10px)",
      }}
      animate={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        transition: {
          duration: 0.7,
          delay: 0.15 * index,
          type: "spring",
          stiffness: 100,
          damping: 10,
          mass: 0.8,
        },
      }}
      htmlFor={htmlFor}
      onClick={handleOnClick}
      className={`
      ${className} 
      min-w-[268px] h-[555px] 
      rounded-[10px] bg-[#d9d9d9] 
      select-none z-10 overflow-hidden 
      cursor-pointer has-[:checked]:cursor-default
      transition-shadow duration-300
    `}
      {...rest}
    >
      <input
        type="checkbox"
        id={id}
        className="peer invisible"
        checked={isChecked}
        onChange={() => {}} // Controlled component
      />
      {children}
    </motion.label>
  );
};

export default ShowcaseCard;
