import React from "react";
import useCartStore from "../../Store/cartStore";
import useUserStore from "../../Store/userStore";
import { toast } from "react-toastify";

const ProductCard = ({ image, title, price, keyProp }) => {
  const addToCart = useCartStore((state) => state.addToCart);

  const isLoggedIn = useUserStore((state) => state.isLoggedIn);

  const prod = {
    imageLink: image,
    name: title,
    price,
    _id: keyProp,
  };

  return (
    <div className="flex flex-col justify-evenly gap-5 text-sm sm:text-base border hover:border-yellow-500 font-anton tracking-wide">
      <div className="product-image pt-5 bg-white ">
        <img
          className="mx-auto h-auto w-32"
          src={`${image}`}
          alt="Product Illustration"
        />
      </div>
      <h3 className="product-title h-fit w-full font-roboto font-bold text-center break-words">
        <span className="basis-3/5">{title}</span>
      </h3>
      <h3 className="text-center text-yellow-400">$ {price}</h3>
      <div className="p-6 flex justify-center">
        <button
          onClick={() => {
            if (!isLoggedIn)
              toast.error("Log In To Perform This Action", {
                position: "top-center",
              });
            else addToCart(prod, prod._id);
          }}
          className="font-roboto w-full h-12 bg-transparent hover:bg-yellow-500 text-black-700 font-semibold sm:text-lg
           hover:text-white border border-yellow-500 hover:border-transparent"
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
