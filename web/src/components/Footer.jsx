import React from "react";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import { Link } from "react-router-dom";
import { IoPaw } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-white to-[#fff6e9] pt-12 pb-8">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <div className="flex flex-col items-center md:items-start">
            <img src={OrangeLogo} alt="Fetchmate Logo" className="h-24 mb-4" />
            <p className="text-gray-600 text-sm text-center md:text-left">
              Your trusted partner in pet care and products. Making pet parenting easier, one step at a time.
            </p>
            <div className="flex items-center gap-2 mt-4">
              <IoPaw className="text-[#FF9F1C]" />
              <span className="text-gray-600 text-sm">&#169; 2023 Fetchmate</span>
            </div>
          </div>

          {/* Services Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Pet Day Care
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Dog Walking
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Over Night Stay
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Doctors Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/terms" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/privacy" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Support Section */}
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link to="https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/refund" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Cancellation & Refund
                </Link>
              </li>
              <li>
                <Link to="https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/shipping" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Shipping & Delivery
                </Link>
              </li>
              <li>
                <Link to="https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/contact_us" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-center gap-4 pt-8 border-t border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900">Follow Us</h3>
          <div className="flex items-center gap-6">
            <a href="#" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
              <AiOutlineInstagram size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
              <AiOutlineTwitter size={24} />
            </a>
            <a href="#" className="text-gray-600 hover:text-[#FF9F1C] transition-colors">
              <AiFillLinkedin size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
