import { create } from "zustand";

export const useWishlistStore = create((set) => ({
  wishlist: [], // ✅ safe default

  // ✅ Load from localStorage (client only)
  loadWishlist: () => {
    if (typeof window === "undefined") return;

    const stored = localStorage.getItem("wishlist");
    if (stored) {
      set({ wishlist: JSON.parse(stored) });
    }
  },

  addToWishlist: (product) =>
    set((state) => {
      const exists = state.wishlist.find(p => p.id === product.id);

      let updated;
      if (exists) {
        // toggle remove
        updated = state.wishlist.filter(p => p.id !== product.id);
      } else {
        updated = [...state.wishlist, product];
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(updated));
      }

      return { wishlist: updated };
    }),

  removeFromWishlist: (id) =>
    set((state) => {
      const updated = state.wishlist.filter(p => p.id !== id);

      if (typeof window !== "undefined") {
        localStorage.setItem("wishlist", JSON.stringify(updated));
      }

      return { wishlist: updated };
    }),
}));