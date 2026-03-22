"use client";
import { useWishlistStore } from "../../store/wishlistStore";
import { useEffect } from "react";
import Link from "next/link";

export default function WishlistPage() {
  const { wishlist, removeFromWishlist } = useWishlistStore();
    const {loadWishlist } = useWishlistStore();

     useEffect(() => {
    loadWishlist(); // ✅ IMPORTANT
  }, []);

  
  if (wishlist.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
        
        <div className="text-6xl mb-4">❤️</div>

        <h1 className="text-3xl font-bold mb-2">
          Your Wishlist is Empty
        </h1>

        <p className="text-gray-400 mb-6 max-w-md">
          Save items you love to your wishlist. Start exploring and add your favorite products!
        </p>

        <Link
          href="/products"
          className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
        >
          Browse Products →
        </Link>
      </div>
    );
  }

  // MAIN UI
  return (
    <div className="min-h-screen bg-black text-white p-6">
      
      <h1 className="text-3xl font-bold mb-8">❤️ Your Wishlist</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        
        {wishlist.map(item => (
          <div
            key={item.id}
            className="bg-gray-900 border border-gray-800 rounded-2xl p-4 shadow-lg hover:shadow-xl transition"
          >
            
            {/* IMAGE */}
            <div className="bg-gray-800 rounded-xl p-4 flex justify-center">
              <img
                src={item.thumbnail || item.images?.[0]}
                className="h-40 object-contain hover:scale-105 transition"
              />
            </div>

            {/* DETAILS */}
            <div className="mt-4 space-y-2">
              <h2 className="font-semibold line-clamp-2">
                {item.title}
              </h2>

              <p className="text-green-400 font-bold">
                ${item.price}
              </p>
            </div>

            {/* ACTIONS */}
            <div className="mt-4 flex gap-2">
              
              <Link
                href={`/products/${item.id}`}
                className="flex-1 text-center bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition"
              >
                View
              </Link>

              <button
                onClick={() => removeFromWishlist(item.id)}
                className="flex-1 bg-red-500 py-2 rounded-lg hover:bg-red-600 transition"
              >
                Remove
              </button>

            </div>

          </div>
        ))}

      </div>
    </div>
  );
}