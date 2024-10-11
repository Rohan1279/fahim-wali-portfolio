import Saas from "./Saas";
import MobileApp from "./MobileApp/MobileApp";
import UserInterface from "./UserInterface";
import Branding from "./Branding";
import { motion } from "framer-motion";
const cards = [
  {
    component: <Saas key={"saas"} />,
  },
  {
    component: <MobileApp key={"mobile-app"} />,
  },
  {
    component: <UserInterface key={"user-interface"} />,
  },
  {
    component: <Branding key={"branding"} />,
  },
];
const AnimatedCard = ({ children, delay }) => (
  <div
    className={`transform opacity-0 translate-y-8 transition-all duration-700 ease-out`}
    style={{
      animationDelay: `${delay}ms`,
      animationFillMode: "forwards",
      animation: "slideIn 0.7s ease-out forwards",
    }}
  >
    {children}
  </div>
);
const Showcase = () => {
  return (
    <div className="flex relative justify-between gap-x-[19px] mx-[154px] mt-[264px] w-[1132px] h-[671px] group showcase-gallery">
      <Saas delay={""} index={1} />
      <MobileApp delay={""} index={2} />
      <UserInterface delay={""} index={3} />
      <Branding delay={""} index={4} />
    </div>
    // <div className="flex relative justify-between gap-x-[19px] mx-[154px] mt-[264px] w-[1132px] h-[671px] group showcase-gallery">
    //   {cards.map((card, index) => (
    //     <motion.div
    //       initial={{
    //         opacity: 0,
    //         // y: 20,
    //       }}
    //       animate={{
    //         opacity: 1,
    //         // y: 0,
    //         transition: {
    //           duration: 0.5,
    //           delay: 0.2 * index,
    //           ease: "easeOut",
    //           once: true,
    //         },
    //       }}
    //       key={"card" + index}
    //       className=""
    //     >
    //       {card.component}
    //     </motion.div>
    //   ))}
    // </div>
  );
};

export default Showcase;

// {
//   cards.map((card, index) => (
//     <motion.div
//       initial={{
//         opacity: 0,
//         y: 20,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//         transition: {
//           duration: 0.5,
//           delay: 0.2 * index,
//           ease: "easeOut",
//           once: true,
//         },
//       }}
//       key={"card" + index}
//       className="last:pr-[5%] md:last:pr-[33%]  rounded-3xl"
//     >
//       {card}
//     </motion.div>
//   ));
// }
