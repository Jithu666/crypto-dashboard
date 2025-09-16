// import Header from "./Header";
// import Sidebar from "./Sidebar";
import HeroSection from "./HeroSection";
import Transaction from "./Transaction";
import { Routes, Route, Link, useLocation } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col">
        <HeroSection />
      </div>
    </div>
  );
};

export default Dashboard;
