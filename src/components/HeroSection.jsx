import btc from "../assets/btc.svg";
import inr from "../assets/inr.svg";
import infoLogo from "../assets/Info.svg";
import upArrow from "../assets/UpArrow.svg";
import downArrow from "../assets/DownArrow.svg";
// import verticalDivider from "../assets/VerticalLine.svg";
import greenArrow from "../assets/greenArrow.svg";
import addIcon from "../assets/AddIcon.svg";
import removeIcon from "../assets/removeIcon.svg";
import tabs from "../assets/Tabs.svg";

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

        {/* <div className="flex flex-col">
          <img src={verticalDivider} alt="" className="space-x-7" />
        </div> */}

        {/* Second Div */}
        <div className="flex flex-col space-x-14">
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
            <p className="flex flex-row font-semibold text-xl mt-6">
              &#8377; 1,300.00
              <img src={inr} alt="" className="ml-1" />
            </p>
          </div>
        </div>
        {/* Third Div */}

        {/* Fourth Div */}
        <div className="ml-20 mt-2 flex flex-row gap-6">
          <button className="bg-purple-800 text-white flex items-center px-4 py-0 h-8 rounded-md">
            <img src={downArrow} alt="" className="pr-1.5" />
            Deposit
          </button>
          {/* </div> */}

          {/* <div className="ml-6 mr-6 mt-2"> */}
          <button className="bg-purple-800 text-white flex items-center px-4 py-0 h-8 rounded-md">
            <img src={upArrow} alt="" className="pr-1.5" />
            Withdraw
          </button>
        </div>
        {/* Fourth Div */}
      </div>

      {/* w-1/2 Container */}
      <div className="flex flex-row mt-6 ml-14 bg-white p-4 pl-6 rounded-2xl w-fit">
        <div className="flex flex-col space-x-14">
          <div className="flex flex-row pb-3">
            <p className="flex flex-row pr-1 font-semibold text-gray-950/45">
              Current Price
            </p>
          </div>
          <div>
            <p className="flex flex-row font-semibold text-xl">
              &#8377;26,670.25
              <img src={greenArrow} alt="" className="ml-2" />
            </p>
          </div>
        </div>

        <div className="ml-20 mt-2 flex flex-row gap-6">
          <button className="bg-purple-800 text-white flex items-center px-4 py-0 h-8 rounded-md">
            <img src={addIcon} alt="Addition Icon" className="pr-1.5" />
            Buy
          </button>

          <button className="bg-purple-800 text-white flex items-center px-4 py-0 h-8 rounded-md">
            <img src={removeIcon} alt="Subtraction icon" className="pr-1.5" />
            Sell
          </button>
        </div>

        <div className="flex flex-col">
          <div className="flex flex-row">
            <img src={tabs} alt="" />
          </div>
        </div>
      </div>

      {/* w-1/2 Container */}
    </div>
  );
};

export default Main;
