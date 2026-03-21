import { create } from "zustand";

export const useWishlistStore = create((set) => ({
  wishlist: JSON.parse(localStorage.getItem("wishlist")) || [],

  addToWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.find(p => p.id === product.id);
      if (exists) return state;

      const updated = [...state.wishlist, product];
      localStorage.setItem("wishlist", JSON.stringify(updated));

      return { wishlist: updated };
    }),

  removeFromWishlist: (id) =>
    set((state) => {
      const updated = state.wishlist.filter(p => p.id !== id);
      localStorage.setItem("wishlist", JSON.stringify(updated));
      return { wishlist: updated };
    }),
}));