import React, { useState } from "react";
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useUserStore from "../Store/userStore";
import AvatarDropDown from "./AvatarDropDown";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "../index.css";

const MobileNavbar = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const [menuState, setMenuState] = useState(false);

  const handleHamburgerClick = () => {
    setMenuState(!menuState);
  };

  return (
    <nav
      className={`sm:hidden flex flex-col max-w-screen mb-4 ${
        menuState ?? "fade-in-left"
      }`}
    >
      <div className="flex flex-col w-full">
        {menuState ? (
          <IoMdClose
            size={30}
            stroke={20}
            className={`self-end  m-4`}
            onClick={handleHamburgerClick}
          />
        ) : (
          <GiHamburgerMenu
            size={26}
            style={{ strokeWidth: 1 }}
            className={`self-end m-4`}
            onClick={handleHamburgerClick}
          />
        )}
        <div className="flex justify-end">
          <NavLink
            className={`w-screen mt-0 ${!menuState && "hidden"}`}
            to={"/"}
          >
            <img
              src={OrangeLogo}
              alt="FetchMate Logo"
              className="h-auto w-40 mx-auto py-4"
            />
          </NavLink>
        </div>
        <ul
          className={`${
            !menuState ? "hidden" : "flex"
          } flex-col pt-2 w-full text-xl gap-6 px-2 text-center`}
        >
          <li className="mt-2">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-400" : "text-black"
                }  border-b-black border-b-[1px]`
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink
              to={"/pet-sitter"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-400" : "text-black"
                }  border-b-black border-b-[1px]`
              }
            >
              Pet Sitter
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink
              to={"/services"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-400" : "text-black"
                }  border-b-black border-b-[1px]`
              }
            >
              Services
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink
              to={"/shop"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-400" : ""
                }  border-b-black border-b-[1px]`
              }
            >
              Shop
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink
              to={"/community"}
              className={({ isActive }) =>
                `${
                  isActive ? "text-yellow-400" : ""
                } border-b-black border-b-[1px]`
              }
            >
              Community
            </NavLink>
          </li>
        </ul>
      </div>
      <div className={`${!menuState ? "hidden" : "flex"} flex-col w-full mt-4`}>
        <div className="pt-2 h-full flex flex-col justify-around items-center">
          <div className="flex flex-col gap-10 mt-4 items-center content-center w-full justify-evenly">
            {isLoggedIn ? (
              <NavLink to={"/cart"}>
                <FaCartShopping size={35} />
              </NavLink>
            ) : (
              <Link to="/login">
                <button
                  title="Login"
                  type="button"
                  className="focus:outline-none h-full w-32 bg-yellow-400 hover:bg-yellow-500 font-medium rounded-lg text px-4 py-2 dark:focus:ring-yellow-900"
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
                  className="border-2 text-cyan-400 py-2 px-1 border-cyan-400 rounded-lg text-sm min-w-32 text-center active:border-b-2"
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

export default MobileNavbar;
