import { Product } from "@/types";
import Image from "next/image";
import { notFound } from "next/navigation";

async function getProduct(id: string): Promise<Product | null> {
  try {
    const res = await fetch(
      `https://beauty-luxe-server.vercel.app/product/${id}`,
      {
        next: { revalidate: 60 },
      }
    );
    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

// ✅ Product Details Page Component
export default async function ProductDetails({
  params,
}: {
  params: { id: string };
}) {
  const product = await getProduct(params.id);

  if (!product) {
    return notFound();
  }

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-3 border">
      <Image
        width={100}
        height={100}
        alt="image"
        src={product.image}
        className="h-56 w-full object-cover rounded-md mb-1"
      />
      <h1 className="text-3xl font-bold mt-4">{product.name}</h1>
      <p className="mt-2">{product.description}</p>
      <p className="text-lg font-semibold mt-2">Price: ${product.price}</p>
      <p className="text-sm ">Category: {product.category}</p>
      <p className="text-sm ">Rating: ⭐ {product.rating}</p>
      <p className="text-sm ">
        Stock: {product.stock > 0 ? "Available" : "Out of Stock"}
      </p>
      <p className="text-sm ">Seller Email: {product.sellerEmail}</p>

      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
        Add to Cart
      </button>
    </div>
  );
}
