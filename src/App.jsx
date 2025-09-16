import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard";
import { Routes, Route } from "react-router-dom";
import Transaction from "./components/Transaction";
// import HeroSection from "./components/HeroSection";

const App = () => {
  return (
    <div className="flex flex-row h-screen">
      {/* Sidebar stays fixed */}
      <Sidebar />

      {/* Right-hand content area */}
      <div className="flex flex-col flex-1">
        <Header />

        {/* Page content changes depending on route */}
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transactions" element={<Transaction />} />
            {/* <Route path="/support" element={<Support />} /> */}
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
