import { useEffect, useState } from "react";
import Hero from "./components/Hero/Hero";
import Inspiration from "./components/Inspiration/Inspiration";
import Philosophy from "./components/Philosophy/Philosophy";
import Showcase from "./components/Showcase/Showcase";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";

const CustomSonner = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Delay the appearance of the toast
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000); // 1 second delay

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{
            y: 100,
            width: 61,
            height: 61,
            opacity: 0,
            borderRadius: "50%",
            filter: "blur(5px)",
          }}
          animate={{
            y: 0,
            width: 232,
            height: 61,
            opacity: 1,
            borderRadius: "19px",
            filter: "blur(0px)",
          }}
          exit={{
            y: 100,
            width: 61,
            height: 61,
            opacity: 0,
            borderRadius: "50%",
            filter: "blur(5px)",
          }}
          transition={{
            duration: 0.5,
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
          style={{
            position: "fixed",
            bottom: "20px",
            right: "20px",
            zIndex: 1000,
          }}
          className="p-4 rounded-[19px] bg-[#d9d9d9] shadow-lg flex justify-center items-center gap-x-3 relative font-poppins"
        >
          <motion.a
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.6,
              ease: "easeOut",
            }}
            className=" border-black text-[#a67458]"
            href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7244778768681070593"
            target="_blank"
          >
            <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              Subscribe on{" "}
              <span className="hover:text-blue-500 hover:underline transition-all font-bold">
                LinkedIn
              </span>
            </motion.span>
          </motion.a>

          <button
            size="icon"
            onClick={() => setIsVisible(false)}
            className="h-6 w-6 rounded-full bg-[#d9d9d9] absolute -top-2 -right-2 shadow-md"
          >
            <X className="h-4 w-4 mx-auto" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const App = () => {
  return (
    <div className="bg-[#161414] min-h-screen flex flex-col justify-center items-center">
      <Hero />
      <Showcase />
      <Inspiration />
      <Philosophy />
      <CustomSonner />
    </div>
  );
};

export default App;
