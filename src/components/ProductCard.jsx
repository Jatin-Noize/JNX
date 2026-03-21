import Link from "next/link";

export default function ProductCard({ product }) {
  return (
    <div className="border p-4">
      <img src={product.thumbnail || product.images?.[0]} className="h-40 object-contain" />
      <h2>{product.title}</h2>
      <p>${product.price}</p>
      <p>{product.description.slice(0, 50)}...</p>

      <Link href={`/products/${product.id}`}>
        View Details
      </Link>
    </div>
  );
}