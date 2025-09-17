import Header from "./Header";
import Sidebar from "./Sidebar";
import SearchIcon from "../assets/SearchIcon.svg";
import downloadIcon from "../assets/DownArrow.svg";
import downTriangle from "../assets/DownTriangle.svg";

const Transaction = () => {
  return (
    <div className="flex flex-row h-screen bg-gray-100">
      <div className="flex flex-col w-full">
        {/* Button */}
        <div className="flex flex-row">
          <button className="flex flex-row bg-purple-800 text-white rounded-lg ml-auto mr-20 mt-4 px-3 py-1">
            <img src={downloadIcon} alt="Download Icon" className="pr-1" />
            Export CSV
          </button>
        </div>
        {/* Button */}

        {/* Transactions Space */}
        <div className="flex flex-col">
          {/* 1st container */}
          <div className="flex-col bg-white rounded-lg mt-4 ml-10  w-11/12">
            <div className="flex flex-col mt-4 border-b border-gray-200">
              {/* 2 inner Columns Stacked Side by Side */}
              <div className="flex flex-row">
                {/* Labels */}
                <div className="flex flex-row items-center space-x-14">
                  <div className="flex flex-col ml-10 ">
                    <div className="flex flex-row">
                      <p className="m-auto px-2 text-sm">All</p>
                      <button className="bg-gray-100 rounded-xl px-2 text-sm">
                        349
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p className="m-auto px-2 text-sm">Deposit</p>
                      <button className="bg-gray-100 rounded-xl px-2 text-sm">
                        114
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p className="m-auto px-2 text-sm">Withdraw</p>
                      <button className="bg-gray-100 rounded-xl px-2 text-sm">
                        213
                      </button>
                    </div>{" "}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">
                      <p className="m-auto px-2 text-sm">Trade</p>
                      <button className="bg-gray-100 rounded-xl px-2 text-sm">
                        22
                      </button>
                    </div>{" "}
                  </div>
                </div>
                {/* Labels */}

                {/* Search Container */}
                <div className="flex flex-row ml-28 pr-4 ">
                  <div className="flex flex-row border border-black rounded-3xl h-10 w-64">
                    <img
                      src={SearchIcon}
                      alt=""
                      className="mt-2 ml-2 mr-3 h-6 w-6"
                    />
                    <p className="flex items-center text-gray-900/60">
                      Search by ID or Script Name
                    </p>
                  </div>
                </div>
                {/* Search Container */}
              </div>
              {/* 2 inner Columns Stacked Side by Side */}
              <div></div>
            </div>
            {/* 2nd Inner Container */}
            <div className="flex flex-row mt-4 mb-2 pb-4 border-b border-gray-200">
              <div className="flex flex-col ml-6">
                <p className="font-medium text-sm">ID</p>
              </div>

              {/*  */}
              <div className="flex flex-row">
                <p className="flex flex-col w-26 ml-36">Date & Time</p>
                <img
                  src={downTriangle}
                  alt=""
                  className="w-4 flex flex-col mt-2"
                />
              </div>
              {/*  */}

              <div className="flex flex-col ml-24">
                <p className="font-medium text-sm">Type</p>
              </div>

              {/*  */}
              <div className="flex flex-row ml-40">
                <p className="flex flex-col">Amount</p>
                <img
                  src={downTriangle}
                  alt=""
                  className="w-4 h-4 flex flex-col mt-2 mr-30"
                />
              </div>
              {/*  */}

              <div className="flex flex-col ml-8">
                <p className="mr-48 font-medium text-sm">Status</p>
              </div>
            </div>
            {/* Bigger Container */}
            <div className="block flex-col items-center">
              {/* 1st Individual Row */}
              <div className="flex flex-row mb-4 border-b border-gray-100 pb-2">
                <div className="flex flex-row">
                  <p className="ml-4 w-fit">HD82NA2H</p>
                </div>
                <div className="flex flex-col w-fit ml-22">
                  <p className="font-medium">2022-06-09</p>
                  <p className="text-[14px] text-gray-500/80">07:06 PM</p>
                </div>

                <div className="flex flex-col ml-30">
                  <p className="font-medium">INR Deposit</p>
                  <p className="text-[14px] text-gray-500/80">E- Transfer</p>
                </div>

                <div className="flex flex-row ml-24 ">
                  <p className="font-medium w-fit">+ &#8377; 81,123.10</p>
                </div>

                {/* Status Button */}
                <div className="flex flex-row">
                  <button className="ml-28 px-1.5 py-0.5 bg-gray-600 text-white h-fit m-1 p-1.5 rounded-2xl text-sm font-medium">
                    Pending
                  </button>
                </div>
                {/* Status Button */}
              </div>
              {/* 1st Individal Row */}

              {/* 2nd Individual Row */}
              <div className="flex flex-row mb-4 border-b border-gray-100 pb-2">
                <div className="flex flex-row">
                  <p className="ml-4 w-fit">HD82NA2H</p>
                </div>
                <div className="flex flex-col w-fit ml-22">
                  <p className="font-medium">2022-06-07</p>
                  <p className="text-[14px] text-gray-500/80">02:48 PM</p>
                </div>

                <div className="flex flex-col ml-30">
                  <p className="font-medium">INR Withdraw</p>
                  <p className="text-[14px] text-gray-500/80">Wire Transfer</p>
                </div>

                <div className="flex flex-row">
                  <p className="ml-22 w-fit font-medium">- &#8377; 81,123.10</p>
                </div>

                {/* Status Button */}
                <div className="flex flex-row">
                  <button className="ml-28 px-1.5 py-0.5 bg-yellow-600 text-white h-fit m-1 p-1.5 rounded-2xl text-sm font-medium">
                    Processing
                  </button>
                </div>
                {/* Status Button */}
              </div>
              {/* 2nd Individual Row */}

              {/* 3rd Individual Row */}
              <div className="flex flex-row mb-4 border-b border-gray-100 pb-2">
                <div className="flex flex-row">
                  <p className="ml-4 w-fit">HD82NA2H</p>
                </div>
                <div className="flex flex-col w-fit ml-22">
                  <p className="font-medium">2022-06-04</p>
                  <p className="text-[14px] text-gray-500/80">09:21 AM</p>
                </div>

                <div className="flex flex-col ml-30">
                  <p>Buy</p>
                </div>

                <div className="flex flex-col">
                  <p className="ml-40 w-fit font-medium">+ 12.48513391 BTC</p>
                  <p className="ml-40 w-fit text-[12px]">- $ 81,123.10</p>
                </div>

                {/* Status Button */}
                <div className="flex flex-row">
                  <button className="ml-18 px-1.5 py-0.5 bg-red-600 text-white h-fit m-1 p-1.5 rounded-2xl text-sm font-medium">
                    Cancelled
                  </button>
                </div>
                {/* Status Button */}
              </div>
              {/* 3rd Individual Row */}

              {/* 4th Individual Row */}
              <div className="flex flex-row mb-4 border-b border-gray-100 pb-2">
                <div className="flex flex-row">
                  <p className="ml-4 w-fit">HD82NA2H</p>
                </div>
                <div className="flex flex-col w-fit ml-22 font-medium">
                  <p>2022-06-03</p>
                  <p className="text-[14px] text-gray-500/80">01:32 PM</p>
                </div>

                <div className="flex flex-col ml-30">
                  <p className="font-medium">Sell</p>
                </div>

                <div className="flex flex-col">
                  <p className="ml-40 w-fit font-medium">- 0.36401628 BTC</p>
                  <p className="ml-40 w-fit text-[12px]">+ $ 19,378.84</p>
                </div>

                {/* Status Button */}
                <div className="flex flex-row">
                  <button className="ml-22 px-1.5 py-0.5 bg-green-600 text-white h-fit m-1 p-1.5 rounded-2xl text-sm font-medium">
                    Completed
                  </button>
                </div>
                {/* Status Button */}
              </div>
              {/* 4th Individual Row */}

              {/* 5th Individual Row */}
              <div className="flex flex-row mb-4 border-b border-gray-100 pb-2">
                <div className="flex flex-row">
                  <p className="ml-4 w-fit">HD82NA2H</p>
                </div>
                <div className="flex flex-col w-fit ml-22">
                  <p>2022-06-03</p>
                  <p className="text-[14px] text-gray-500/80">09:02 AM</p>
                </div>

                <div className="flex flex-col ml-30">
                  <p className="font-medium">BTC Deposit</p>
                </div>

                <div className="flex flex-col">
                  <p className="ml-24 w-fit font-medium">+ 4.139461034 BTC</p>
                  <p className="ml-24 w-fit text-[14px] text-gray-500/80">
                    + $37,929.31
                  </p>
                </div>

                {/* Status Button */}
                <div className="flex flex-row">
                  <button className="ml-20 px-1.5 py-0.5 bg-green-600 text-white h-fit m-1 p-1.5 rounded-2xl text-sm font-medium">
                    Completed
                  </button>
                </div>
                {/* Status Button */}
              </div>
              {/* 5th Individual Row */}

              {/* 6th Individual Row */}
              <div className="flex flex-row pb-4">
                <div className="flex flex-row">
                  <p className="ml-4 w-fit">HD82NA2H</p>
                </div>
                <div className="flex flex-col w-fit ml-22">
                  <p>2022-06-01</p>
                  <p className="text-[14px] text-gray-500/80">01:56 PM</p>
                </div>

                <div className="flex flex-col ml-30">
                  <p className="font-medium">BTC Withdraw</p>
                </div>

                <div className="flex flex-col">
                  <p className="ml-20 w-fit font-medium">- 10.00000000 BTC</p>
                  <p className="ml-20 w-fit text-[14px] text-gray-500/80">
                    - 62,017.58
                  </p>
                </div>

                {/* Status Button */}
                <div className="flex flex-row">
                  <button className="ml-22 px-1.5 py-0.5 bg-green-600 text-white h-fit m-1 p-1.5 rounded-2xl text-sm font-medium">
                    Completed
                  </button>
                </div>
                {/* Status Button */}
              </div>
              {/* 6th Individual Row */}
            </div>
            {/* Bigger Container */}
          </div>
          {/* 1st container */}
        </div>
        {/* Transactions Space */}
      </div>
    </div>
  );
};

export default Transaction;
