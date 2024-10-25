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
    <>
      <div className="flex relative justify-center md:justify-between gap-x-[5px] md:gap-x-[19px] md:mx-[154px] md:mt-[264px] w-full md:w-[1132px] h-[671px] group showcase-gallery-mobile md:showcase-gallery">
        <Saas delay={""} index={1} />
        <MobileApp delay={""} index={2} />
        <UserInterface delay={""} index={3} />
        <Branding delay={""} index={4} />
      </div>
    </>
  );
};

export default Showcase;
