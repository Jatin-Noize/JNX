"use client";
import { useEffect, useState, use } from "react";
import { getProductById } from "../../../lib/api";
import { useCartStore } from "../../../store/cartStore";
import { useWishlistStore } from "../../../store/wishlistStore";

export default function ProductDetails({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams?.id;

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { addToCart, cart } = useCartStore();
  const { addToWishlist, wishlist } = useWishlistStore();

  // Check if product exists before checking cart/wishlist
  const isInCart = product && cart.some(item => item.id === product.id);
  const isInWishlist = product && wishlist.some(item => item.id === product.id);

  useEffect(() => {
    if (!id) return;

    setLoading(true);
    setError(null);
    
    getProductById(Number(id))
      .then(res => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError("Failed to load product. Please try again.");
        setLoading(false);
      });
  }, [id]);

  // Loading state
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="flex justify-center items-center h-screen">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-purple-500/20 border-t-purple-500 rounded-full animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-purple-500 text-sm font-semibold tracking-wider">LOADING</span>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Error state
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="bg-red-500/10 border border-red-500/50 rounded-lg p-6 text-center">
          <p className="text-red-400 text-lg mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-500 text-white px-6 py-2 rounded-lg hover:bg-red-600 transition"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // No product found state
  if (!product) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 text-lg">Product not found</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
      <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-6 max-w-5xl w-full grid md:grid-cols-2 gap-8">
        
        {/* IMAGE SECTION */}
        <div className="bg-gray-800 rounded-xl p-6 flex items-center justify-center">
          <img
            src={product.thumbnail || product.images?.[0] || "/placeholder-image.jpg"}
            alt={product.title || "Product image"}
            className="h-72 object-contain hover:scale-105 transition duration-300"
            onError={(e) => {
              e.target.src = "/placeholder-image.jpg";
            }}
          />
        </div>

        {/* DETAILS SECTION */}
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-bold">
              {product.title}
            </h1>

            <p className="text-gray-400 leading-relaxed">
              {product.description}
            </p>

            <p className="text-2xl font-bold text-green-400">
              ${product.price?.toFixed(2) || product.price}
            </p>
          </div>

          <div className="mt-6 flex gap-4">
            {/* CART BUTTON */}
            <button
              onClick={() => addToCart(product)}
              className={`flex-1 py-3 rounded-xl font-semibold transition ${
                isInCart
                  ? "bg-green-500 text-white cursor-default"
                  : "bg-white text-black hover:bg-gray-200 active:scale-95"
              }`}
              disabled={isInCart}
            >
              {isInCart ? "Added to Cart ✅" : "Add to Cart 🛒"}
            </button>

            {/* WISHLIST BUTTON */}
            <button
              onClick={() => addToWishlist(product)}
              className={`flex-1 py-3 rounded-xl font-semibold transition ${
                isInWishlist
                  ? "bg-pink-500 cursor-default"
                  : "bg-pink-600 hover:bg-pink-500 active:scale-95"
              }`}
              disabled={isInWishlist}
            >
              {isInWishlist ? "Wishlisted ❤️" : "Add to Wishlist ❤️"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}