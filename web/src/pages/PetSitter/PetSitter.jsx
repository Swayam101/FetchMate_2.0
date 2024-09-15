import React from "react";
import PetSitter1 from "../../assets/pet-sitte-img1.png";
import Tamjham from "../../assets/tamjham.png";

import request from "../../services/axios.service";
import useUserStore from "../../Store/userStore";
import { toast } from "react-toastify";
import PetSitterLoggedIn from "./PetSitterLoggedIn";

const PetSitter = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-appear");
      else entry.target.classList.remove("animate-appear");
    });
  });

  const appearers = document.querySelectorAll(".anim");
  appearers.forEach((el) => observer.observe(el));

  const token = useUserStore((state) => state.jwtToken);
  const isLoggedIn = useUserStore((state) => state.isLoggedIn);
  const setUserData = useUserStore((state) => state.setUserData);
  const isPetSitter = useUserStore((state) => state.isPetSitter);

  if (isPetSitter) return <PetSitterLoggedIn />;

  const handleBecomePetSitter = async (e) => {
    e.preventDefault();
    if (!isLoggedIn) {
      toast.error("Kindly Login To Proceed!");
      return;
    }
    const decision = confirm("Do You Really Wanna Become A Pet Sitter?");
    if (!decision) return;
    try {
      const response = await request({
        url: "/auth/be-petsitter",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      if (!response.data.status) throw new Error(response.data.message);
      setUserData(response.data.newUser);
      toast.success("Congratulations You're Now A Pet Sitter");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="mt-8 px-6 sm:px-16">
      <div className="flex justify-center gap-16">
        <img
          className="h-auto hidden sm:block sm:w-96"
          src={PetSitter1}
          alt=""
        />
        <div className="flex flex-col gap-8">
          <div className="sm:text-4xl text-xl font-medium text-[#2EC4B6] text-center">
            Befriend Another furry Mate
          </div>
          <div className="sm:text-xl text-sm text-center">
            Step into the heart-warming role of a fetchmate pet sitter. embrace
            pet care, create joyful moments, and earn. Start todaty and make a
            difference in a pet's life
          </div>
          <div className="text-center">
            <button
              onClick={handleBecomePetSitter}
              className="bg-[#CBF3F0] hover:bg-cyan-200 sm:text-xl text-sm font-medium sm:p-4 p-2 rounded-lg"
            >
              Become Pet Sitter
            </button>
          </div>
        </div>
      </div>
      <div className="flex py-8 mt-8 sm:justify-between px-8 sm:gap-0 justify-center gap-32 bg-[#CBF3F0] text-sm sm:text-xl font-medium rounded-lg border-4 border-gray-300">
        <div className="basis-2/4">
          <div>Over 250+</div>
          <div>Fetcmate registered Pet sitter</div>
        </div>
        <div className="basis-2/4">
          <div>Our Pet Sitter</div>
          <div>Earn Rs. 250-300/hrs </div>
        </div>
      </div>

      {/* Pet Sitting Page Decor */}

      <div className="mt-16 mb-8">
        <div className="sm:text-2xl text-xl mb-8 font-medium text-center text-[#2EC4B6]">
          Embark on your pet sitting journey
        </div>
        <img src={Tamjham} alt="services illustration" />
      </div>
    </div>
  );
};

export default PetSitter;
