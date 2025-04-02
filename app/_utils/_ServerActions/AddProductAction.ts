"use server";

import { ProductType } from "@/app/_components/Header/_types/products.type";
import { addProduct } from "../_APIs/ProductsAPIs";

export async function AddProductAction(product: ProductType) {
  try {
    const response = await addProduct(product);
    if (response?.status !== 200) {
      throw new Error("Failed to add product");
    }
    return response;
  } catch (error) {
    console.error("Error adding product:", error);
    return null;
  }
}
