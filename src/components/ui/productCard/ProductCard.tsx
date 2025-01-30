import { Product } from "@/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCard = ({ product } : {product : Product}) => {
  const { name, image, description, stock, price, category, rating } = product;

  return (
    <div
      className={`rounded-lg shadow-md hover:shadow-lg transition-shadow border`}
    >
      <Image
        width={100}
        height={100}
        alt="image"
        src={image}
        className="h-56 w-full object-cover rounded-md mb-1"
      />
      <div className="p-4">
        <Link href={`/products/${product?._id}`}>
          <h2 className="text-lg font-semibold mb-2 underline cursor-pointer">
            {name?.length < 20 ? name : name?.slice(0, 20)}...
          </h2>
        </Link>
        <p className="mb-3">
          {description?.length < 30
            ? description?.length
            : description.slice(0, 30)}
          ...
        </p>

        <div className="flex justify-between items-center">
          <p className="">${price}</p>
          <p className="text-sm ">Stock: {stock}</p>
        </div>
        <div className="flex justify-between items-center mt-3">
          <p className="mb-3">{category}</p>
          <p className=" mb-3">Rating : {rating}</p>
        </div>

        <div className="flex flex-col justify-between space-y-2">
          <button className="CBtnBG">Add to cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
