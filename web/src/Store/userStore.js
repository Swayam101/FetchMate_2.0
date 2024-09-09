import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const store = (set, get) => ({
  userData: null,
  jwtToken: null,
  isLoggedIn: false,
  isPetSitter: false,
  setJwtToken: (jwt) => {
    set((state) => ({
      userData: get().userData,
      jwtToken: jwt,
      isLoggedIn: true,
    }));
  },
  setUserData: (user) => {
    if (user.roles.includes("petSitter"))
      set((state) => ({ userData: user, isLoggedIn: true, isPetSitter: true }));
    else
      set((state) => ({
        userData: user,
        jwtToken: get().jwtToken,
        isLoggedIn: true,
        isPetSitter: false,
      }));
  },
  logOut: () => {
    set((state) => ({
      userData: null,
      jwtToken: null,
      isLoggedIn: false,
      isPetSitter: false,
    }));
  },
});

const useUserStore = create(
  persist(store, {
    name: "user-data",
    storage: createJSONStorage(() => sessionStorage),
  })
);

export default useUserStore;
