"use client";
import React, { useState, Suspense } from "react";
import {
  AlertCircle,
  Star,
  Truck,
  Plus,
  Minus,
  Share2,
  Facebook,
  Twitter,
  ZoomIn,
} from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";

// Types
interface Image {
  id: number;
  src: string;
  alt: string;
}

interface Review {
  id: number;
  rating: number;
  reviewer: string;
  review: string;
  date: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  short_description: string;
  price: string;
  regular_price: string;
  sale_price: string;
  on_sale: boolean;
  images: Image[];
  average_rating: string;
  rating_count: number;
  in_stock: boolean;
  stock_quantity: number | null;
  variations: any[];
  related_ids: number[];
}

// Loading States
const ProductSkeleton = () => (
  <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
    <div className="aspect-square rounded-lg bg-gray-200 animate-pulse" />
    <div className="space-y-4">
      <div className="h-8 w-2/3 bg-gray-200 rounded animate-pulse" />
      <div className="h-6 w-1/3 bg-gray-200 rounded animate-pulse" />
      <div className="h-24 w-full bg-gray-200 rounded animate-pulse" />
    </div>
  </div>
);

// Error Boundary
class ProductErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Alert variant="destructive">
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>
            Something went wrong loading the product. Please try again later.
          </AlertDescription>
        </Alert>
      );
    }

    return this.props.children;
  }
}

// Enhanced Gallery Component with Zoom
const ProductGallery = ({ images }: { images: Image[] }) => {
  const [mainImage, setMainImage] = useState(images[0]?.src);
  const [isZoomed, setIsZoomed] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isZoomed) {
      const { left, top, width, height } =
        e.currentTarget.getBoundingClientRect();
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;
      setMousePosition({ x, y });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      <div
        className="relative aspect-square overflow-hidden rounded-lg bg-gray-100"
        onMouseEnter={() => setIsZoomed(true)}
        onMouseLeave={() => setIsZoomed(false)}
        onMouseMove={handleMouseMove}
      >
        <img
          src={mainImage || "/api/placeholder/600/600"}
          alt="Main product image"
          className={`h-full w-full object-cover object-center transition-transform duration-200 ${
            isZoomed ? "scale-150" : ""
          }`}
          style={
            isZoomed
              ? {
                  transformOrigin: `${mousePosition.x}% ${mousePosition.y}%`,
                }
              : undefined
          }
        />
        {!isZoomed && (
          <button
            className="absolute bottom-4 right-4 p-2 bg-white rounded-full shadow-lg"
            onClick={() => setIsZoomed(true)}
          >
            <ZoomIn className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="grid grid-cols-4 gap-4">
        {images.map((image) => (
          <button
            key={image.id}
            onClick={() => setMainImage(image.src)}
            className={`aspect-square overflow-hidden rounded-lg bg-gray-100 ${
              mainImage === image.src ? "ring-2 ring-blue-500" : ""
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="h-full w-full object-cover object-center"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

// Add to Cart Form
const AddToCartForm = ({ product }: { product: Product }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedVariant, setSelectedVariant] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const handleAddToCart = async () => {
    setIsAdding(true);
    // Implement your add to cart logic here
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setIsAdding(false);
  };

  return (
    <div className="space-y-4">
      {product.variations.length > 0 && (
        <Select value={selectedVariant} onValueChange={setSelectedVariant}>
          <SelectTrigger>
            <SelectValue placeholder="Select variant" />
          </SelectTrigger>
          <SelectContent>
            {product.variations.map((variant) => (
              <SelectItem key={variant.id} value={variant.id.toString()}>
                {variant.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      )}

      <div className="flex items-center gap-4">
        <div className="flex items-center rounded-lg border">
          <button
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
            className="p-2 hover:bg-gray-100"
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="px-4 py-2">{quantity}</span>
          <button
            onClick={() => setQuantity(quantity + 1)}
            className="p-2 hover:bg-gray-100"
            disabled={
              product.stock_quantity !== null &&
              quantity >= product.stock_quantity
            }
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>

        <Button
          onClick={handleAddToCart}
          disabled={!product.in_stock || isAdding}
          className="flex-1"
        >
          {isAdding ? "Adding..." : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

// Social Share
const SocialShare = ({ product }: { product: Product }) => {
  const shareUrl = typeof window !== "undefined" ? window.location.href : "";

  const shareLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: `https://www.facebook.com/sharer/sharer.php?u=${shareUrl}`,
    },
    {
      name: "Twitter",
      icon: Twitter,
      url: `https://twitter.com/intent/tweet?url=${shareUrl}&text=${product.name}`,
    },
    {
      name: "WhatsApp",
      icon: Share2,
      url: `https://wa.me/?text=${product.name} ${shareUrl}`,
    },
  ];

  return (
    <div className="flex items-center gap-4">
      <span className="text-sm text-gray-600">Share:</span>
      {shareLinks.map((link) => (
        <a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <link.icon className="h-4 w-4" />
        </a>
      ))}
    </div>
  );
};

// Reviews Section
const ReviewsSection = ({ product }: { product: Product }) => {
  // This would typically come from an API
  const reviews: Review[] = [
    {
      id: 1,
      rating: 5,
      reviewer: "John Doe",
      review: "Great product! Exactly as described.",
      date: "2024-01-15",
    },
    // Add more reviews...
  ];

  return (
    <div className="mt-8">
      <h3 className="text-lg font-semibold mb-4">Customer Reviews</h3>
      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4">
            <div className="flex items-center gap-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < review.rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-gray-600">
                by {review.reviewer} on{" "}
                {new Date(review.date).toLocaleDateString()}
              </span>
            </div>
            <p className="mt-2">{review.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Related Products
const RelatedProducts = ({ relatedIds }: { relatedIds: number[] }) => {
  // This would typically fetch related products data
  return (
    <div className="mt-12">
      <h2 className="text-2xl font-bold mb-6">Related Products</h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {relatedIds.slice(0, 4).map((id) => (
          <div key={id} className="rounded-lg border p-4">
            <div className="aspect-square bg-gray-200 rounded-lg mb-4" />
            <div className="h-4 w-2/3 bg-gray-200 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
};

// Main Component
export default function ProductDetails({ product }: { product: Product }) {
  return (
    <ProductErrorBoundary>
      <Suspense fallback={<ProductSkeleton />}>
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <ProductGallery images={product.images} />
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold">{product.name}</h1>

                {/* Rating */}
                {Number(product.average_rating) > 0 && (
                  <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${
                            i < Math.floor(Number(product.average_rating))
                              ? "fill-yellow-400 text-yellow-400"
                              : "fill-gray-200 text-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-sm text-gray-600">
                      ({product.rating_count} reviews)
                    </span>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="flex items-baseline gap-4">
                <p className="text-3xl font-bold">
                  ₹{product.sale_price || product.price}
                </p>
                {product.on_sale && (
                  <p className="text-lg text-gray-500 line-through">
                    ₹{product.regular_price}
                  </p>
                )}
              </div>

              {/* Add to Cart */}
              <AddToCartForm product={product} />

              {/* Stock Status */}
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Stock Status</AlertTitle>
                <AlertDescription>
                  {product.in_stock ? (
                    <span className="text-green-600">In Stock</span>
                  ) : (
                    <span className="text-red-600">Out of Stock</span>
                  )}
                  {product.stock_quantity &&
                    ` - ${product.stock_quantity} units available`}
                </AlertDescription>
              </Alert>

              {/* Social Share */}
              <SocialShare product={product} />

              {/* Description */}
              <div>
                <h3 className="text-lg font-semibold">Description</h3>
                <div
                  className="mt-2 prose prose-sm"
                  dangerouslySetInnerHTML={{ __html: product.description }}
                />
              </div>

              {/* Shipping Info */}
              <Alert>
                <Truck className="h-4 w-4" />
                <AlertTitle>Free Shipping</AlertTitle>
                <AlertDescription>On orders above ₹499</AlertDescription>
              </Alert>
            </div>
          </div>

          {/* Reviews */}
          <ReviewsSection product={product} />

          {/* Related Products */}
          <RelatedProducts relatedIds={product.related_ids} />
        </div>
      </Suspense>
    </ProductErrorBoundary>
  );
}
