import React from "react";
import Slider from "react-slick";

import ReviewCard from "../ReviewCard";

import sam from "../../assets/swayam.jpg";
import nehu from "../../assets/nehu.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 2,
  slidesToScroll: 2,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        initialSlide: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const ReviewSlider = () => {
  return (
    <Slider autoPlay {...sliderSettings}>
      <ReviewCard
        image={sam}
        parentImage={nehu}
        sitterName={"Swayam Prajapat"}
        serviceName={"Dog Walking"}
        petParent={"Nehal Patidar"}
        review={
          "Pet Sitter was extremely friendly and loving to my bruno. he was extremely careful and updated about my dog by himself. i willdefinitely recommed pet sitter if you are from my place and looking for a pet sitter"
        }
      />
      <ReviewCard
        image={sam}
        parentImage={nehu}
        sitterName={"Swayam Prajapat"}
        serviceName={"Dog Walking"}
        petParent={"Nehal Patidar"}
        review={
          "Pet Sitter was extremely friendly and loving to my bruno. he was extremely careful and updated about my dog by himself. i willdefinitely recommed pet sitter if you are from my place and looking for a pet sitter"
        }
      />
      <ReviewCard
        image={sam}
        parentImage={nehu}
        sitterName={"Swayam Prajapat"}
        serviceName={"Dog Walking"}
        petParent={"Nehal Patidar"}
        review={
          "Pet Sitter was extremely friendly and loving to my bruno. he was extremely careful and updated about my dog by himself. i willdefinitely recommed pet sitter if you are from my place and looking for a pet sitter"
        }
      />
    </Slider>
  );
};

export default ReviewSlider;
