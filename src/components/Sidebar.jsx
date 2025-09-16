import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";
import supportLogo from "../assets/Help.svg";
import dashboardLogo from "../assets/Dashboard.svg";
import transactionsLogo from "../assets/Transactions.svg";

const Sidebar = () => {
  return (
    <div className="shadow-[4px_0_1px_-1px_rgba(0,0,0,0.1)] p-4">
      <div className="min-w-1/6 flex flex-col h-screen">
        <NavLink to="/ ">
          <img src={logo} alt="logo" className="pt-6 pl-1 pb-6" />
        </NavLink>

        <NavLink
          to="/"
          end
          className={({ isActive }) => `
            flex flex-row items-center mt-3 rounded-xl
             ${
               isActive
                 ? "bg-gray-100 text-black px-1.5 py-1 w-fit pr-14"
                 : "hover:bg-gray-100 px-1.5 py-1 w-fit pr-14"
             }
          `}
        >
          <img src={dashboardLogo} alt="Dashboard Icon" className="pl-1 mr-3" />
          Dashboard
        </NavLink>

        <NavLink
          to="/transactions"
          end
          className={({ isActive }) => `
            flex flex-row items-center mt-3 rounded-xl
             ${
               isActive
                 ? "bg-gray-100 text-black px-1.5 py-1 w-fit pr-12"
                 : "hover:bg-gray-100 px-1.5 py-1 w-fit pr-12"
             }
          `}
        >
          <img
            src={transactionsLogo}
            alt="Transactions Icon"
            className="pl-1 mr-3 font-black"
          />
          Transactions
        </NavLink>

        <NavLink
          to="/support"
          end
          className={({ isActive }) => `
            flex flex-row items-center mt-96 rounded-xl
             ${
               isActive
                 ? "bg-gray-100 text-black px-1.5 py-1 w-fit pr-20"
                 : "hover:bg-gray-100 px-1.5 py-1 w-fit pr-20"
             }
          `}
        >
          <img src={supportLogo} alt="Dashboard Icon" className="pl-1 mr-3" />
          Support
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
