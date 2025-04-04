import Image from "next/image";
import { getAllProducts } from "./_utils/_APIs/ProductsAPIs";
import { ProductType } from "./_components/Header/_types/products.type";
import MainProductsCard from "./_components/General/MainProductsCard";
import ProductsPagination from "./_components/General/ProductsPagination";
import Link from "next/link";

export async function generateMetadata() {
  return {
    title: "M Store | Products page",
  };
}

export default async function Home(
  props: {
    searchParams?: Promise<Record<string, string | undefined>>;
  }
) {
  const searchParams = await props.searchParams;
  const page = searchParams?.page ?? "1";
  const products = await getAllProducts();
  const showedProducts = products.slice(
    (parseInt(page!) - 1) * 12,
    parseInt(page!) * 12
  );
  return (
    <section className="min-h-screen">
      <div className="flex items-center px-5 sm:px-20 justify-end mt-4">
        <Link
          href="/product/new"
          className="inline-block px-6 py-3 bg-slate-600 text-white text-lg font-semibold hover:bg-slate-700 hover:text-slate-100"
        >
          Add New Product
        </Link>
      </div>
      <div className="grid py-10 px-5 sm:px-20 max-sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 max-sm:gap-2 sm:gap-4">
        {products.length ? (
          showedProducts.map((product: ProductType) => (
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
      <ProductsPagination productsCount={products.length} />
    </section>
  );
}
