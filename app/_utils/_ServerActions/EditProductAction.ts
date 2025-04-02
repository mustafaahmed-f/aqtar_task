"use server";

import { ProductType } from "@/app/_components/Header/_types/products.type";
import { updateProduct } from "../_APIs/ProductsAPIs";

export async function EditProductAction(product: ProductType) {
  try {
    const response = await updateProduct(product.id, product);
    if (response?.status !== 200) {
      throw new Error("Failed to add product");
    }
    return response;
  } catch (error) {
    console.error("Error updating product:", error);
    return null;
  }
}
