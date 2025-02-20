import { toast } from "react-toastify";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const store = (set, get) => ({
  cart: [],
  total: 0,
  calculateTotal: () => {
    const currentCart = [...get().cart];
    const total = currentCart.reduce(
      (sum, product) => sum + product.qty * product.price,
      0
    );
    set((state) => ({ cart: get().cart, total: parseFloat(total).toFixed(2) }));
  },
  removeFromCart: (attributes, id) => {
    const currentCart = [...get().cart];
    attributes.id = id;
    const product =
      currentCart[currentCart.findIndex((elem) => elem.id == attributes.id)];
    product.qty = product.qty - 1;

    if (product.qty < 1) {
      const newCart = currentCart.filter((elem) => elem.id !== attributes.id);

      set((state) => ({ cart: newCart, total: get().total }));
    } else {
      set((state) => ({ cart: currentCart, total: get().total }));
    }
  },
  addToCart: (attributes, id) => {
    const tempCart = [...get().cart];
    attributes.id = id;
    const check_index = tempCart.findIndex((product) => product._id == id);
    // Push item to cart if not already Present In Cart
    if (check_index !== -1) {
      const productPresent = tempCart[check_index];
      productPresent.qty++;
      productPresent.subTotal =
        parseInt(productPresent.qty) * parseInt(productPresent.price);
    }
    //INCREASE qty. if Product Already present in the Cart
    else {
      tempCart.push({ ...attributes, qty: 1, subTotal: 1 * attributes.price });
    }
    set((state) => ({ cart: tempCart, total: get().total }));
    toast.info(`${attributes.name} Added To Cart`, {
      position: "top-center",
      autoClose: 2000,
      theme: "colored",
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      toastId: "add-item-notif",
    });
  },
});

const useCartStore = create(
  persist(store, {
    name: "product-cart",
    storage: createJSONStorage(() => sessionStorage),
  })
);

export default useCartStore;
