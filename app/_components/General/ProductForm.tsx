"use client";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { productYupSchema } from "@/app/_utils/Validations/productYupSchema";
import { useState } from "react";
import { AddProductAction } from "@/app/_utils/_ServerActions/AddProductAction";
import { EditProductAction } from "@/app/_utils/_ServerActions/EditProductAction";
import { useRouter } from "next/navigation";
interface ProductFormProps {
  initialValues: any;
  id?: number;
  isEdit?: boolean;
}

function ProductForm({ initialValues, isEdit = false, id }: ProductFormProps) {
  const { 0: isLoading, 1: setIsLoading } = useState<boolean>(false);
  const route = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(productYupSchema),
    defaultValues: initialValues,
    reValidateMode: "onChange",
    criteriaMode: "firstError",
  });

  async function onSubmit(data: any) {
    try {
      setIsLoading(true);
      const response = isEdit
        ? await EditProductAction({ ...data, id })
        : await AddProductAction({ ...data, id: 0 });

      if (response?.status === 200) {
        // Optionally, you can redirect or refresh the page here
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md "
    >
      {/* Title Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Title</label>
        <input
          type="text"
          {...register("title")}
          className="w-full p-2 border rounded"
        />
        {errors.title && typeof errors.title.message === "string" && (
          <p className="text-red-500 text-sm">{errors.title.message}</p>
        )}
      </div>

      {/* Description Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Description</label>
        <textarea
          {...register("description")}
          className="w-full p-2 border rounded"
        />
        {errors.description &&
          typeof errors.description.message === "string" && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
      </div>

      {/* Image URL Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Image URL</label>
        <input
          type="text"
          {...register("image")}
          className="w-full p-2 border rounded"
        />
        {errors.image && typeof errors.image.message === "string" && (
          <p className="text-red-500 text-sm">{errors.image.message}</p>
        )}
      </div>

      {/* Price Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Price ($)</label>
        <input
          type="number"
          {...register("price")}
          className="w-full p-2 border rounded"
        />
        {errors.price && typeof errors.price.message === "string" && (
          <p className="text-red-500 text-sm">{errors.price.message}</p>
        )}
      </div>

      {/* Category Field */}
      <div className="mb-4">
        <label className="block text-gray-700">Category</label>
        <input
          type="text"
          {...register("category")}
          className="w-full p-2 border rounded"
        />
        {errors.category && typeof errors.category.message === "string" && (
          <p className="text-red-500 text-sm">{errors.category.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-cyan-500 text-white py-2 rounded hover:bg-cyan-600"
      >
        {isEdit ? "Update Product" : "Add New Product"}
      </button>
    </form>
  );
}

export default ProductForm;
