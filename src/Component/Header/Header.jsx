import React from "react";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

const Header = () => {
  return (
    <div className="bg-[url('/images/header.svg')] bg-cover bg-center text-white py-10 px-6">
      <div className="w-full max-w-[1200px] mx-auto bg-white text-black px-6 flex flex-col md:flex-row justify-between items-center rounded-xl py-4 gap-4 md:gap-0">
        {/* Logo */}
        <div>
          <h1 className="text-blue-600 text-3xl md:text-4xl font-bold">instant pay</h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6 font-medium text-gray-800 text-lg">
            {["Products", "Solution", "Developer's Hub", "Company", "Our Blog"].map((item, index) => (
              <li key={index} className="flex items-center gap-1 cursor-pointer hover:text-blue-600 transition">
                {item} <MdOutlineKeyboardArrowDown />
              </li>
            ))}
          </ul>
        </nav>

        {/* Buttons */}
        <div className="flex flex-row gap-4 mt-2 md:mt-0">
          <button className="px-6 py-2 border border-gray-300 rounded-lg text-gray-800 font-medium hover:bg-gray-100 transition">
            Login
          </button>
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition">
            Signup
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
