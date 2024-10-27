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
      w-[90px] md:min-w-[268px] h-[555px] 
      rounded-[10px] bg-[#d9d9d9] 
      select-none z-10 overflow-hidden 
      cursor-pointer has-[:checked]:cursor-default
      transition-shadow duration-300
      relative group
    `}
      {...rest}
      whileHover="hover"
    >
      <motion.div
        style={{
          visibility: isChecked ? "hidden" : "visible",
        }}
        className="absolute bottom-0 left-0 right-0 bg-[#A67458] -z-10 group-has-[:checked]:bg-[#d9d9d9] group-has-[:checked]:hidden"
        initial={{ height: 0 }}
        variants={{
          hover: {
            height: "100%",
            transition: {
              duration: 0.7,
              ease: [0.33, 1, 0.68, 1], // custom cubic-bezier for a more professional, water-like easing
            },
          },
        }}
      />
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
