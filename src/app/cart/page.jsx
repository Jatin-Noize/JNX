"use client";
import { useCartStore } from "@/store/cartStore";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();
  const router = useRouter();
  const {cart1,loadCart} = useCartStore();



  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );
   useEffect(()=>{
      loadCart();
    },[]);

  return (

   
    <div className="min-h-screen bg-black text-white p-6">
      
      <h1 className="text-3xl font-bold mb-8">🛒 Your Cart</h1>

      {cart.length === 0 ? (
      <div className="flex flex-col items-center justify-center min-h-screen bg-black text-white text-center px-4">
  
  {/* ICON / EMOJI */}
  <div className="text-6xl mb-4">🛒</div>

  {/* TITLE */}
  <h1 className="text-3xl font-bold mb-2">
    Oops! Your Cart is Empty
  </h1>

  {/* SUBTEXT */}
  <p className="text-gray-400 mb-6 max-w-md">
    Looks like you haven’t added anything yet. Start exploring products and fill your cart with amazing items!
  </p>

  {/* BUTTON */}
  <a
    href="/products"
    className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
  >
    Browse Products →
  </a>

</div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          
          {/* ITEMS */}
          <div className="md:col-span-2 space-y-4">
            {cart.map(item => (
              <div
                key={item.id}
                className="flex gap-4 bg-gray-900 border border-gray-800 rounded-xl p-4 items-center hover:shadow-lg transition"
              >
                {/* IMAGE */}
                <div className="bg-gray-800 p-3 rounded-lg">
                  <img
                    src={item.thumbnail || item.images?.[0]}
                    className="h-20 w-20 object-contain"
                  />
                </div>

                {/* DETAILS */}
                <div className="flex-1">
                  <h2 className="font-semibold line-clamp-1">
                    {item.title}
                  </h2>

                  <p className="text-gray-400 text-sm">
                    Qty: {item.quantity}
                  </p>

                  <p className="text-green-400 font-bold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </p>
                </div>

                {/* REMOVE */}
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 px-4 py-2 rounded-lg hover:bg-red-600 transition"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          {/* SUMMARY */}
          <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-fit sticky top-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

            <div className="flex justify-between text-gray-400 mb-2">
              <span>Items</span>
              <span>{cart.length}</span>
            </div>

            <div className="flex justify-between text-lg font-bold mb-4">
              <span>Total</span>
              <span className="text-green-400">
                ${total.toFixed(2)}
              </span>
            </div>

            <button
              onClick={() => router.push("/checkout")}
              className="w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-gray-200 transition"
            >
              Proceed to Checkout →
            </button>
          </div>

        </div>
      )}
    </div>
  );
}