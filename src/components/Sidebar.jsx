import React from "react";
import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="hidden fixed top-0 left-0 xl:flex flex-col  justify-center gap-15 w-[350px] h-screen bg-white px-[70px] border-r border-black/10">
      <h2
        className="inlin-block tracking-widest font-bold text-4xl"
        onMouseEnter={() => document.body.classList.add("cursor-hover")}
        onMouseLeave={() => document.body.classList.remove("cursor-hover")}
      >
        Portfolio
      </h2>
      <ul className="flex flex-col gap-1">
        <li>
          <NavLink to="/" className="nav-link">
            <p
              className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block"
              onMouseEnter={() => document.body.classList.add("cursor-hover")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-hover")
              }
            >
              Home
            </p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/projects" className="nav-link">
            <p
              className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block"
              onMouseEnter={() => document.body.classList.add("cursor-hover")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-hover")
              }
            >
              Projects
            </p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/about" className="nav-link">
            <p
              className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block"
              onMouseEnter={() => document.body.classList.add("cursor-hover")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-hover")
              }
            >
              About
            </p>
          </NavLink>
        </li>

        <li>
          <NavLink to="/contact" className="nav-link">
            <p
              className="text-[1.2rem] text-black opacity-60 hover:opacity-100 inline-block"
              onMouseEnter={() => document.body.classList.add("cursor-hover")}
              onMouseLeave={() =>
                document.body.classList.remove("cursor-hover")
              }
            >
              Contact
            </p>
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
