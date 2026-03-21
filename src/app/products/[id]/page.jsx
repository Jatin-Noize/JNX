"use client";
import { useEffect, useState, use } from "react";
import { getProductById } from "../../../lib/api";
import { useCartStore } from "../../../store/cartStore";
import { useWishlistStore } from "../../../store/wishlistStore";

export default function ProductDetails({ params }) {
  const resolvedParams = use(params); // ✅ FIX HERE
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

  if (!product) return <p>Loading...</p>;

  return (
    <div>
      <img src={product.thumbnail || product.images?.[0]} />
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>${product.price}</p>

      <button onClick={() => addToCart(product)}>
        Add to Cart
      </button>

      <button onClick={() => addToWishlist(product)}>
        Add to Wishlist
      </button>
    </div>
  );
}