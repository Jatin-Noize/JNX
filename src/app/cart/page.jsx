"use client";
import { useCartStore } from "@/store/cartStore";

export default function CartPage() {
  const { cart, removeFromCart } = useCartStore();

  const total = cart.reduce((acc, item) =>
    acc + item.price * item.quantity, 0
  );

  return (
    <div>
      <h1>Cart</h1>

      {cart.map(item => (
        <div key={item.id}>
          <p>{item.title}</p>
          <p>{item.quantity}</p>
          <button onClick={() => removeFromCart(item.id)}>
            Remove
          </button>
        </div>
      ))}

      <h2>Total: ${total}</h2>
    </div>
  );
}