import React from "react";

const HowWeWorkCard = ({ image, heading, serialNo, description }) => {
  return (
    <div className="flex flex-col gap-4 sm:gap-2 sm:justify-around items-center h-96 sm:h-72 w-80 sm:w-96">
      <div className="h-auto w-full flex-col flex items-center">
        <img className="sm:h-52 sm:w-96" src={image} alt="" />
      </div>
      <div className="flex w-full justify-between sm:justify-around">
        <div className="text-xl font-bold text-[#ffd91c]">{serialNo}</div>
        <div className="self-end font-bold">{heading}</div>
      </div>
      <div className="break-words text-justify">{description}</div>
    </div>
  );
};

export default HowWeWorkCard;
