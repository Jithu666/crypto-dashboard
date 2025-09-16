import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import supportLogo from "../assets/Help.svg";
import dashboardLogo from "../assets/Dashboard.svg";
import transactionsLogo from "../assets/Transactions.svg";

const Sidebar = () => {
  return (
    <div className="shadow-[4px_0_1px_-1px_rgba(0,0,0,0.1)] p-4">
      <div className="min-w-1/6 flex flex-col h-screen">
        <Link to="/ ">
          <img src={logo} alt="logo" className="pt-6 pl-1 pb-6" />
        </Link>

        <Link to="/" className="flex flex-row">
          <img
            src={dashboardLogo}
            alt="Dashboard Icon"
            className="pl-1 mr-3 pb-1"
          />
          Dashboard
        </Link>

        <Link to="/transactions" className="flex flex-row mt-3">
          <img
            src={transactionsLogo}
            alt="Transaction Icon"
            className="pl-1 mr-3"
          />
          Transactions
        </Link>

        <Link to="/support" className="flex flex-row mt-96 pt-16">
          <img src={supportLogo} alt="Support Icon" className="pl-1 mr-3" />
          Support
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
