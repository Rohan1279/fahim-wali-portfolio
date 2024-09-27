import Hero from "./components/Hero/Hero";
import Inspiration from "./components/Inspiration/Inspiration";
import Philosophy from "./components/Philosophy/Philosophy";
import Showcase from "./components/Showcase/Showcase";

const App = () => {
  return (
    <div className="bg-[#161414] min-h-screen flex flex-col justify-center items-center">
      <Hero />
      <Showcase />
      <Inspiration />
      <Philosophy />
    </div>
  );
};

export default App;
