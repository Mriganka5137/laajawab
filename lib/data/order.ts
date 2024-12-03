"use server";

import { cache } from "react";
import { getCustomer } from "./customer";
import wc from "../config";

export const retrieveOrder = cache(async function (id: number) {
  try {
    const response = await wc.get(`orders/${id}`);
    return response.data;
  } catch (error) {
    return null;
  }
});

export const listOrders = cache(async function (
  page: number = 1,
  perPage: number = 10
) {
  const customer = await getCustomer();

  if (!customer) {
    return [];
  }

  try {
    const response = await wc.get("orders", {
      params: {
        customer: customer.id,
        page,
        per_page: perPage,
      },
    });
    return response.data;
  } catch (error) {
    return [];
  }
});
