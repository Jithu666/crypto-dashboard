import Header from "./Header";
import Sidebar from "./Sidebar";
import downloadIcon from "../assets/DownArrow.svg";

const Transaction = () => {
  return (
    <div className="flex flex-row h-screen">
      <div className="flex flex-col w-full">
        {/* Button */}
        <div className="flex flex-row">
          <button className="flex flex-row bg-purple-800 text-white rounded-lg ml-auto mr-20 mt-8 px-3 py-1">
            <img src={downloadIcon} alt="Download Icon" className="pr-1" />
            Export CSV
          </button>
        </div>
        {/* Button */}

        {/* Transactions Space */}
        <div className="flex flex-col">
          {/* 1st container */}
          <div className="flex-col bg-white rounded-lg border mt-6 ml-10 w-11/12">
            Complete Container
            <div className="flex flex-col">
              {/* 2 inner Columns Stacked Side by Side */}
              <div className="flex flex-row">
                {/* Labels */}
                <div className="flex flex-row space-x-14 border">
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p>All</p>
                      <button className="bg-gray-50 rounded-xl">349</button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p>Deposit</p>
                      <button className="bg-gray-50 rounded-xl">349</button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p>Withdraw</p>
                      <button className="bg-gray-50 rounded-xl">349</button>
                    </div>{" "}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p>Trade</p>
                      <button className="bg-gray-50 rounded-xl">349</button>
                    </div>{" "}
                  </div>
                </div>
                {/* Labels */}

                {/* Search Container */}
                <div className="flex flex-row">Search Container</div>
                {/* Search Container */}
              </div>
              {/* 2 inner Columns Stacked Side by Side */}
            </div>
          </div>
          {/* 1st container */}
        </div>
        {/* Transactions Space */}
      </div>
    </div>
  );
};

export default Transaction;
