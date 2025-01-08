import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navOptions = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/menu">Our Menu</Link>
      </li>
      <li>
        <Link to="/orderFood">Order Food</Link>
      </li>
    </>
  );

  return (
    <div className="navbar max-w-[81.2rem] fixed z-10 bg-opacity-40 bg-[#151515] text-white">
      <div className="navbar-start  pr-40 ">
        <div className="dropdown">
          <div tabIndex="0" role="button" className="btn btn-ghost lg:hidden ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="0"
            className="menu menu-sm dropdown-content bg-base-100 text-black rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
        </div>
        <a className="text-white text-[25px] cinzel font-bold">
          <span className="whitespace-nowrap">Bistro Boss</span> <br />
          <span className="tracking-[0.3rem] font-thin text-xl">
            Restaurant
          </span>
        </a>
      </div>

      <div className="navbar-end inter">
        <div className="hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
