"use client";
import React, { useState } from "react";
import useStore from "../../Store/shopStore";

const categories = [
  { category: "food" },
  { category: "toys" },
  { category: "beds" },
  { category: "accessories" },
  { category: "skincare" },
  { category: "cages" },
  { category: "grooming" },
];

const CategoriesAside = () => {
  const filterProducts = useStore((state) => state.applyCategory);
  const [selected, setSelected] = useState("0");

  const handleClick = (category, num) => {
    if (selected == num) {
      filterProducts("X");
      setSelected("X");
    } else {
      filterProducts(category);
      setSelected(num);
    }
  };
  return (
    <div className="categories mb-16 ml-10">
      <h3 className="mb-4 text-2xl font-anton tracking-wide">Categories</h3>
      <div className="categories-box grid grid-cols-1 grid-rows-6 gap-2">
        {categories.map((elem, index) => {
          return (
            <span
              key={index}
              onClick={() => handleClick(elem.category, index)}
              className={`category-item p-2 ${
                selected == index ? "border-4 rounded" : ""
              }`}
            >
              {elem.category}
            </span>
          );
        })}
      </div>
    </div>
  );
};

export default CategoriesAside;
