"use server";

import { ProductType } from "@/app/_components/Header/_types/products.type";
import { revalidatePath } from "next/cache";

export async function AddProductAction(product: ProductType) {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });
    if (!response.ok) {
      throw new Error("Failed to add product");
    }
    const data = await response.json();
    revalidatePath("/");
    return {
      status: response.status,
      message: "Product added successfully",
      data: data,
    };
  } catch (error) {
    console.error("Error adding product:", error);
    return {
      status: 500,
      message: "Failed to add product",
    };
  }
}
