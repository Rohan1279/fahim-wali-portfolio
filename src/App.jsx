import Hero from "./components/Hero/Hero";
import Inspiration from "./components/Inspiration/Inspiration";
import Philosophy from "./components/Philosophy/Philosophy";

const App = () => {
  return (
    <div className="bg-[#161414] min-h-screen">
      <Hero />
      <Inspiration />
      <Philosophy />
    </div>
  );
};

export default App;
