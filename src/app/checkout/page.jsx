"use client";
import { useCartStore } from "@/store/cartStore";

export default function CheckoutPage() {
  const { cart } = useCartStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Order placed!");
  };

  return (
    <div>
      <h1>Checkout</h1>

      {cart.map(item => (
        <p key={item.id}>
          {item.title} x {item.quantity}
        </p>
      ))}

      <form onSubmit={handleSubmit}>
        <input placeholder="Name" required />
        <input placeholder="Email" required />
        <textarea placeholder="Address" required />

        <button type="submit">Place Order</button>
      </form>
    </div>
  );
}