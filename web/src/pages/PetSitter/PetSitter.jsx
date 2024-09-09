import React, { useEffect, useState } from "react";
import PetSitter1 from "../../assets/petSitter1.png";
import Jhamela from "../../assets/jhamela.png";

import axios from '../../utils/axiosConfig'
import useUserStore from "../../Store/userStore";
import { toast } from "react-toastify";
import PetSitterLoggedIn from './PetSitterLoggedIn'


const PetSitter = () => {

  const observer=new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
      if(entry.isIntersecting) entry.target.classList.add('animate-appear')
      else entry.target.classList.remove('animate-appear')
    })
  })

  const appearers=document.querySelectorAll('.anim')
  appearers.forEach((el)=>observer.observe(el))

  const token=useUserStore((state)=>state.jwtToken)
  const isLoggedIn=useUserStore((state)=>state.isLoggedIn)
  const setUserData=useUserStore((state)=>state.setUserData)
  const isPetSitter=useUserStore((state)=>state.isPetSitter)

  if(isPetSitter) return <PetSitterLoggedIn/>


  const handleBecomePetSitter=async (e)=>{
    e.preventDefault()
    if(!isLoggedIn){
      toast.error("Kindly Login To Proceed!")
      return
    }
    const decision=confirm("Do You Really Wanna Become A Pet Sitter?")
    if(!decision) return;
   try {
    const response= await axios({
      url:"/auth/be-petsitter",
      method:"POST",
      headers:{
        Authorization:`Bearer ${token}`
      }
    })
    if(!response.data.status) throw new Error(response.data.message)
    setUserData(response.data.newUser)
    toast.success("Congratulations You're Now A Pet Sitter")

   } catch (error) {
    toast.error(error.message)
   }
  }
  

  return (
    <div className="pt-20 sm:px-40 " initial={{opacity:"0"}}>
      <div className="flex justify-between ">
        <div className="realtive h-72">
          <img className="z-10 relative" src={PetSitter1} alt="" />
          <div className=" bg-[#FFBF69] triangle"></div>
          <div className=" bg-[#2EC4B6] triangle triangle2"></div>
        </div>
        <div className="w-6/12 flex flex-col gap-8">
          <div className="text-4xl font-medium text-[#2EC4B6] text-center">
            Befriend Another furry Mate
          </div>
          <div className="text-xl text-center">
            Step into the heart-warming role of a fetchmate pet sitter. embrace
            pet care, create joyful moments, and earn. Start todaty and make a
            difference in a pet's life
          </div>
          <div className="text-center">
            <button onClick={handleBecomePetSitter} className="bg-[#CBF3F0] hover:bg-cyan-200 text-xl font-medium p-4 rounded-lg">
              Become Pet Sitter
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-around bg-[#CBF3F0] p-16 text-xl font-medium rounded-lg border-4 border-gray-300">
        <div>
          <div>Over 250+</div>
          <div>Fetcmate registered Pet sitter</div>
        </div>
        <div>
          <div>Our Pet Sitter</div>
          <div>Earn Rs. 250-300/hrs </div>
        </div>
      </div>


          {/* Pet Sitting Page Decor */}

      <div className="mt-16 h-screen">
        <div className="text-2xl font-medium text-center text-[#2EC4B6]">
          Embark on your pet sitting journey
        </div>
        <div className="w-full grid grid-cols-2 grid-rows-2 mt-20 ">
          {/* first */}
          <div className="z-x2 h-72 relative top-6 border-[#FF9F1C] border-t-3 border-l-3 border-b-3 flex flex-col justify-evenly py-12">
            <div className="mx-16 text-xl font-bold">
              <span className="text-2xl text-[#FF9F1C]">4.</span> Get Paid For Sitting Pets
            </div>
            <div className="mx-16 pr-32 font-medium text-gray-400">
              Your passion for pets is now our paycheck. Recieve your
              well-earned compensation and cherish the furr moments
            </div>
            <div style={{left:"420px",top:"265px",zIndex:"2"}} className="h-8 w-8 absolute rounded-full bg-[#FF9F1C]"></div>
          </div>
          {/* second */}
          <div className="z-x2 h-72 relative bottom-6 border-[#FF9F1C] border-3 flex flex-col justify-evenly py-12">
          <div className=" ml-48 text-xl font-bold">
              <span className="text-2xl text-[#FF9F1C]">1.</span> Sign Up as a Pet Sitter
            </div>
            <div className="ml-48 mr-8  font-medium text-gray-400">
              Your passion for pets is now our paycheck. Recieve your
              well-earned compensation and cherish the furr moments
            </div>
            <div style={{right:"438px",top:"265px",zIndex:"100"}} className="h-8 w-8 absolute rounded-full bg-[#FF9F1C]"></div>
            <div style={{right:"17px",bottom:"90px",zIndex:"100"}} className="h-8 w-8 relative rounded-full bg-[#FF9F1C]"></div>
          </div>
          {/* third */}
          <div className="z-x2 border-[#FF9F1C] border-l-3 border-b-3 border-r-3 flex flex-col justify-evenly py-12">
          <div className="mx-16 text-xl font-bold">
              <span className="text-2xl text-[#FF9F1C]">3.</span> Set Your Pricing And Availability
            </div>
            <div className="mx-16 pr-32 font-medium text-gray-400">
              Your passion for pets is now our paycheck. Recieve your
              well-earned compensation and cherish the furr moments
            </div>
            <div style={{left:"580px",bottom:"40px",zIndex:"100"}} className="h-8 w-8 relative rounded-full bg-[#FF9F1C]"></div>
          </div>
          {/* fourth */}
          <div className="z-x2 h-72 border-[#FF9F1C] relative bottom-12 border-b-3 border-r-3 flex flex-col justify-evenly py-12">
          <div className="ml-48 text-xl font-bold">
              <span className="text-2xl text-[#FF9F1C]">2.</span> Get Verified For Pet Sitting 
            </div>
            <div className="ml-48 mr-8 font-medium text-gray-400">
              Your passion for pets is now our paycheck. Recieve your
              well-earned compensation and cherish the furr moments
            </div>
          </div>

      {/* Central Shape and Image */}
          <div
            style={{
              bottom: "450px",
              left: "470px",
              outlineOffset: "30px",
              background:
                "radial-gradient(circle at 10% 20%, rgb(255, 200, 124) 0%, rgb(252, 251, 121) 90%",
            }}
            className="try-something outline outline-3 outline-[#FF9F1C]  rounded-t-full border-black  relative w-60"
          >
            <img src={Jhamela} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PetSitter;
