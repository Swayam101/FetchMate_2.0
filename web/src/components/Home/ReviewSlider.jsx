import React from "react";
import Slider from "react-slick";
import ReviewCard from "../ReviewCard";
import sam from "../../assets/swayam.jpg";
import nehu from "../../assets/nehu.png";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
  ],
};

const ReviewSlider = () => {
  return (
    <div className="px-4">
      <Slider {...sliderSettings}>
        <div className="px-2">
          <ReviewCard
            image={sam}
            parentImage={nehu}
            sitterName="Swayam Prajapat"
            serviceName="Dog Walking"
            petParent="Nehal Patidar"
            review="Pet Sitter was extremely friendly and loving to my bruno. He was extremely careful and updated about my dog by himself. I will definitely recommend this pet sitter if you are from my place and looking for a pet sitter."
          />
        </div>
        <div className="px-2">
          <ReviewCard
            image={sam}
            parentImage={nehu}
            sitterName="Swayam Prajapat"
            serviceName="Dog Walking"
            petParent="Nehal Patidar"
            review="Pet Sitter was extremely friendly and loving to my bruno. He was extremely careful and updated about my dog by himself. I will definitely recommend this pet sitter if you are from my place and looking for a pet sitter."
          />
        </div>
        <div className="px-2">
          <ReviewCard
            image={sam}
            parentImage={nehu}
            sitterName="Swayam Prajapat"
            serviceName="Dog Walking"
            petParent="Nehal Patidar"
            review="Pet Sitter was extremely friendly and loving to my bruno. He was extremely careful and updated about my dog by himself. I will definitely recommend this pet sitter if you are from my place and looking for a pet sitter."
          />
        </div>
        <div className="px-2">
          <ReviewCard
            image={sam}
            parentImage={nehu}
            sitterName="Swayam Prajapat"
            serviceName="Dog Walking"
            petParent="Nehal Patidar"
            review="Pet Sitter was extremely friendly and loving to my bruno. He was extremely careful and updated about my dog by himself. I will definitely recommend this pet sitter if you are from my place and looking for a pet sitter."
          />
        </div>
        <div className="px-2">
          <ReviewCard
            image={sam}
            parentImage={nehu}
            sitterName="Swayam Prajapat"
            serviceName="Dog Walking"
            petParent="Nehal Patidar"
            review="Pet Sitter was extremely friendly and loving to my bruno. He was extremely careful and updated about my dog by himself. I will definitely recommend this pet sitter if you are from my place and looking for a pet sitter."
          />
        </div>
      </Slider>
    </div>
  );
};

export default ReviewSlider;
