// Core Modules
import { useEffect, useState } from "react";

// External Dependencies
import { GrClose } from "react-icons/gr";

// User-Build Modules
import useCartStore from "../../Store/cartStore";
import request from "../../services/axios.service";

const Cart = () => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("animate-appear");
      else entry.target.classList.remove("animate-appear");
    });
  });

  const appearers = document.querySelectorAll(".anim");
  appearers.forEach((el) => observer.observe(el));

  const cart = useCartStore((state) => state.cart);
  const calculateTotal = useCartStore((state) => state.calculateTotal);
  const totalAmount = useCartStore((state) => state.total);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const [displayCart, setDisplayCart] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    calculateTotal();
    setDisplayCart(cart);
    setTotal(totalAmount);
  }, [cart, totalAmount, calculateTotal]);

  const handleRemoveItem = (attributes, id) => {
    if (confirm("Do you Really Want To Remove This Item?"))
      removeFromCart(attributes, id);
  };

  if (total == 0)
    return (
      <div className="empty-cart h-screen text-4xl font-black  text-cyan-300 flex flex-col items-center pt-20">
        {"Oops Shopping Cart Is Empty!"}
      </div>
    );

  return (
    <div>
      <div className="events_header h-48 flex font-roboto text-yellow-400 text-5xl font-bold items-center">
        <p className="px-10 translate-x-10">CART</p>
      </div>
      <div className="flex flex-col min-h-screen bg-white text-black">
        <div className="relative overflow-x">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-100">
              <tr>
                <th scope="col" className="px-6 py-3 rounded-l-lg text-center">
                  Product
                </th>
                <th scope="col" className=" px-2 sm:px-6 py-3">
                  Qunantity
                </th>
                <th scope="col" className="px-6 py-3 rounded-r-lg">
                  Price
                </th>
                <th>Subtotal</th>
              </tr>
            </thead>
            <tbody>
              {displayCart.map((attributes, index) => (
                <tr key={index} className="bg-white">
                  <td
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
                  >
                    <div className="sm:flex sm:items-center sm:justify-around">
                      <div
                        onClick={() =>
                          handleRemoveItem(attributes, attributes._id)
                        }
                      >
                        <GrClose className="cursor-pointer" />
                      </div>
                      <div className="cart-product-image h-16 w-16 sm:h-32 flex justify-center items-center">
                        <img
                          style={{ width: "100%", height: "auto" }}
                          height={0}
                          width={0}
                          src={attributes.imageLink}
                          alt="bagpack_png"
                        />
                      </div>
                      <div>{attributes.name}</div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-center">{attributes.qty}</td>
                  <td className="px-6 py-4">{`$${attributes.price}`}</td>
                  <td className="px-6 py-4">{`$${attributes.subTotal}`}</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="p-4 mx-4">
            <div className="my-4">
              <p className="text-2xl font-bold">CART TOTAL</p>
            </div>
            <div>
              <table className="w-full text-sm text-left text-gray-500">
                <thead>
                  <tr>
                    <th>Subtotal</th>
                    <th>Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border border-gray-300">
                    <td>{`$${total}`}</td>
                    <td>{`$${total}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-3">
              <button
                onClick={async () => {
                  await request({
                    url: "/",
                  });
                  // toast.error("Payment Gateway Integration Incomplete!")
                }}
                className="border-2 border-yellow-400 hover:bg-yellow-400 hover:text-white transition p-2"
                type="submit"
              >
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
