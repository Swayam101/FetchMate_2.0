import React, { useState } from "react";
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping, FaLocationPinLock } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useUserStore from "../Store/userStore";
import AvatarDropDown from "./AvatarDropDown";

const NavBar = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const [menuState,setMenuState]=useState()

  return (
    <nav
      className={` bg-white z-50 mynav hidden p-4 px-16 sm:flex sticky items-center top-0 `}
    >
      <div className="nav-left sm:flex items-center w-6/12 justify-between">
        <NavLink to={"/"}>
          {" "}
          <img src={OrangeLogo} alt="FetchMate Logo" className="h-16 w-16" />
        </NavLink>
        <ul className="flex pt-2 basis-4/5 justify-evenly content-center text-base">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-black"}`
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/pet-sitter"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-black"}`
              }
            >
              Pet Sitter
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : "text-black"}`
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : ""}`
              }
            >
              Shop
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/community"}
              className={({ isActive }) =>
                `${isActive ? "text-yellow-400" : ""}`
              }
            >
              Community
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="nav-right  w-6/12 flex justify-end">
        <div className="nav-right-inner w-4/5 pt-2 h-full flex justify-around items-center">
          <div className="search-input">
            <AiOutlineSearch className="inline text-xl relative right-2 bottom-1" />
            <input
              className="bg-white h-full p-2 rounded-lg text-lg inline"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          {isLoggedIn ? (
            <NavLink to={"/cart"}><FaCartShopping size={35}/></NavLink>
          ) : (
            <Link to="/login">
              <button
                title="Login"
                style={{ marginRight: "4.5%" }}
                type="button"
                className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text px-4 py-2 dark:focus:ring-yellow-900"
              >
                Login
              </button>
            </Link>
          )}
          {isLoggedIn ? (
            <button  onClick={()=>setMenuState(!menuState)}>
              <div ><FaUserAlt size={30} /></div>
              <AvatarDropDown displayState={menuState} />
            </button>
          ) : (
            <Link to="/signup">
              <button
                style={{ padding: "1.65% 2.5%" }}
                type="button"
                className="border-2 text-cyan-400 border-cyan-400 font-medium rounded-lg text-sm text-center border-b-4 active:border-b-2"
              >
                Get Started
              </button>
            </Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
