import React from "react";
import { CloseIcon, TelegeramIcon, XIcon } from "./Icons";

const Sidebar = ({ handleNavbar }) => {
  return (
    <aside className="w-full sm:w-1/2 flex flex-col bg-black items-center justify-between p-6">
      <div className="flex w-full items-center justify-between gap-5">
        <a href="/">
          <img
            src="/images/png/logo.png"
            alt="logo"
            className="w-[36px] sm:w-[56px] lg:w-[76px] h-[46px] sm:h-[76px] lg:h-[100px]"
          />
        </a>
        <button
          onClick={handleNavbar}
          className="hover:rotate-180 transition duration-300 ease-in-out"
        >
          <CloseIcon />
        </button>
      </div>
      <div className="flex flex-col items-center mt-8 justify-end gap-8">
        <a
          href="/"
          className="font-inter text-sm font-normal leading-normal hover:text-primary duration-300"
        >
          WHITEPAPER
        </a>
        <a
          href="/"
          className="font-inter text-sm font-normal leading-normal hover:text-primary duration-300"
        >
          ACCOUNT LOGIN
        </a>
        <button className="bg-secondary flex items-center justify-center h-[60px] w-[149px] duration-300 hover:bg-opacity-80 rounded-[8px] font-luckiest font-normal leading-[100%] text-xl">
          GET TOKENS
        </button>
        <div className="flex items-center gap-2">
          <a
            href="/"
            target="_blank"
            className="w-7 sm:w-10 h-7 sm:h-10 hover:bg-opacity-80 flex items-center justify-center rounded bg-secondary duration-300"
          >
            <XIcon />
          </a>
          <a
            href="/"
            target="_blank"
            className="w-7 sm:w-10 h-7 sm:h-10 hover:bg-opacity-80 flex items-center justify-center rounded bg-secondary duration-300"
          >
            <TelegeramIcon />
          </a>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
