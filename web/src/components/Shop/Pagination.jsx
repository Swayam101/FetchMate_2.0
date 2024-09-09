import React from "react";

const Pagination = ({ productsPerPage, totalProducts,paginate }) => {
  const pageNumbers = [];
  for (
    let index = 1;
    index <= Math.ceil(totalProducts / productsPerPage);
    index++
  ) {
    pageNumbers.push(index);
  }
  return (
    <ul className="inline-flex gap-3 -space-x-px text-2xl">
     {pageNumbers.map(num=>( <li onClick={()=>paginate(num)} key={num} className="flex items-center justify-center px-3 leading-tight text-gray-500 bg-white overflow-hidden hover:border border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        {num}
      </li>))}
    </ul>
  );
};

export default Pagination;
