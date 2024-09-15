import React from "react";
import Slider from "react-slick";
import HomePageProductCard from "../components/HomePageProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: false,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
  initialSlide: 0,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
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

const LandingSlider = () => {
  return (
    <div className="px-20 mb-4">
      <Slider autoPlay {...sliderSettings}>
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
        <HomePageProductCard />
      </Slider>
    </div>
  );
};

export default LandingSlider;
