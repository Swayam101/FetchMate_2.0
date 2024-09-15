import React from "react";
import TrackerAD from "../../assets/trackPet.png";
import TrackerBullets from "../../assets/trackBullets.png";
import { toast } from "react-toastify";

const Services2 = () => {
  const featureUnderDevelopmentToast = () => {
    toast.error("Feature Currently Unavailable");
  };

  return (
    <div className="w-screen px-10 pb-10 ">
      <div className="text-center text-3xl font-medium text-[#2EC4B6]">
        Track Your Pet Here
      </div>
      <div className="flex justify-around pr-10">
        <div>
          <img src={TrackerAD} alt="" />
        </div>
        <div className="pt-20 text-2xl flex flex-col gap-16">
          <div className="pl-10 font-bold">
            Using Fetchmate Pet Tracking Belt
          </div>
          <ul className="flex flex-col gap-6">
            <li>
              <div className="inline mr-6">
                <img className="inline" src={TrackerBullets} alt="" />
              </div>
              Charge tracking bel until indicator displays complete charge
            </li>
            <li>
              <div className="inline mr-6">
                <img className="inline" src={TrackerBullets} alt="" />
              </div>
              Secure bel snugly on the pet for comfort
            </li>
            <li>
              <div className="inline mr-6">
                <img className="inline" src={TrackerBullets} alt="" />
              </div>
              Connect belt using ID and pair with device
            </li>
            <li>
              <div className="inline mr-6">
                <img className="inline" src={TrackerBullets} alt="" />
              </div>
              Activate Real time tracking via the app for pet monitoring
            </li>
          </ul>
          <div className="flex gap-24">
            <div>
              <button
                onClick={featureUnderDevelopmentToast}
                className="bg-[#2EC4B6] px-6 py-2 rounded-lg font-medium"
              >
                Start Tracking
              </button>
            </div>
            <div>
              <button
                onClick={featureUnderDevelopmentToast}
                className="border-2 border-[#2EC4B6] text-[#2EC4B6] px-6 py-2 rounded-lg font-medium"
              >
                Order Tracker
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services2;
