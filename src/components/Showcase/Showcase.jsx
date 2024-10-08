import Saas from "./Saas";
import MobileApp from "./MobileApp/MobileApp";
import UserInterface from "./UserInterface";
import Branding from "./Branding";
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
