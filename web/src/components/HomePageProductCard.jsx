import React from "react";

const HomePageProductCard = () => {
  return (
    <div className="sm:h-48 sm:w-48 p-4 flex flex-col justify-evenly">
      <img
        alt="pet product"
        src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg"
      />
      <div className="text-center text-lg">Deluxe Dog Food</div>
      <div className="text-center text-base">Price $4000</div>
    </div>
  );
};

export default HomePageProductCard;
