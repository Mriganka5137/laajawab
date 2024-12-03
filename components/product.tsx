// Types for product data
interface ProductImage {
  id: number;
  src: string;
  alt: string;
  position: number;
}

interface ProductCategory {
  id: number;
  name: string;
  slug: string;
}

interface Product {
  id: number;
  name: string;
  slug: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  average_rating: string;
  rating_count: number;
  images: ProductImage[];
  categories: ProductCategory[];
  stock_quantity: number | null;
  in_stock: boolean;
}

// Helper functions to process product data
export const formatPrice = (price: string) => {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
  }).format(Number(price));
};

export const calculateDiscount = (regularPrice: string, salePrice: string) => {
  const regular = Number(regularPrice);
  const sale = Number(salePrice);
  if (regular && sale && regular > sale) {
    return Math.round(((regular - sale) / regular) * 100);
  }
  return 0;
};

// React Components
import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

export const ProductCard = ({ product }: { product: Product }) => {
  const discount = calculateDiscount(product.regular_price, product.sale_price);

  return (
    <Link
      href={`/product/${product.slug}`}
      className="group relative rounded-lg border p-4 hover:shadow-lg transition-shadow bg-background"
    >
      {/* Sale badge */}
      {product.on_sale && discount > 0 && (
        <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-sm">
          {discount}% OFF
        </div>
      )}

      {/* Image */}
      <div className="aspect-square overflow-hidden rounded-lg">
        <img
          src={product.images[0]?.src || "/api/placeholder/400/400"}
          alt={product.images[0]?.alt || product.name}
          className="h-full w-full object-cover object-center group-hover:scale-105 transition-transform"
        />
      </div>

      {/* Product details */}
      <div className="mt-4 space-y-2">
        <h3 className="text-sm font-medium text-white line-clamp-2">
          {product.name}
        </h3>

        {/* Rating */}
        {Number(product.average_rating) > 0 && (
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm text-white">
              {product.average_rating} ({product.rating_count})
            </span>
          </div>
        )}

        {/* Price */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-bold text-white">
            {formatPrice(product.sale_price || product.price)}
          </span>
          {product.on_sale && (
            <span className="text-sm text-gray-500 line-through">
              {formatPrice(product.regular_price)}
            </span>
          )}
        </div>

        {/* Stock status */}
        {!product.in_stock && (
          <p className="text-sm text-red-600">Out of stock</p>
        )}
      </div>
    </Link>
  );
};

export const ProductGrid = ({ products }: { products: Product[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

// Example usage:
export const ProductCatalog = ({ products }: { products: Product[] }) => {
  // console.log(products);
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">Our Products</h2>
      <ProductGrid products={products} />
    </div>
  );
};
