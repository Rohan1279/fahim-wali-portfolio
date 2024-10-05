import Saas from "./Saas";
import MobileApp from "./MobileApp/MobileApp";
import UserInterface from "./UserInterface";
import Branding from "./Branding";
const Showcase = () => {
  return (
    <div className="flex justify-between gap-x-[19px] mx-[154px] mt-[264px] w-[1132px] h-[671px] group showcase-gallery overflow-hidden">
      <Saas />
      <MobileApp />
      <UserInterface />
      <Branding />
    </div>
  );
};

export default Showcase;
