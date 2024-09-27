import Banner from "./components/Banner/Banner";
import Inspiration from "./components/Inspiration/Inspiration";
import Philosophy from "./components/Philosophy/Philosophy";

const App = () => {
  return (
    <div className="bg-[#161414] min-h-screen">
      <Banner />
      <Inspiration />
      <Philosophy />
    </div>
  );
};

export default App;
