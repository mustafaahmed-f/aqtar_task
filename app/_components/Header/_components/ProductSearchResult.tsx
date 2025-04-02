import Link from "next/link";

interface ProductSearchResultProps {
  prodName: string;
  prodId: number;
  index: number;
}

function ProductSearchResult({
  prodName,
  prodId,
  index,
}: ProductSearchResultProps) {
  return (
    <Link
      href={`/product/${String(prodId)}`}
      className={`py-3 px-4 ${
        index % 2 === 0 ? "bg-slate-400" : "bg-slate-300"
      } hover:bg-slate-500`}
    >
      {prodName}
    </Link>
  );
}

export default ProductSearchResult;
