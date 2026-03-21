"use client";
import { useEffect, useState } from "react";
import { getProducts } from "../../lib/api";
import ProductCard from "../../components/ProductCard";

export default function ProductsPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

useEffect(() => {
  getProducts()
    .then(res => {
      console.log(res.data); // 👈 check structure

      // FIX HERE
      setProducts(res.data.products || res.data);
    })
    .catch(err => console.error(err))
    .finally(() => setLoading(false));
}, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="grid grid-cols-4 gap-4">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}