import React, { useRef } from "react";
import CategoriesSlider from "../../components/Shop/CategoriesSlider";
import CategoriesAside from "../../components/Shop/CategoriesAside";
import ProductsList from "../../components/Shop/ProductsList";
import useStore from "../../Store/shopStore";

const Shop = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-appear");
      else entry.target.classList.remove("animate-appear");
    });
  });

  const appearers = document.querySelectorAll(".anim");
  appearers.forEach((el) => observer.observe(el));

  const budgetRef = useRef(null);

  const budgetFilter = useStore((state) => state.budgetFilter);

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
            <div className="filter-by-price mb-16 grid grid-cols-2">
              <h3 className="mb-4 gap-x-8 col-span-2 text-xl font-anton tracking-wide text-left mt-16">
                Filter By Price
              </h3>
              <button
                onClick={() => budgetFilter(budgetRef.current.value)}
                className="w-3/5 bg-transparent col-span-1 hover:bg-yellow-500 text-black-700 font-semibold hover:text-white border border-yellow-500 hover:border-transparent"
              >
                Filter
              </button>
              <div
                className="relative mb-3 col-span-1"
                data-te-input-wrapper-init
              >
                <input
                  ref={budgetRef}
                  type="text"
                  className="peer block min-h-[auto] w-full rounded border-0 bg-transparent px-3 py-[0.32rem] leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-black dark:placeholder:text-black dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                  id="exampleFormControlInput1"
                  placeholder="Example label"
                />
                <label
                  htmlFor="exampleFormControlInput1"
                  className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-black transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                >
                  Enter Max. Price
                </label>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Shop;
