"use client";
import { useEffect, useState, use } from "react";
import { getProductById } from "../../../lib/api";
import { useCartStore } from "../../../store/cartStore";
import { useWishlistStore } from "../../../store/wishlistStore";

export default function ProductDetails({ params }) {
  const resolvedParams = use(params);
  const id = resolvedParams?.id;

  const [product, setProduct] = useState(null);

  const addToCart = useCartStore(state => state.addToCart);
  const addToWishlist = useWishlistStore(state => state.addToWishlist);

  useEffect(() => {
    if (!id) return;

    getProductById(Number(id))
      .then(res => setProduct(res.data))
      .catch(err => console.error(err));

    console.log("ID:", id);
  }, [id]);

  if (!product) return (
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

return (
  <div className="min-h-screen bg-black text-white p-6 flex items-center justify-center">
    
    <div className="bg-gray-900 rounded-2xl shadow-xl border border-gray-800 p-6 max-w-5xl w-full grid md:grid-cols-2 gap-8">
      
      {/* IMAGE SECTION */}
      <div className="bg-gray-800 rounded-xl p-6 flex items-center justify-center">
        <img
          src={product.thumbnail || product.images?.[0]}
          className="h-72 object-contain hover:scale-105 transition duration-300"
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
            ${product.price}
          </p>
        </div>

        {/* ACTION BUTTONS */}
        <div className="mt-6 flex gap-4">
          
          <button
            onClick={() => addToCart(product)}
            className="flex-1 bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
          >
            Add to Cart 🛒
          </button>

          <button
            onClick={() => addToWishlist(product)}
            className="flex-1 bg-pink-600 py-3 rounded-xl font-semibold hover:bg-pink-500 transition"
          >
            Wishlist ❤️
          </button>

        </div>

      </div>

    </div>
  </div>
);
}