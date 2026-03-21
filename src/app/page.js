"use client";

import { useEffect, useState } from "react";
import { getProducts } from "../lib/api";
import ProductCard from "../components/ProductCard";
import Navbar from "../components/Navbar";

export default function HomePage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProducts()
      .then(res => setProducts(res.data.slice(0, 8))) // only featured
      .catch(err => console.log(err))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <section className="bg-gray-100 p-10 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to My Store 🛍️
        </h1>
        <p className="text-gray-600 mb-6">
          Discover the best products at unbeatable prices
        </p>
        <a
          href="/products"
          className="bg-black text-white px-6 py-2 rounded"
        >
          Shop Now
        </a>
      </section>

      {/* FEATURED PRODUCTS */}
      <section className="p-8">
        <h2 className="text-2xl font-semibold mb-6">
          Featured Products
        </h2>

        {loading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}