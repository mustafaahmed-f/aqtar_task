import { ProductType } from "@/app/_components/Header/_types/products.type";

export async function getAllProducts() {
  try {
    const response = await fetch("https://fakestoreapi.com/products", {
      method: "GET",
      next: {
        revalidate: 0,
        // revalidate: 1000 * 60 * 60 * 24,
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error);
    return null;
  }
}

export async function getSingleProduct(id: number) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "GET",
      next: {
        revalidate: 1000 * 60 * 60 * 24,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
}

// export async function addProduct(product: ProductType) {
//   try {
//     const response = await fetch("https://fakestoreapi.com/products", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });
//     if (!response.ok) {
//       throw new Error("Failed to add product");
//     }
//     const data = await response.json();
//     return {
//       status: response.status,
//       message: "Product added successfully",
//       data: data,
//     };
//   } catch (error) {
//     console.error("Error adding product:", error);
//     return null;
//   }
// }

// export async function updateProduct(id: number, product: ProductType) {
//   try {
//     const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
//       method: "PUT",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(product),
//     });

//     if (!response.ok) {
//       throw new Error("Failed to update product");
//     }
//     const data = await response.json();
//     return {
//       status: response.status,
//       message: "Product updated successfully",
//       data: data,
//     };
//   } catch (error) {
//     console.error("Error updating product:", error);
//     return null;
//   }
// }

export async function deleteProduct(id: number) {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to delete product");
    }
    // const finalResponse = await response.json();
    // console.log("Respone :", finalResponse);
    return { status: response.status, message: "Product deleted successfully" };
  } catch (error) {
    console.error("Error deleting product:", error);
    return null;
  }
}
