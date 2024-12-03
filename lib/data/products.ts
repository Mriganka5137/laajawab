// lib/actions/products.ts
"use server";

import { cache } from "react";
import wc from "../config";
import { ProductsQueryParams } from "../types";

// Helper function to get all products (internal use)
async function fetchAllProducts(params = {}) {
  let allProducts: any[] = [];
  let page = 1;
  let hasMore = true;

  while (hasMore) {
    try {
      const response = await wc.get("products", {
        params: {
          page,
          per_page: 100, // Maximum allowed per page
          ...params,
        },
      });

      const products = response.data;

      if (products.length > 0) {
        allProducts = [...allProducts, ...products];
      }

      // Check if there are more pages
      const totalPages = parseInt(response.headers["x-wp-totalpages"]);
      hasMore = page < totalPages;
      page++;
    } catch (error) {
      console.error("Error fetching products:", error);
      hasMore = false;
    }
  }

  return allProducts;
}

// Get products by ID
export const getProductsById = cache(async function (ids: number[]) {
  try {
    const response = await wc.get("products", {
      params: {
        include: ids,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products by ID:", error);
    return null;
  }
});

// Get product by slug
export const getProductBySlug = cache(async function (slug: string) {
  try {
    const response = await wc.get("products", {
      params: {
        slug,
      },
    });
    return response.data[0];
  } catch (error) {
    console.error("Error fetching product by slug:", error);
    return null;
  }
});

// Get paginated products list
export const getProductsList = async function ({
  page = 1,
  perPage = 10,
  ...params
}: ProductsQueryParams) {
  try {
    // If we need all products (perPage === -1)
    if (perPage === -1) {
      const allProducts = await fetchAllProducts(params);
      return {
        products: allProducts,
        total: allProducts.length,
        totalPages: 1,
      };
    }

    // Regular pagination
    const response = await wc.get("products", {
      params: {
        page,
        per_page: perPage,
        ...params,
      },
    });

    return {
      products: response.data,
      total: parseInt(response.headers["x-wp-total"]),
      totalPages: parseInt(response.headers["x-wp-totalpages"]),
    };
  } catch (error) {
    console.error("Error fetching products list:", error);
    return {
      products: [],
      total: 0,
      totalPages: 0,
    };
  }
};

// Get all products (no pagination)
export const getAllProducts = cache(async function (params = {}) {
  try {
    const allProducts = await fetchAllProducts(params);
    return {
      products: allProducts,
      total: allProducts.length,
    };
  } catch (error) {
    console.error("Error fetching all products:", error);
    return {
      products: [],
      total: 0,
    };
  }
});

// // Get featured products
// export const getFeaturedProducts = cache(async function () {
//   try {
//     const response = await wc.get("products", {
//       params: {
//         featured: true,
//       },
//     });
//     return response.data;
//   } catch (error) {
//     console.error("Error fetching featured products:", error);
//     return [];
//   }
// });

// Get products by category
export const getProductsByCategory = cache(async function (categoryId: number) {
  try {
    const response = await wc.get("products", {
      params: {
        category: categoryId,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching products by category:", error);
    return [];
  }
});

// Search products
export const searchProducts = cache(async function (searchTerm: string) {
  try {
    const response = await wc.get("products", {
      params: {
        search: searchTerm,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error searching products:", error);
    return [];
  }
});

export const getFeaturedProducts = async () => {
  try {
    const response = await wc.get("products", {
      params: {
        featured: true,
        per_page: 6,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching featured products:", error);
    return [];
  }
};

export const getBestSellers = async () => {
  try {
    const response = await wc.get("products", {
      params: {
        orderby: "popularity",
        per_page: 8,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching bestsellers:", error);
    return [];
  }
};

export const getCategories = async () => {
  try {
    const response = await wc.get("products/categories", {
      params: {
        per_page: 100,
        hide_empty: true,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
};

export const getNewArrivals = async () => {
  try {
    const response = await wc.get("products", {
      params: {
        orderby: "date",
        order: "desc",
        per_page: 4,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching new arrivals:", error);
    return [];
  }
};
