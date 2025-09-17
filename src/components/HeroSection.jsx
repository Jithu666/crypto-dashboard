import btc from "../assets/btc.svg";
import inr from "../assets/inr.svg";
import { Link } from "react-router-dom";
import graph from "../assets/Graph.svg";
import infoLogo from "../assets/Info.svg";
import addIcon from "../assets/AddIcon.svg";
import upArrow from "../assets/UpArrow.svg";
import btcIcon from "../assets/btcIcon.svg";
import dollarIcon from "../assets/Dollar.svg";
import downArrow from "../assets/DownArrow.svg";
import gridShape from "../assets/gridShape.svg";
import greenArrow from "../assets/greenArrow.svg";
import removeIcon from "../assets/removeIcon.svg";

const Main = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-100 pr-13">
      <div className="flex flex-row max-w-fit h-24 ml-14 rounded-2xl bg-white p-4 pl-6 mt-4">
        {/* First Div */}
        <div className="flex flex-col space-x-16">
          <div className="flex flex-row pb-3">
            <p className="flex flex-row pr-1 font-semibold text-gray-950/45">
              Total Portfolio Value
            </p>
            <img src={infoLogo} alt="Info Logo" />
          </div>
          <div>
            <p className="flex flex-row font-semibold text-xl">
              &#8377; 112,312.84
            </p>
          </div>
        </div>
        {/* First Div */}

        {/* <div className="flex flex-col">
          <img src={verticalDivider} alt="" className="space-x-7" />
        </div> */}

        {/* Second Div */}
        <div className="flex flex-col space-x-16">
          <div className="flex flex-row pb-3">
            <p className="flex flex-row pr-1 font-semibold text-gray-950/45">
              Wallet Balances
            </p>
          </div>
          <div>
            <p className="flex flex-row font-semibold text-xl">
              22.3940199
              <img src={btc} alt="" className="ml-1" />
            </p>
          </div>
        </div>
        {/* Second Div */}

        {/* Third Div */}
        <div className="flex flex-col">
          <div className="flex flex-row pb-3">
            <p className="flex flex-row pr-1 font-semibold"></p>
          </div>
          <div>
            <p className="flex flex-row font-semibold text-xl mt-6 ml-2">
              &#8377; 1,300.00
              <img src={inr} alt="" className="ml-1 space-x-12" />
            </p>
          </div>
        </div>
        {/* Third Div */}

        {/* Fourth Div */}
        <div className="ml-22 mt-0 flex flex-row gap-6">
          <button className="bg-purple-800 text-white flex items-center px-4 py-0 h-8 rounded-md">
            <img src={downArrow} alt="" className="pr-1.5" />
            Deposit
          </button>
          {/* </div> */}

          {/* <div className="ml-6 mr-6 mt-2"> */}
          <button className="bg-purple-800 text-white flex items-center px-4 py-0 h-8 mr-2 rounded-md">
            <img src={upArrow} alt="" className="pr-1.5" />
            Withdraw
          </button>
        </div>
        {/* Fourth Div */}
      </div>

      {/* w-1/2 Container */}
      {/* Entire Div Container */}
      <div className="flex mt-4">
        {/* Inner Container */}
        <div className="flex flex-col bg-white ml-14 w-fit rounded-lg">
          {/* First Container */}
          <div className="flex flex-col pl-6">
            <div className="flex flex-row w-fit pt-2">
              <p className="font-medium text-sm text-gray-900/60 pt-2 pb-2">
                Current Price
              </p>
              {/* Buttons Container*/}
              <div className="flex flex-row ml-40 mt-2">
                <button className="flex flex-row mr-3 bg-purple-800 text-white max-w-fit max-h-fit items-center px-4 py-1.5 rounded-xl">
                  <img
                    src={addIcon}
                    alt="Add Icon"
                    className="flex items-center pr-1"
                  />
                  Buy
                </button>
                <button className="flex flex-row bg-purple-800 text-white max-w-fit max-h-fit items-center px-4 py-1.5 rounded-xl mr-3">
                  <img
                    src={removeIcon}
                    alt="Remove Icon"
                    className="flex items-center pr-1"
                  />
                  Sell
                </button>
              </div>
              {/* Buttons Container*/}
            </div>
            {/* Price and Price Change Container */}
            <div className="flex flex-row">
              <p className="text-xl font-medium">&#8377;26,670.25</p>
              <img src={greenArrow} alt="" className="ml-2" />
            </div>
            {/* Price and Price Change Container */}
            {/* </div> */}
          </div>
          {/* First Container */}

          {/* Second Container */}
          <div className="flex flex-row ml-76 bg-gray-100 text-sm rounded-md gap-2.5 w-fit h-6 items-center mt-2 mb-2 font-medium">
            <p className="ml-2 text-gray-900/50">1H</p>
            <p className="bg-white px-1.5 rounded-lg text-gray-900/50">1D</p>
            <p className="text-gray-900/50">1W</p>
            <p className="mr-2 text-gray-900/50">1M</p>
          </div>
          {/* Second Container */}

          {/* Third Container */}
          <div className="flex flex-col pl-5 pr-4 mt-10">
            <img src={graph} alt="Stock Chart" />
            {/*  */}
            <div className="flex flex-row justify-between">
              <p className="text-[10px] text-gray-800/80 tracking-wider">
                7:15 PM
              </p>
              <p className="text-[10px] text-gray-800/80 tracking-wider">
                12:55 AM
              </p>
              <p className="text-[10px] text-gray-800/80 tracking-wider">
                6:35 AM
              </p>
              <p className="text-[10px] text-gray-800/80 tracking-wider">
                12:15 PM
              </p>
              <p className="text-[10px] text-gray-800/80 tracking-wider">
                5:55 PM
              </p>
            </div>
            {/*  */}
          </div>
          {/* Third Container */}
        </div>
        {/* Inner Container ends here*/}

        {/* Transactions Container.*/}
        <div className="flex flex-col ml-6 bg-white rounded-lg">
          {/* Recent Transactions Container */}
          <div className="flex flex-col pl-6 pt-4 pb-4">
            <p className="tracking-wide font-medium text-shadow-gray-500 mb-2">
              Recent Tranactions
            </p>
          </div>
          {/* Recent Transactions Container */}

          {/* Transaction 1 */}
          <div className="flex flex-row pl-6 mb-6">
            <div className="flex flex-row">
              <img src={dollarIcon} alt="" className="w-auto h-auto pr-2" />
              <div className="flex flex-col pl-0">
                <p className="font-sans font-normal">INR Deposit</p>
                <p className="pr-24">2022-06-09 7:06 PM</p>
              </div>
            </div>
            <div className="flex felx-row font-medium pl-8 pr-4">
              + &#8377; 81,123.10
              <hr />
            </div>
          </div>
          {/* Transaction 1 */}

          {/* Transaction 2 */}
          <div className="flex flex-row pl-6 mb-6">
            <div className="flex flex-row">
              <img src={btcIcon} alt="" className="w-auto h-auto pr-2" />
              <div className="flex flex-col pl-0">
                <p className="font-sans font-normal">BTC Sell</p>
                <p className="pr-18">2022-06-09 7:06 PM</p>
              </div>
            </div>
            {/*  */}
            <div className="flex flex-col">
              <div className="flex flex-row font-medium pr-6">
                - 12.48513391 BTC10
              </div>
              <div className="flex flex-col pr-4 pl-18 text-sm font-light">
                + &#8377; 81,123.10
              </div>
            </div>

            {/*  */}
          </div>
          {/* Transaction 2 */}

          {/* Transaction 3 */}
          <div className="flex flex-row pl-6 mb-6">
            <div className="flex flex-row">
              <img src={dollarIcon} alt="" className="w-auto h-auto pr-2" />
              <div className="flex flex-col pl-0">
                <p className="font-sans font-normal">INR Deposit</p>
                <p className="pr-24">2022-06-09 7:06 PM</p>
              </div>
            </div>
            <div className="flex flex-row font-medium pr-4 pl-6">
              + &#8377; 81,123.10
            </div>
          </div>
          {/* Transaction 3 */}

          {/* View All */}
          <div className="flex flex-col pl-6 pr-6 pb-4">
            <Link to="/transactions">
              <p className="flex justify-center font-medium bg-gray-100 rounded-lg py-1">
                View All
              </p>
            </Link>
          </div>
          {/* View All */}
        </div>
        {/* Transactions Container ends here.*/}
      </div>
      {/* Outer Div Container */}

      {/*  */}
      <div className="flex flex-row">
        {/* Loans Container */}
        <div className="flex flex-row bg-white rounded-lg mt-4 ml-14 mb-4 w-fit">
          {/*  */}
          <div className="flex flex-col">
            <button className="flex items-center font-medium bg-purple-800 text-white w-fit m-4 rounded-2xl text-sm px-1 py-0.5">
              Loans
            </button>
            <p className="pl-4 pr-29 mb-2 font-medium">
              Learn more about Loans – Keep your Bitcoin,
              <br /> access it’s value without selling it
            </p>
          </div>
          {/*  */}
        </div>
        {/* Loans Container */}
        {/* Contact Container */}
        <div className="flex flex-row bg-purple-800/95 rounded-lg mt-4 ml-6 mb-4 w-fit">
          {/*  */}
          <div className="flex flex-col">
            <button className="flex items-center font-medium bg-white/100 text-purple-800/80 w-fit m-4 rounded-2xl text-sm px-1 py-0.5">
              Contact
            </button>
            <p className="pl-4 pr-29 mb-4 font-medium text-white">
              Learn more about Loans – Keep your Bitcoin,
              <br /> access it’s value without selling it
            </p>
          </div>
          {/*  */}
        </div>{" "}
        {/* Contact Container */}
      </div>
      {/*  */}
      {/* w-1/2 Container */}
    </div>
  );
};

export default Main;
