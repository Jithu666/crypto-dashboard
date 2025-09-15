import btc from "../assets/btc.svg";
import inr from "../assets/inr.svg";
import infoLogo from "../assets/Info.svg";
import upArrow from "../assets/UpArrow.svg";
import downArrow from "../assets/DownArrow.svg";
import verticalDivider from "../assets/VerticalLine.svg";

const Main = () => {
  return (
    <div className="flex flex-col flex-1 bg-gray-100">
      <div className="flex flex-row max-w-fit h-24 ml-14 rounded-2xl bg-white p-4 pl-6 mt-10">
        {/* First Div */}
        <div className="flex flex-col space-x-14">
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

        <div className="flex flex-col space-x-7">
          <img src={verticalDivider} alt="" />
        </div>

        {/* Second Div */}
        <div className="flex flex-col space-x-24">
          <div className="flex flex-row pb-3">
            <p className="flex flex-row pr-1 font-semibold text-gray-950/45">
              Wallet Balances
            </p>
          </div>
          <div>
            <p className="flex flex-row font-semibold text-xl">
              &#8377; 22.3940199
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
            <p className="flex flex-row font-semibold text-xl mt-6">
              &#8377; 1,300.00
              <img src={inr} alt="" className="ml-1" />
            </p>
          </div>
        </div>
        {/* Third Div */}

        {/* Fourth Div */}
        <div className="ml-20">
          <button className="bg-purple-800 text-white flex items-center px-2 py-1 rounded-xl">
            <img src={downArrow} alt="" />
            Deposit
          </button>
        </div>

        <div className="ml-6 mr-6">
          <button className="bg-purple-800 text-white flex items-center px-2 py-1 rounded-xl">
            <img src={upArrow} alt="" />
            Withdraw
          </button>
        </div>
        {/* Fourth Div */}
      </div>
    </div>
  );
};

export default Main;
