import React, { useState } from "react";
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import { AiOutlineSearch } from "react-icons/ai";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useUserStore from "../Store/userStore";
import AvatarDropDown from "./AvatarDropDown";

const NavBar = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const [menuState, setMenuState] = useState();

  return (
    <nav
      className={`w-screen bg-white sm:flex py-4 md:py-6 md:gap-24 gap-8 hidden`}
    >
      <div className="flex items-center content-center gap-4 md:gap-16">
        <NavLink className={"h-16 w-20 ml-2 md:ml-4"} to={"/"}>
          {" "}
          <img
            src={OrangeLogo}
            alt="FetchMate Logo"
            className="h-full w-full"
          />
        </NavLink>
        <ul className="flex justify-evenly text-xs md:text-base gap-4 md:gap-12">
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
          <li className="min-w-fit">
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
        </ul>
      </div>
      <div className="flex">
        <div className="flex items-center gap-0 md:gap-24">
          <div className="flex items-center content-center gap-2">
            <AiOutlineSearch size={20} className="inline text-xl relative" />
            <input
              className="bg-white h-full p-1 md:p-2 rounded-lg text-xs w-12 md:w-fit md:text-lg inline"
              type="search"
              name="search"
              placeholder="Search"
            />
          </div>
          <div className="flex gap-0 md:gap-32 items-center">
            {isLoggedIn ? (
              <NavLink to={"/cart"}>
                <FaCartShopping size={35} />
              </NavLink>
            ) : (
              <Link to="/login">
                <button
                  title="Login"
                  type="button"
                  className="focus:outline-none bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text-xs md:text-lg px-2 py-1 md:px-4 md:py-2 dark:focus:ring-yellow-900"
                >
                  Login
                </button>
              </Link>
            )}
            {isLoggedIn ? (
              <div
                onClick={() => setMenuState(!menuState)}
                className="cursor-pointer"
              >
                <div>
                  <FaUserAlt size={30} />
                </div>
                <AvatarDropDown displayState={menuState} />
              </div>
            ) : (
              <Link to="/signup">
                <button
                  type="button"
                  className="border-2 min-w-fit text-cyan-400 border-cyan-400 font-medium rounded-lg text-xs md:text-lg text-center border-b-4 active:border-b-2 px-2 py-1 md:px-4 md:py-2"
                >
                  Get Started
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
