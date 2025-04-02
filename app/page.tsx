import Image from "next/image";
import { getAllProducts } from "./_utils/_APIs/ProductsAPIs";
import { ProductType } from "./_components/Header/_types/products.type";
import MainProductsCard from "./_components/General/MainProductsCard";

export default async function Home({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const page = searchParams.page || 1;
  const products = await getAllProducts();
  return (
    <div className="grid py-10 px-5 sm:px-20 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-sm:gap-2 sm:gap-4">
      {products.length ? (
        products.map((product: ProductType) => (
          <MainProductsCard product={product} key={product.id} />
        ))
      ) : (
        <div className="w-full col-span-full my-7">
          <p className="text-center text-red-500 font-semibold">
            No products found
          </p>
        </div>
      )}
    </div>
  );
}
