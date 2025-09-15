import { Link } from "react-router-dom";
import profileIcon from "../assets/profileIcon.svg";

const Header = () => {
  return (
    <div className="flex flex-row h-16 shadow-[0_4px_6px_-1px_rgba(0,0,0,0.1)] p-4">
      <div className="flex items-center">
        <h1 className="font-medium text-xl ml-10 mr-96">Dashboard</h1>
        <Link to="/">
          <img
            src={profileIcon}
            alt="Profile Icon"
            className="ml-92 pr-20 h-10"
          />
        </Link>
      </div>
    </div>
  );
};

export default Header;
