import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="flex flex-row h-screen">
      <Sidebar />

      <div className="flex flex-col">
        <Header />
        <HeroSection />
      </div>
    </div>
  );
};

export default App;
