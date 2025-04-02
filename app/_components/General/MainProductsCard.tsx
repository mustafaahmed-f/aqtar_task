import Image from "next/image";
import Link from "next/link";
import Rating from "./Rating";
import { ProductType } from "../Header/_types/products.type";
import { FavoriteBorder } from "@mui/icons-material";

interface MainProductsCardProps {
  product: ProductType;
}

function MainProductsCard({ product }: MainProductsCardProps) {
  return (
    <div className="flashSalesCard justify-between w-full flex min-w-36 flex-col rounded-md shadow-[0px_0px_2px_3px_#e0e0e0]">
      <div className="overflow-hidden p-2 text-center sm:p-4">
        <Image
          width={300}
          height={300}
          alt={product.title}
          className="cardZoom w-full"
          src={product.image}
          priority={true}
        />
      </div>
      <div className="flex flex-col items-center justify-between w-full gap-2 p-2 sm:flex-row sm:p-4">
        <div className="flex flex-col items-start justify-center gap-2 text-start">
          <Link
            href={`/product/${product.id}`}
            className="cursor-pointer whitespace-break-spaces text-wrap text-sm font-bold text-black hover:underline"
          >
            {product.title}
          </Link>
          <p className="text-xs text-textGrey">{product.category}</p>
          <div className="flex flex-row flex-wrap items-center justify-start gap-2">
            <Rating ratingValue={product.rating.rate} />
            <p className="text-textGrey">{product.rating.rate}</p>
          </div>
          <div className="flex w-full flex-row items-center justify-start gap-[2px] sm:gap-3">
            <p className="text-base text-red-600 sm:text-lg">
              $ {product.price}
            </p>
          </div>
        </div>
        <div className="flex h-full flex-row items-start justify-center"></div>
      </div>
    </div>
  );
}

export default MainProductsCard;
