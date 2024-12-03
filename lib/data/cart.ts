"use server";

import { cookies } from "next/headers";
import { revalidateTag } from "next/cache";
import { cache } from "react";
import wc from "../config";

export const getCart = cache(async function () {
  const cartKey = cookies().get("wc_cart_key")?.value;

  if (!cartKey) return null;

  try {
    const response = await wc.get(`cart/${cartKey}`);
    return response.data;
  } catch (error) {
    return null;
  }
});

export async function addToCart({
  productId,
  quantity,
  variationId,
}: {
  productId: number;
  quantity: number;
  variationId?: number;
}) {
  let cartKey = cookies().get("wc_cart_key")?.value;

  try {
    if (!cartKey) {
      const response = await wc.post("cart", {});
      cartKey = response.data.cart_key;
      cookies().set("wc_cart_key", cartKey!, {
        maxAge: 60 * 60 * 24 * 7, // 1 week
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
      });
    }

    await wc.post(`cart/add`, {
      cart_key: cartKey,
      product_id: productId,
      quantity,
      variation_id: variationId,
    });

    revalidateTag("cart");
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function updateCartItem({
  itemKey,
  quantity,
}: {
  itemKey: string;
  quantity: number;
}) {
  const cartKey = cookies().get("wc_cart_key")?.value;

  if (!cartKey) {
    throw new Error("No cart found");
  }

  try {
    await wc.put(`cart/item/${itemKey}`, {
      cart_key: cartKey,
      quantity,
    });

    revalidateTag("cart");
  } catch (error: any) {
    throw new Error(error.message);
  }
}

export async function removeCartItem(itemKey: string) {
  const cartKey = cookies().get("wc_cart_key")?.value;

  if (!cartKey) {
    throw new Error("No cart found");
  }

  try {
    await wc.delete(`cart/item/${itemKey}`, {
      cart_key: cartKey,
    });

    revalidateTag("cart");
  } catch (error: any) {
    throw new Error(error.message);
  }
}
