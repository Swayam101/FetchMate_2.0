import React, { useState } from "react";
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import { FaCartShopping } from "react-icons/fa6";
import { FaUserAlt } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import useUserStore from "../Store/userStore";
import useCartStore from "../Store/cartStore";
import AvatarDropDown from "./AvatarDropDown";
import { IoPaw } from "react-icons/io5";

const NavBar = () => {
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const cartCount = useCartStore((state) => state.cart.length);
  const [menuState, setMenuState] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-sm border-b border-gray-100 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink to="/" className="flex items-center gap-2">
            <img src={OrangeLogo} alt="FetchMate Logo" className="h-10" />
            <span className="text-xl font-bold text-gray-900">FetchMate</span>
          </NavLink>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-[#FF9F1C]" : "text-gray-600 hover:text-[#FF9F1C]"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/pet-sitter"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-[#FF9F1C]" : "text-gray-600 hover:text-[#FF9F1C]"
                }`
              }
            >
              Pet Sitter
            </NavLink>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-[#FF9F1C]" : "text-gray-600 hover:text-[#FF9F1C]"
                }`
              }
            >
              Services
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors ${
                  isActive ? "text-[#FF9F1C]" : "text-gray-600 hover:text-[#FF9F1C]"
                }`
              }
            >
              Shop
            </NavLink>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-6">
            {isLoggedIn ? (
              <NavLink to="/cart" className="relative group">
                <FaCartShopping className="text-gray-600 group-hover:text-[#FF9F1C] transition-colors" size={24} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 bg-[#FF9F1C] text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </NavLink>
            ) : (
              <Link to="/login">
                <button className="text-sm font-medium text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Login
                </button>
              </Link>
            )}
            {isLoggedIn ? (
              <div className="relative">
                <button
                  onClick={() => setMenuState(!menuState)}
                  className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <FaUserAlt className="text-gray-600" size={20} />
                </button>
                <AvatarDropDown displayState={menuState} />
              </div>
            ) : (
              <Link to="/signup">
                <button className="bg-[#FF9F1C] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#e68f1a] transition-colors flex items-center gap-2">
                  <IoPaw />
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
