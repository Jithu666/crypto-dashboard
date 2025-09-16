import { Link, useLocation } from "react-router-dom";
import profileIcon from "../assets/profileIcon.svg";

const Header = () => {
  const location = useLocation();

  const titles = {
    "/": "Dashboard",
    "/transactions": "Transactions",
    "/support": "Support",
  };

  const pageTitle = titles[location.pathname] || "Crypto-Dashboard";

  return (
    <div className="flex flex-row h-12 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-4">
      <div className="flex items-center">
        <Link to="/" className="font-medium text-xl ml-10 mr-96">
          {pageTitle}
        </Link>
        <Link to="/">
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="ml-92 pr-20 h-8"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
