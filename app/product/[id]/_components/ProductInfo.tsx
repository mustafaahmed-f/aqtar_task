"use client";
import Rating from "@/app/_components/General/Rating";
import { deleteProduct } from "@/app/_utils/_APIs/ProductsAPIs";
import Link from "next/link";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

interface ProductInfoProps {
  title: string;
  price: number;
  description: string;
  category: string;
  rating: {
    rate: number;
    count: number;
  };
  id: number;
}

function ProductInfo({
  title,
  price,
  description,
  category,
  rating,
  id,
}: ProductInfoProps) {
  const route = useRouter();
  async function handleDelete() {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      // Call API to delete product
      try {
        const response = await deleteProduct(id);
        if (response?.status === 200) {
          // Optionally, you can redirect or refresh the page here
          Swal.fire("Deleted!", "Your product has been deleted.", "success");
          route.push("/");
        } else {
          toast.error("Failed to delete product");
        }
      } catch (error) {
        Swal.fire("Error!", "Something went wrong.", "error");
      }
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <h1 className="text-2xl font-bold text-slate-800 mb-3">{title}</h1>
      <p className="text-xl font-semibold text-slate-600">${price}</p>
      <p className="text-sm text-slate-500">{description}</p>
      <p className="text-sm text-slate-500">
        Category:{" "}
        <span className="font-semibold text-slate-700">{category}</span>
      </p>
      <div className="text-sm text-slate-500 flex items-center gap-2 mb-0">
        Rating:{" "}
        <span className="font-semibold text-slate-700 me-3">
          {rating.rate} ({rating.count})
        </span>
        <Rating ratingValue={rating.rate} />
      </div>
      <div>
        <Link
          href={`/product/edit/${id}`}
          className="rounded-md cursor-pointer bg-cyan-500 px-4 py-2 text-sm font-semibold text-white hover:bg-cyan-600"
        >
          Update
        </Link>
        <button
          onClick={handleDelete}
          className="rounded-md cursor-pointer bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 ms-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
