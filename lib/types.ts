// lib/types.ts
export interface Product {
  id: number;
  name: string;
  slug: string;
  permalink: string;
  date_created: string;
  price: string;
  regular_price: string;
  sale_price: string;
  description: string;
  short_description: string;
  categories: Array<{
    id: number;
    name: string;
    slug: string;
  }>;
  images: Array<{
    id: number;
    src: string;
    alt: string;
  }>;
  variations: number[];
  attributes: Array<{
    id: number;
    name: string;
    options: string[];
  }>;
}

export interface ProductsQueryParams {
  page?: number;
  perPage?: number;
  search?: string;
  category?: number;
  tag?: number;
  status?: string;
  featured?: boolean;
  orderby?: string;
  order?: "asc" | "desc";
}

export interface Customer {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  role: string;
  username: string;
  billing: Address;
  shipping: Address;
}

export interface Address {
  first_name: string;
  last_name: string;
  company: string;
  address_1: string;
  address_2: string;
  city: string;
  state: string;
  postcode: string;
  country: string;
  email: string;
  phone: string;
}

export interface CustomerUpdateParams {
  email?: string;
  first_name?: string;
  last_name?: string;
  billing?: Partial<Address>;
  shipping?: Partial<Address>;
}
