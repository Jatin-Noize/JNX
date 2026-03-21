import Link from "next/link";

export default function ProductCard({ product }) {
  return (
   <div className="bg-gray-900 text-white rounded-2xl shadow-lg p-4 hover:shadow-xl transition duration-300 border border-gray-800">
  
  {/* IMAGE */}
  <div className="bg-gray-800 rounded-xl p-4 flex items-center justify-center">
    <img
      src={product.thumbnail || product.images?.[0]}
      className="h-40 object-contain hover:scale-105 transition duration-300"
    />
  </div>

  {/* CONTENT */}
  <div className="mt-4 space-y-2">
    <h2 className="text-lg font-semibold line-clamp-2">
      {product.title}
    </h2>

    <p className="text-gray-400 text-sm">
      {product.description.slice(0, 60)}...
    </p>

    <p className="text-xl font-bold text-green-400">
      ${product.price}
    </p>
  </div>

  {/* BUTTON */}
  <Link
    href={`/products/${product.id}`}
    className="block mt-4 text-center bg-white text-black py-2 rounded-lg font-medium hover:bg-gray-200 transition"
  >
    View Details
  </Link>

</div>
  );
}