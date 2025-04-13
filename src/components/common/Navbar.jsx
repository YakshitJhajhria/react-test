import React, { useState } from "react";
import { MenuIcon, TelegeramIcon, XIcon } from "./Icons";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <nav className="max-w-[1440px] mt-4 sm:mt-[27px] w-full flex items-center justify-between px-4 md:px-10 lg:px-16 xl:px-20 mx-auto">
      <a href="/">
        <img
          src="/images/png/logo.png"
          alt="logo"
          className="w-[36px] sm:w-[56px] lg:w-[76px] h-[46px] sm:h-[76px] lg:h-[100px]"
        />
      </a>
      <div className="flex items-center justify-end gap-4 sm:gap-8">
        <div className="flex items-center max-md:hidden gap-8">
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
        </div>
        <button className="bg-secondary max-sm:hidden flex items-center justify-center h-[60px] w-[149px] duration-300 hover:bg-opacity-80 rounded-[8px] font-luckiest font-normal leading-[100%] text-xl">
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
        <button
          type="submit"
          className="md:hidden hover:scale-110 transition duration-300 ease-in-out"
          onClick={handleNavbar}
        >
          <MenuIcon />
        </button>
      </div>
      <div
        className={`absolute md:hidden w-full top-0 duration-300 h-screen ${
          navbar ? "left-0" : "left-[-150%]"
        }`}
      >
        <Sidebar handleNavbar={handleNavbar} />
      </div>
    </nav>
  );
};

export default Navbar;
