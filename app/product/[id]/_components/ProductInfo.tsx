import Rating from "@/app/_components/General/Rating";
import Link from "next/link";

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
        <button className="rounded-md cursor-pointer bg-red-500 px-4 py-2 text-sm font-semibold text-white hover:bg-red-600 ms-3">
          Delete
        </button>
      </div>
    </div>
  );
}

export default ProductInfo;
