import {
  BenefitsSection,
  CategoriesShowcase,
  NewsletterSection,
  ProcessSection,
} from "@/components/landing/categories-section";
import { FeaturedProducts } from "@/components/landing/featured-products";
import { Suspense } from "react";

import { Testimonials } from "@/components/landing/testimonials";

import Hero from "@/components/landing/hero";
import { Skeleton } from "@/components/ui/skeleton";
import {
  getBestSellers,
  getCategories,
  getFeaturedProducts,
} from "@/lib/data/products";
import DynamicHero from "@/components/landing/dynamic-hero";

// Loading components for Suspense fallbacks
const ProductsSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    {[...Array(4)].map((_, i) => (
      <div key={i} className="space-y-4">
        <Skeleton className="aspect-square rounded-lg" />
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    ))}
  </div>
);

const CategoriesSkeleton = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {[...Array(3)].map((_, i) => (
      <Skeleton key={i} className="aspect-square rounded-lg" />
    ))}
  </div>
);

// Async Components to fetch data
async function FeaturedProductsWrapper() {
  const products = await getFeaturedProducts();
  return <FeaturedProducts products={products} />;
}

async function CategoriesWrapper() {
  const categories = await getCategories();
  return <CategoriesShowcase categories={categories} />;
}

// Main page component
export default async function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero section with best sellers */}
      {/* <Hero /> */}
      <DynamicHero />

      {/* Process section is static, no data needed */}
      {/* <ProcessSection /> */}

      {/* Categories with loading state */}
      {/* <Suspense fallback={<CategoriesSkeleton />}>
        <CategoriesWrapper />
      </Suspense> */}

      {/* Featured products with loading state */}
      {/* <Suspense fallback={<ProductsSkeleton />}>
        <FeaturedProductsWrapper />
      </Suspense> */}

      <BenefitsSection />
      <Testimonials />
      <NewsletterSection />
    </div>
  );
}

// Generate metadata for the page
export const metadata = {
  title: "Laajawab Spices - The Art of Effortless Cooking",
  description:
    "Experience the finest blend of Northeast Indian Spices and Continental Herbs. Quick marination, authentic flavors.",
};
