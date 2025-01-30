import ProductCard from "@/components/ui/productCard/ProductCard";
import SectionTitle from "@/components/ui/shared/sectionTitle/SectionTitle";
import { Product } from "@/types";

const fetchProducts = async () => {
  const res = await fetch("https://beauty-luxe-server.vercel.app/products", {
    cache: "no-store", 
  });
  return res.json();
};

const Products = async () => {
  const data = await fetchProducts();

  return (
    <div className="CContainer">
      <SectionTitle
        title="Our Products"
        desc="Discover our premium collection of high-quality products, carefully curated to meet your needs. Shop now for the best deals!"
      />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-10">
        {data?.product.map((product: Product) => (
          <ProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Products;
