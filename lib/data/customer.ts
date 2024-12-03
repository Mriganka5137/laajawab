"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { cache } from "react";
import wc from "../config";
import { CustomerUpdateParams } from "../types";

interface SignUpData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
}

export const getCustomer = cache(async function () {
  const token = cookies().get("wc_customer_token")?.value;

  if (!token) return null;

  try {
    const response = await wc.get("customers/me", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    return null;
  }
});

export async function updateCustomer(data: CustomerUpdateParams) {
  const token = cookies().get("wc_customer_token")?.value;

  if (!token) {
    throw new Error("Not authenticated");
  }

  try {
    const response = await wc.put("customers/me", data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    revalidateTag("customer");
    return response.data;
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function login(email: string, password: string) {
  try {
    // Using WooCommerce API to authenticate
    const response = await wc.post("customers/authentication", {
      username: email,
      password: password,
    });

    if (!response.data || !response.data.token) {
      throw new Error("Invalid credentials");
    }

    // Set the authentication token
    cookies().set("wc_customer_token", response.data.token, {
      maxAge: 60 * 60 * 24 * 7, // 1 week
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
    });

    revalidateTag("customer");
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to login. Please try again.");
  }
}

export async function signup(data: SignUpData) {
  try {
    // Create customer using WooCommerce API

    // console.log(data);
    const response = await wc.post("customers", {
      email: data.email,
      first_name: data.first_name,
      last_name: data.last_name,
      username: data.email,
      password: data.password,
      billing: {
        phone: data.phone,
        email: data.email,
        first_name: data.first_name,
        last_name: data.last_name,
      },
      shipping: {
        first_name: data.first_name,
        last_name: data.last_name,
      },
    });

    if (!response.data) {
      throw new Error("Failed to create account");
    }

    // After successful signup, log the user in
    await login(data.email, data.password);

    return response.data;
  } catch (error: any) {
    if (error.response?.data?.message) {
      throw new Error(error.response.data.message);
    }
    throw new Error("Failed to create account. Please try again.");
  }
}

export async function logout() {
  cookies().delete("wc_customer_token");
  revalidateTag("customer");
}
