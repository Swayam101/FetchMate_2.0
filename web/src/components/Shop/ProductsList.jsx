"use client";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useStore from "../../Store/shopStore";
import Pagination from "./Pagination";

const ProductsList = () => {
  const products = useStore((state) => state.categoryProducts);
  const fetchProducts = useStore((state) => state.fetchAllProducts);
  const sortProducts = useStore((state) => state.sortProducts);
  const priceFilter = useStore((state) => state.priceFilter);

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(5);

  useEffect(() => {
    fetchProducts();
    if (window.matchMedia("(max-width: 480px)").matches) {
      setProductsPerPage(10);
    }
  }, [fetchProducts]);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const lastIndex = currentPage * productsPerPage;
  const indexFirst = lastIndex - productsPerPage;
  const currentProducts = products.slice(indexFirst, lastIndex);

  const handleSort = (e) => {
    if (e.target.value === "A to Z") sortProducts();
    else if (e.target.value === "Z to A") sortProducts("reverse");
    else if (e.target.value === "Ascending Price") priceFilter();
    else if (e.target.value === "Descending Price") priceFilter("reverse");
  };

  return (
    <main className="grid-cols-5 gap-3 col-span-3 p-3">
      <div className="top-part col-span-5 grid grid-cols-5">
        <span className="col-span-3">
          Showing {indexFirst + 1}-{lastIndex} of {products.length} results
        </span>

        <select onChange={handleSort} className="p-2 border col-span-2">
          <option>Sort </option>
          <option value="A to Z">A to Z</option>
          <option value="Z to A">Z to A</option>
          <option value="Ascending Price">Ascending Price</option>
          <option value="Descending Price">Descending Price</option>
        </select>
      </div>
      <div className="main-products-list pt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
        {currentProducts.map(({ name, _id, price, imageLink }) => {
          return (
            <ProductCard
              title={name}
              price={price}
              handleClick={() => addToCart(id)}
              image={imageLink}
              key={_id}
              keyProp={_id}
            />
          );
        })}
      </div>
      <div className="col-span-5 mt-5 text-center">
        <Pagination
          paginate={paginate}
          productsPerPage={productsPerPage}
          totalProducts={products.length}
        />
      </div>
    </main>
  );
};

export default ProductsList;
