import React from 'react'
import { AiOutlineInstagram,AiOutlineTwitter,AiFillLinkedin } from 'react-icons/ai';
import OrangeLogo from "../assets/FETCHMATE LOGO/OrangeLogo.png";
import {Link} from 'react-router-dom'

const Footer = () => {
  return (
    <div className='h-2/5 sm:justify-around sm:flex sm:flex-row grid grid-cols-2 grid-rows-3 sm:p-10 bg-[#fff6e9]'>
      <div className="footer-1 col-span-2 flex sm:flex-col items-center justify-between grow-1">
        <img src={OrangeLogo} alt="Fetchmate Logo"  className="h-36"/>
        <span className='font-medium'>&#169; 2023 Fetchmate</span>
      </div>
      <div className="footer-2 flex flex-col justify-around ">
        <div className="footer-subheading font-medium text-xl">Services</div>
        <ul className='text-base basis-4/5 flex flex-col justify-around'>
            <li>Pet Day care</li>
            <li>Dog Walking</li>
            <li>Over Night Stay</li>
            <li>Doctors Visit</li>
        </ul>
      </div>
      <div className="footer-3 flex flex-col justify-between">
      <div className="footer-subheading font-medium text-xl">Know Us More</div>
        <ul className='text-base basis-4/5 flex flex-col justify-around '>
            <li>About</li>
            <li><Link to={"https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/terms"}>Terms Of Service</Link></li>
            <li><Link to={"https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/privacy"}>Privacy Policy</Link></li>
        </ul>
      </div>
      <div className="footer-4 flex flex-col justify-center ">
      <ul className='text-base flex flex-col justify-around basis-4/5 sm:self-start'>
            <li><Link to={"https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/refund"}>Cancellation And Refund</Link></li>
            <li><Link to={"https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/shipping"}>Shipping And Delivery</Link></li>
            <li><Link to={"https://merchant.razorpay.com/policy/N5PQq0a54C6mpm/contact_us"}>Contact Us</Link></li>
        </ul>
      </div>
      <div className="footer-5 flex flex-col justify-evenly text-2xl grow-1">
        <div className='flex flex-col font-medium text-xl'>Follow Us:</div>
        <ul className='flex self-start justify-evenly'>
            <li><AiOutlineInstagram className=''/></li>
            <li><AiOutlineTwitter/></li>
            <li><AiFillLinkedin/></li>
        </ul>
        </div>  
    </div>
  )
}

export default Footer
