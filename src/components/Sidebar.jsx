import logo from "../assets/logo.svg";
import { Link } from "react-router-dom";
import supportLogo from "../assets/Help.svg";
import dashboardLogo from "../assets/Dashboard.svg";
import transactionsLogo from "../assets/Transactions.svg";

const Sidebar = () => {
  return (
    <div className="">
      <div className="w-1/6 flex flex-col border h-screen pr-2">
        <Link to="/">
          <img src={logo} alt="logo" className="pt-10 pl-8 pb-6" />
        </Link>

        <Link to="" className="flex flex-row">
          <img src={dashboardLogo} alt="dashboard icon" className="ml-8 mr-3" />
          Dashboard
        </Link>

        <Link to="" className="flex flex-row mt-3">
          <img
            src={transactionsLogo}
            alt="dashboard icon"
            className="ml-8 mr-3"
          />
          Transactions
        </Link>

        <Link to="" className="flex flex-row mt-96 pt-16">
          <img src={supportLogo} alt="dashboard icon" className="ml-8 mr-3" />
          Support
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
