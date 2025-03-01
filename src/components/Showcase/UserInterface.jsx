import { useCallback, useState } from "react";
import ShowcaseCard from "./ShowcaseCard";
import { motion } from "framer-motion";
import PDFModal from "../PDFModal/PDFModal";

const UserInterface = ({ delay, index }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [shown, setShown] = useState(false);

  const handleOnClick = useCallback(
    (e) => {
      if (!isChecked) {
        setIsChecked(true);
      } else {
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
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };
  const kronImageVariants = {
    hidden: { opacity: 0, y: 20, x: 0 },
    visible: {
      opacity: 1,
      y: 0,
      x: -39, // This replaces the -translate-x-[39px] class
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <>
      <ShowcaseCard
        delay={delay}
        index={index}
        isChecked={isChecked}
        handleOnClick={handleOnClick}
        htmlFor={"user-interface"}
        id={"user-interface"}
        className="hidden md:block relative overflow-hidden group/interface"
      >
        <motion.img
          src="/images/user-interface.png"
          alt="user-interface"
          className="absolute right-0 top-0 w-full h-full object-cover z-40 "
          initial={{ opacity: 0 }}
          animate={{ opacity: isChecked ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        {isChecked && (
          <motion.button
            onClick={handleCloseClick}
            className="absolute top-5 left-1/2 z-50"
            initial={{
              scale: 0,
              opacity: 0,
              rotate: -180,
              y: -50,
            }}
            animate={{
              scale: 1,
              opacity: 1,
              rotate: 0,
              y: 0,
            }}
            exit={{
              scale: 0,
              opacity: 0,
              rotate: 180,
              y: -50,
            }}
            whileHover={{
              scale: 1.1,
            }}
            whileTap={{
              scale: 0.95,
              rotate: -10,
            }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 15,
              duration: 0.6,
            }}
          >
            <motion.div
              className="rounded-full"
              whileHover={{
                rotate: 90,
                transition: {
                  type: "spring",
                  stiffness: 300,
                  damping: 10,
                },
              }}
              initial={{ rotate: -90 }}
              animate={{ rotate: 0 }}
              transition={{
                delay: 0.2,
                type: "spring",
                stiffness: 200,
                damping: 10,
              }}
            >
              <img
                src="/images/close-button-white.svg"
                alt="close-button"
                className="size-[55px]"
              />
            </motion.div>
          </motion.button>
        )}

        <motion.div
          style={{
            transform: isChecked && "translateY(0px)",
          }}
          className="absolute right-7 mt-[102px] z-50 text-[#2d2d2d] group-hover/interface:-translate-y-3  ease-in-out duration-300 group-active/interface:scale-95"
          animate={{
            right: isChecked ? "45px" : "28px",
            color: isChecked ? "#D9D9D920" : "#2d2d2d",
          }}
          transition={{ duration: 0.5 }}
        >
          <motion.p
            className="font-poppins text-xl text-[#D9D9D9] font-medium"
            initial={{ opacity: 0, filter: "blur(4px)" }}
            animate={{
              opacity: isChecked ? 1 : 0,
              filter: isChecked ? "blur(0px)" : "blur(4px)",
            }}
            transition={{ duration: 0.5 }}
          >
            product category
          </motion.p>
          <motion.h2 className="font-poppins font-extralight text-[40px] leading-[3.5rem]">
            Diegetic
          </motion.h2>
          <motion.h2 className="font-poppins font-extrabold text-[96px] leading-[3.5rem]">
            User
          </motion.h2>
          <motion.h2 className="font-poppins font-semibold text-[40px] leading-[3.5rem] ml-[3px]">
            Interface
          </motion.h2>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isChecked ? "visible" : "hidden"}
          >
            <motion.h3
              variants={itemVariants}
              className="font-poppins font-medium text-xl text-[#D9D9D9] tracking-widest mt-[44px]"
            >
              product name
            </motion.h3>
            <motion.img
              variants={kronImageVariants}
              src="/images/KRON.png"
              alt="KRON-logo"
              className="w-[217px] -translate-y-2" // Removed -translate-x-[39px]
            />
            <motion.h3
              variants={itemVariants}
              className="font-poppins font-medium text-xl text-[#D9D9D9] tracking-widest mt-[34px] leading-[3.5rem]"
            >
              role{" "}
            </motion.h3>
            <motion.h2
              variants={itemVariants}
              className="font-poppins text-[32px] font-extralight text-[#A67458] leading-[5px] mb-1"
            >
              diegetic
            </motion.h2>
            <motion.h2
              variants={itemVariants}
              className="font-poppins text-[32px] font-extralight text-[#A67458]"
            >
              ui designer
            </motion.h2>
          </motion.div>
        </motion.div>
      </ShowcaseCard>
      <motion.label
        htmlFor={"user-interface"}
        onClick={handleOnClick}
        initial={{
          opacity: 0,
          // y: 40,
          filter: "blur(10px)",
        }}
        animate={{
          opacity: 1,
          // y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 0.7,
            delay: 0.15 * 3,
            type: "spring",
            stiffness: 100,
            damping: 10,
            mass: 0.8,
          },
        }}
        className="block md:hidden w-full  h-[507px] rounded-[10px] bg-[#d9d9d9] cursor-pointer relative overflow-hidden"
      >
        <input
          type="checkbox"
          id="user-interface"
          checked={isChecked}
          className="invisible"
          onChange={() => {}} // Controlled component
        />

        <div
          className={`absolute top-1/2 -translate-y-1/2 -left-12 font-poppins -rotate-90 transition-all group-hover/saas:-translate-y-3 ease-in-out duration-300 group-active/saas:scale-95 leading-6`}
        >
          <span className="font-poppins font-extralight text-[36px] text-[#a67458] absolute -top-7 left-1 z-50">
            Diegetic
          </span>
          <div className="flex  text-[#2D2D2D] z-40">
            <span className="font-extrabold text-[64px] ">User</span>
            <span className="font-semibold text-[16px] mt-[17px]">
              Interface
            </span>
          </div>
        </div>
        <motion.img
          src="/images/user-interface.png"
          alt="user-interface"
          className="absolute right-0 top-0 w-full h-full object-cover z-40 "
          initial={{ opacity: 0 }}
          animate={{ opacity: isChecked ? 1 : 0 }}
          transition={{ duration: 0.5 }}
        />
        {isChecked && (
          <>
            <motion.div
              style={{
                transform: isChecked && "translateY(0px)",
              }}
              className=" absolute left-0 bottom-0 w-full  mt-[102px] z-50 text-[#2d2d2d] group-hover/interface:-translate-y-3  ease-in-out duration-300 group-active/interface:scale-95"
              animate={{
                right: isChecked ? "45px" : "28px",
                color: isChecked ? "#D9D9D920" : "#2d2d2d",
              }}
              transition={{ duration: 0.5 }}
            >
              {/* <motion.p
                className="font-poppins text-xl text-[#D9D9D9] font-medium"
                initial={{ opacity: 0, filter: "blur(4px)" }}
                animate={{
                  opacity: isChecked ? 1 : 0,
                  filter: isChecked ? "blur(0px)" : "blur(4px)",
                }}
                transition={{ duration: 0.5 }}
              >
                product category
              </motion.p>
              <motion.h2 className="font-poppins font-extralight text-[40px] leading-[3.5rem]">
                Diegetic
              </motion.h2>
              <motion.h2 className="font-poppins font-extrabold text-[96px] leading-[3.5rem]">
                User
              </motion.h2>
              <motion.h2 className="font-poppins font-semibold text-[40px] leading-[3.5rem] ml-[3px]">
                Interface
              </motion.h2> */}

              <motion.div
                variants={containerVariants}
                initial="hidden"
                animate={isChecked ? "visible" : "hidden"}
                className=" w-full mx-auto flex justify-evenly"
              >
                <div>
                  <motion.h3
                    variants={itemVariants}
                    className="font-poppins font-medium text-lg text-[#D9D9D9] tracking-widest mt-[44px]"
                  >
                    product name
                  </motion.h3>
                  <motion.img
                    variants={kronImageVariants}
                    src="/images/KRON.png"
                    alt="KRON-logo"
                    className="w-[195px] -translate-y-2 
                  " // Removed -translate-x-[39px]
                  />
                </div>
                <div>
                  <motion.h3
                    variants={itemVariants}
                    className="font-poppins font-medium text-lg text-[#D9D9D9] tracking-widest mt-[34px] leading-[3rem] mb-1"
                  >
                    role{" "}
                  </motion.h3>
                  <motion.h2
                    variants={itemVariants}
                    className="font-poppins text-[26px] font-extralight text-[#A67458] leading-[5px]"
                  >
                    diegetic
                  </motion.h2>
                  <motion.h2
                    variants={itemVariants}
                    className="font-poppins text-[26px] font-extralight text-[#A67458]"
                  >
                    ui designer
                  </motion.h2>
                </div>
              </motion.div>
            </motion.div>
            <motion.button
              onClick={handleCloseClick}
              className="absolute top-5 left-1/2 z-50"
              initial={{
                scale: 0,
                opacity: 0,
                rotate: -180,
                y: -50,
              }}
              animate={{
                scale: 1,
                opacity: 1,
                rotate: 0,
                y: 0,
              }}
              exit={{
                scale: 0,
                opacity: 0,
                rotate: 180,
                y: -50,
              }}
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.95,
                rotate: -10,
              }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 15,
                duration: 0.6,
              }}
            >
              <motion.div
                className="rounded-full"
                whileHover={{
                  rotate: 90,
                  transition: {
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                  },
                }}
                initial={{ rotate: -90 }}
                animate={{ rotate: 0 }}
                transition={{
                  delay: 0.2,
                  type: "spring",
                  stiffness: 200,
                  damping: 10,
                }}
              >
                <img
                  src="/images/close-button-white.svg"
                  alt="close-button"
                  className="size-[55px]"
                />
              </motion.div>
            </motion.button>
          </>
        )}
      </motion.label>
      {isChecked && (
        <>
          <motion.a
            href="https://drive.google.com/file/d/1vZYaHi0knMxQcLCLDKQBieVuGCcsX3xX/view?usp=sharing"
            target="_blank"
            initial={{
              y: -100,
              width: 61,
              height: 61,
              opacity: 0,
              borderRadius: "50%",
              filter: "blur(10px)",
              transform: "translateX(-50%)",
            }}
            animate={{
              y: 0,
              width: 282,
              height: 61,
              opacity: 1,
              borderRadius: "0px",
              filter: "blur(0px)",
              transform: "translateX(-50%)",
            }}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1], // Custom easing for smooth motion
              opacity: { duration: 0.8 },
              width: {
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
              borderRadius: {
                delay: 0.2,
                duration: 0.8,
              },
              filter: {
                delay: 0.1,
                duration: 0.8,
              },
            }}
            className={`block md:hidden absolute bottom-7 left-1/2 overflow-hidden gradientBorderMask`}
            // onClick={() => setShown(true)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
              }}
              type="email"
              name="email"
              placeholder="Type your email address here..."
              className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="uppercase"
              >
                view design process{" "}
              </motion.span>
            </motion.button>
          </motion.a>
          <motion.button
            initial={{
              y: -100,
              width: 61,
              height: 61,
              opacity: 0,
              borderRadius: "50%",
              filter: "blur(10px)",
              transform: "translateX(-50%)",
            }}
            animate={{
              y: 0,
              width: 282,
              height: 61,
              opacity: 1,
              borderRadius: "0px",
              filter: "blur(0px)",
              transform: "translateX(-50%)",
            }}
            transition={{
              duration: 1,
              ease: [0.23, 1, 0.32, 1], // Custom easing for smooth motion
              opacity: { duration: 0.8 },
              width: {
                delay: 0.2,
                duration: 0.8,
                type: "spring",
                stiffness: 100,
                damping: 15,
              },
              borderRadius: {
                delay: 0.2,
                duration: 0.8,
              },
              filter: {
                delay: 0.1,
                duration: 0.8,
              },
            }}
            className={`hidden md:block absolute -bottom-[101px] left-1/2 overflow-hidden gradientBorderMask`}
            onClick={() => setShown(true)}
          >
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: 0.6,
                duration: 0.5,
                ease: "easeOut",
              }}
              type="email"
              name="email"
              placeholder="Type your email address here..."
              className="w-full h-full bg-transparent text-[14px] text-[#D9D9D9] font-poppins font-extralight subpixel-antialiased tracking-widest"
            >
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.4 }}
                className="uppercase"
              >
                view design process{" "}
              </motion.span>
            </motion.button>
          </motion.button>
          <PDFModal
            pdfUrl={"1vZYaHi0knMxQcLCLDKQBieVuGCcsX3xX"}
            shown={shown}
            setShown={setShown}
          />
        </>
      )}
    </>
  );
};

export default UserInterface;
