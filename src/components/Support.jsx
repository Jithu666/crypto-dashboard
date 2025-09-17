import { useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../assets/Email.svg";
import chatIcon from "../assets/ChatIcon.svg";

const Support = () => {
  const [formData, setFormData] = useState({
    name: "",
    surname: "",
    email: "",
    message: "",
    tnc: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleClear = () => {
    setFormData({
      name: "",
      surname: "",
      email: "",
      message: "",
      tnc: false,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted", formData);
    handleClear();
  };

  return (
    <div className="flex flex-row h-screen bg-gray-100">
      {/* Text Container */}
      <div className="flex flex-col max-w-fit ml-14 mr-14 p-4 pl-6 mt-4 pb-10">
        <div className="flex flex-row w-fit">
          <img
            src={emailIcon}
            alt=""
            className="flex flex-row w-6 h-6 mt-1 items-center"
          />
          <h1 className="flex flex-row text-2xl font-medium ml-2">
            Contact-us
          </h1>
        </div>
        <div className="flex flex-col">
          <p className="font-sans text-[12px]">
            Have a question or just want to know more? Feel free to <br /> reach
            out to us.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-row w-fit pt-96">
          <img src={chatIcon} alt="" className="flex flex-row pb-2 mt-1" />
          <h1 className="flex flex-col text-2xl font-medium ml-2">Live Chat</h1>
        </div>
        <div className="flex flex-col">
          {/* <h1 className="flex flex-col text-3xl font-medium">Live Chat</h1> */}
          <p className="font-sans text-[12px]">
            Don’t have time to wait for the answer? Chat with us now.
          </p>
        </div>
        {/* Bottom Section */}
      </div>
      {/* Text Container Ends Here*/}

      {/* Contact-Form */}
      <div className="flex flex-col">
        <div className="flex flex-col max-w-fit ml-4 p-4 pl-6 mt-4 bg-white rounded-2xl max-h-fit">
          <p className="text-[12px] font-medium">
            You will receive response within 24 hours of time of submit.
          </p>
          <div className="flex mb-2">
            <form method="POST" onSubmit={handleSubmit}>
              {/* First Container */}
              <div className="flex flex-row mt-2">
                <div className="flex flex-col text-sm">
                  <label htmlFor="name" className="font-medium pb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="border border-gray-400/55 rounded-md px-4 text-gray-400 py-1"
                    placeholder="James"
                  />
                </div>
                <div className="flex flex-col text-sm ml-8">
                  <label htmlFor="surname" className="font-medium pb-2">
                    Surname
                  </label>
                  <input
                    type="text"
                    id="surname"
                    name="surname"
                    value={formData.surname}
                    onChange={handleChange}
                    className="border border-gray-400/55 rounded-md px-4 text-gray-400 py-1"
                    placeholder="Arthur"
                  />{" "}
                </div>
              </div>
              {/* First Container */}

              {/* Second Container */}
              <div className="flex flex-col mt-4">
                <label htmlFor="email" className="font-medium pb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="name@gmail.com"
                  className="border border-gray-400/55 rounded-md px-4 text-gray-400 py-1"
                />
              </div>
              {/* Second Container */}

              {/* Third Container */}
              <div className="flex flex-col mt-4">
                <label htmlFor="message" className="font-medium pb-2">
                  Message
                </label>
                <textarea
                  type="text"
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Your Message"
                  className="border border-gray-400/55 rounded-md px-4 text-gray-400 py-1"
                />
              </div>
              {/* Third Container */}

              {/* Fourth Container */}
              <div className="flex flex-col mt-4">
                <div className="flex flex-row">
                  <input
                    type="checkbox"
                    id="tnc"
                    name="tnc"
                    value={formData.tnc}
                    onChange={handleChange}
                    className="border-gray-500 ml-1"
                  />
                  <label htmlFor="" className="ml-2">
                    I agree with
                    <Link to="/" className="text-purple-700">
                      {" "}
                      Terms & Conditions.
                    </Link>
                  </label>
                </div>
              </div>
              {/* Fourth Container */}

              {/* Buttons Container */}
              <div className="flex flex-col mt-4">
                <div className="flex flex-row">
                  <button
                    className="bg-gray-500/50 w-full py-1 rounded-md text-gray-500 font-medium"
                    type="submit"
                  >
                    Send a Message
                  </button>
                </div>
                <div className="flex flex-row mt-4">
                  <button className="bg-gray-200 w-full py-1 rounded-md text-black font-medium">
                    Book a Meeting
                  </button>
                </div>
              </div>
              {/* Buttons Container */}
            </form>
          </div>
        </div>
        {/* Chat Container */}
        <div className="flex flex-row bg-purple-800/95 rounded-lg mt-4 ml-4 mb-4 w-fit">
          {/*  */}
          <div className="flex flex-col">
            <button className="flex items-center font-medium bg-white/100 text-purple-800/80 w-fit m-4 rounded-2xl text-sm px-1 py-0.5">
              Chatbot
            </button>
            <p className="pr-80 ml-4 mb-4 font-medium text-white">
              Chat with us now.
            </p>
          </div>
          {/*  */}
        </div>{" "}
        {/* Chat Container */}
      </div>
    </div>
  );
};

export default Support;
