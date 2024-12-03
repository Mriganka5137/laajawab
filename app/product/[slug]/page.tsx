import ProductDetails from "@/components/product/product-details";
import { getProductBySlug, getProductsById } from "@/lib/data/products";
import React from "react";

const page = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getProductBySlug(params.slug);

  return (
    <div className=" py-20">
      <ProductDetails product={data} />
    </div>
  );
};

export default page;
