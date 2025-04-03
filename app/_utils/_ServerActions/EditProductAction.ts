"use server";

import { ProductType } from "@/app/_components/Header/_types/products.type";
import { updateProduct } from "../_APIs/ProductsAPIs";
import { revalidatePath } from "next/cache";

export async function EditProductAction(product: ProductType) {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/${product.id}`,
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to update product");
    }
    const data = await response.json();
    revalidatePath("/");
    return {
      status: response.status,
      message: "Product updated successfully",
      data: data,
    };
  } catch (error) {
    console.error("Error updating product:", error);
    return {
      status: 500,
      message: "Failed to update product",
      error: error,
    };
  }
}
