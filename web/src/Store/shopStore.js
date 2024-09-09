import { create } from "zustand";
import ProductData from "../DummyData/products";

const store = (set, get) => ({
  products: [],
  categoryProducts: [],
  fetchAllProducts: async () => {
    const res = ProductData;
    console.log(`Loggin Product Data:${res}`);
    set((state) => ({ products: res }));
    set((state) => ({ categoryProducts: res }));
  },
  applyCategory: (category) => {
    if (category == "X") set((state) => ({ categoryProducts: get().products }));
    else {
      const filteredProducts = get().products.filter(
        (prod) => prod.category == category
      );
      set((state) => ({ categoryProducts: filteredProducts }));
    }
  },
  sortProducts: (reverse) => {
    const prods = get().categoryProducts;
    var sortedProducts = [];
    if (reverse !== "reverse")
      sortedProducts = [...prods].sort((a, b) => a.name.localeCompare(b.name));
    else {
      sortedProducts = [...prods].sort((a, b) => b.name.localeCompare(a.name));
    }
    set((state) => ({ categoryProducts: sortedProducts }));
  },
  priceFilter: (reverse) => {
    const prods = get().categoryProducts;
    var filteredProducts = [];

    if (reverse !== "reverse")
      filteredProducts = [...prods].sort((a, b) => a.price - b.price);
    else filteredProducts = [...prods].sort((a, b) => b.price - a.price);

    set((state) => ({ categoryProducts: filteredProducts }));
  },

  budgetFilter:(budget)=>{
    const prods=get().categoryProducts;
    const filteredProducts=prods.filter(({price})=>price<=budget)
    set((state) => ({ categoryProducts: filteredProducts }));
  }

});

const useStore = create(store);

export default useStore;
