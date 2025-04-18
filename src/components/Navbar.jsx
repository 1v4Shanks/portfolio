import React, { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleNavbarClose = () => {
    setOpenMenu(false);
  };
  return (
    <div className="relative xl:hidden h-[60px] shadow-sm bg-white px-[1rem] py-[10px] flex justify-between items-center">
      <h2 className="inlin-block tracking-widest font-bold text-3xl">
        Portfolio
      </h2>

      <div
        className="w-[2.5rem] h-full px-[5px] py-[7px] flex flex-col justify-between cursor-pointer"
        role="button"
        onClick={() => setOpenMenu(!openMenu)}
      >
        <div
          className={`w-full h-[2px] bg-black transition-all duration-300 ease-in-out ${
            openMenu ? "move-down" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-black/70 transition-all duration-300 ease-in-out ${
            openMenu ? "disappear" : ""
          }`}
        ></div>
        <div
          className={`w-full h-[2px] bg-black transition-all duration-300 ease-in-out ${
            openMenu ? "move-up" : ""
          }`}
        ></div>
      </div>

      <ul
        className={`fixed top-[59px] right-0 bg-white w-[55%] h-screen flex flex-col   items-end gap-3 px-[1rem] py-[3rem] z-50 transition-all duration-300 ease-in-out transform ${
          openMenu ? "translate-x-0" : "translate-x-full"
        } `}
      >
        <li onClick={handleNavbarClose}>
          <NavLink to="/" className="nav-link">
            <p className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block">
              Home
            </p>
          </NavLink>
        </li>

        <li onClick={handleNavbarClose}>
          <NavLink to="/projects" className="nav-link">
            <p className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block">
              Projects
            </p>
          </NavLink>
        </li>

        <li onClick={handleNavbarClose}>
          <NavLink to="/about" className="nav-link">
            <p className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block">
              About
            </p>
          </NavLink>
        </li>

        <li onClick={handleNavbarClose}>
          <NavLink to="/contact" className="nav-link">
            <p className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block">
              Contact
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
