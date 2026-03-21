"use client";
import { useCartStore } from "../../store/cartStore";
import { useRouter } from "next/navigation";

export default function CheckoutPage() {
  const { cart } = useCartStore();
  const router = useRouter();

  const total = cart.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    alert("✅ Order placed successfully!");

    localStorage.removeItem("cart"); // clear storage
    location.reload(); // refresh state

    router.push("/"); // redirect home
  };

  return (
    <div className="min-h-screen bg-black text-white p-6 flex justify-center">
      
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl w-full">
        
        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="bg-gray-900 border border-gray-800 rounded-xl p-6 space-y-4"
        >
          <h1 className="text-2xl font-bold mb-4">Checkout</h1>

          <input
            placeholder="Full Name"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none"
          />

          <input
            placeholder="Email"
            type="email"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none"
          />

          <textarea
            placeholder="Address"
            required
            className="w-full p-3 bg-gray-800 rounded-lg outline-none"
          />

          <button className="w-full bg-green-500 py-3 rounded-xl font-semibold hover:bg-green-600 transition">
            Place Order
          </button>
        </form>

        {/* SUMMARY */}
        <div className="bg-gray-900 border border-gray-800 rounded-xl p-6 h-fit">
          <h2 className="text-xl font-semibold mb-4">Order Summary</h2>

          {cart.map(item => (
            <div
              key={item.id}
              className="flex justify-between text-gray-400 mb-2"
            >
              <span className="line-clamp-1">
                {item.title} x {item.quantity}
              </span>
              <span>
                ${(item.price * item.quantity).toFixed(2)}
              </span>
            </div>
          ))}

          <div className="flex justify-between mt-4 text-lg font-bold">
            <span>Total</span>
            <span className="text-green-400">
              ${total.toFixed(2)}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
}