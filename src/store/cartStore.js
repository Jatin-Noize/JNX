import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [], // ✅ safe default (no localStorage here)

  // ✅ Load from localStorage (client only)
  loadCart: () => {
    if (typeof window === "undefined") return;

    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      set({ cart: JSON.parse(storedCart) });
    }
  },

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find(p => p.id === product.id);

      let updatedCart;
      if (existing) {
        updatedCart = state.cart.map(p =>
          p.id === product.id
            ? { ...p, quantity: p.quantity + 1 }
            : p
        );
      } else {
        updatedCart = [...state.cart, { ...product, quantity: 1 }];
      }

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      return { cart: updatedCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const updatedCart = state.cart.filter(p => p.id !== id);

      if (typeof window !== "undefined") {
        localStorage.setItem("cart", JSON.stringify(updatedCart));
      }

      return { cart: updatedCart };
    }),
}));