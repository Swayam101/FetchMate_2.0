import React from "react";

// import ReviewImg from "../assets/reviewImg.png";

const ReviewCard = ({image, parentImage,sitterName,serviceName,review,petParent}) => {
  return (
    <div className="review-card items-center flex w-2/5 flex-shrink-0 ">
      <img
        style={{ borderRadius: "50%/20%" }}
        src={image}
        alt="pet sitter's photo"
        className="rounded-ss-3xl w-56 h-80"
      />
      <div className="flex flex-col p-10 h-96 justify-around ">
        <div className="text-xl font-bold">{sitterName}</div>
        <div className="text-sm font-bold text-gray-500">
          Service : {serviceName}
        </div>
        <div className="font-semibold">
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
