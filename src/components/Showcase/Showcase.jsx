import Saas from "./Saas";
import MobileApp from "./MobileApp/MobileApp";
import UserInterface from "./UserInterface";
import Branding from "./Branding";
import { motion } from "framer-motion";
const cards = [<Saas />, <MobileApp />, <UserInterface />, <Branding />];
const Showcase = () => {
  return (
    <div className="flex relative justify-between gap-x-[19px] mx-[154px] mt-[264px] w-[1132px] h-[671px] group showcase-gallery">
      <Saas />
      <MobileApp />
      <UserInterface />
      <Branding />
    </div>
  );
};

export default Showcase;

{
  cards.map((card, index) => (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.5,
          delay: 0.2 * index,
          ease: "easeOut",
          once: true,
        },
      }}
      key={"card" + index}
      className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
    >
      {card}
    </motion.div>
  ));
}
