import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaCookieBite, FaBed } from "react-icons/fa";
import { TbHorseToy } from "react-icons/tb";
import { GiGemNecklace, GiBirdCage, GiComb } from "react-icons/gi";
import { FaBottleDroplet } from "react-icons/fa6";
import useStore from "../../Store/shopStore";

const categories = [
  { category: "food", icon: <FaCookieBite size={60} /> },
  { category: "toys", icon: <TbHorseToy size={60} /> },
  { category: "beds", icon: <FaBed size={60} /> },
  { category: "accessories", icon: <GiGemNecklace size={60} /> },
  { category: "skincare", icon: <FaBottleDroplet size={60} /> },
  { category: "cages", icon: <GiBirdCage size={60} /> },
  { category: "grooming", icon: <GiComb size={60} /> },
];

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
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
  ],
};

const CategoriesSlider = () => {
  const filterProducts = useStore((state) => state.applyCategory);
  const [selected, setSelected] = useState("0");

  const handleClick = (category, num) => {
    filterProducts(category);
    setSelected(num);
  };

  return (
    <Slider {...sliderSettings} className="sm:hidden mb-4">
      {categories.map(({ category, icon }, index) => (
        <div
          onClick={() => handleClick(category, index)}
          key={index}
          className={`text-center ${
            selected == index ? "border-4 rounded" : ""
          }`}
        >
          <div className="flex justify-center"> {icon}</div>
          <span className="w-full text-center uppercase">{category}</span>
        </div>
      ))}
    </Slider>
  );
};

export default CategoriesSlider;
