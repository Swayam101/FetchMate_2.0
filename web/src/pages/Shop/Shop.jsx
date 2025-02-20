import React from "react";
import CategoriesSlider from "../../components/Shop/CategoriesSlider";
import CategoriesAside from "../../components/Shop/CategoriesAside";
import ProductsList from "../../components/Shop/ProductsList";

const Shop = () => {
  return (
    <div className="bg-white text-black">
      <div className="shop-main-wrapper h-fit sm:h-4/5 sm:p-0 sm:px-10 ">
        <div className="grid grid-cols-1 sm:grid-cols-4 ">
          <div className="sm:hidden w-full h-full">
            <CategoriesSlider />
          </div>
          <ProductsList />
          <aside className="hidden sm:block col-span-1 p-3">
            <CategoriesAside />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Shop;
