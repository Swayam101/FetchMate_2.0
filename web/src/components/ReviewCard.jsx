import React from "react";

// import ReviewImg from "../assets/reviewImg.png";

const ReviewCard = ({
  image,
  parentImage,
  sitterName,
  serviceName,
  review,
  petParent,
}) => {
  return (
    <div className="grid grid-cols-2 sm:gap-4">
      <div className="flex flex-col justify-center">
        {" "}
        <img
          src={image}
          alt="pet sitter's"
          className="col-span-1 rounded-[50%/20%] sm:h-full h-96"
        />
      </div>
      <div className="flex flex-col gap-2 h-auto px-2 py-4 justify-around">
        <div className="text-lg font-bold">{sitterName}</div>
        <div className="text-xs font-bold text-gray-500">
          Service : {serviceName}
        </div>
        <div className="font-semibold sm:text-lg text-xs">
          Pet Sitter was extremely friendly and loving to my bruno. he was
          extremely careful and updated about my dog by himself. i will
          definitely recommed pet sitter if you are from my place and looking
          for a pet sitter
        </div>
        <div></div>
        <img src={parentImage} className="w-12 h-12 rounded-full" alt="" />
        <div className="font-medium">
          {petParent} <div>X X X X X</div>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
