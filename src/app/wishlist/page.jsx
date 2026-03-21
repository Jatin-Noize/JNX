"use client";
import { useWishlistStore } from "@/store/wishlistStore";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlistStore();

  if (wishlist.length === 0) {
    return <p className="p-6">Your wishlist is empty ❤️</p>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Wishlist</h1>

      <div className="grid grid-cols-3 gap-6">
        {wishlist.map(item => (
          <div key={item.id} className="border p-4">
            <img src={item.image} className="h-40 mx-auto" />
            <h2 className="mt-2">{item.title}</h2>
            <p>${item.price}</p>

            <button
              className="bg-red-500 text-white px-4 py-1 mt-2"
              onClick={() => removeFromWishlist(item.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}