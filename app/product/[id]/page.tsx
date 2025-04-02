import { ProductType } from "@/app/_components/Header/_types/products.type";
import {
  getAllProducts,
  getSingleProduct,
} from "@/app/_utils/_APIs/ProductsAPIs";
import Image from "next/image";
import { parse } from "path";
import BreadCrumb from "./_components/BreadCrumb";
import ProductInfo from "./_components/ProductInfo";

interface PageProps {
  params: any;
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const product: ProductType = await getSingleProduct(parseInt(params.id));
  //   console.log("product", product);
  return {
    title: `M Store | Product ${product.title}`,
  };
}

export async function generateStaticParams() {
  const products = await getAllProducts();
  // console.log(products);
  const ids = products?.map((product: ProductType) => ({
    id: String(product.id),
  }));
  // console.log(ids);
  return ids;
}

async function Page({ params }: PageProps) {
  const { id } = await params;
  const product: ProductType = await getSingleProduct(parseInt(id));

  const breadCrumbOptions = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: product.title as string,
      href: `/product/${id}`,
      current: true,
    },
  ];

  return (
    <section className="flex w-full flex-col">
      <div className="categoryList flex w-full list-none items-center justify-start bg-slate-100 px-2 py-5 sm:gap-3 sm:px-8 md:mx-0 md:gap-16 md:px-20">
        <BreadCrumb breadCrumbOptions={breadCrumbOptions} />
      </div>
      <div className="flex flex-col px-5 py-6 sm:px-20 sm:py-10">
        {/* First section ( image and product info ) */}
        <div className="grid min-h-96 grid-cols-1 max-sm:gap-6 gap-2 sm:grid-cols-2">
          <div className="relative min-h-96 h-full border-e-0 sm:border-e sm:border-slate-300">
            <Image
              src={product.image}
              alt={product.title}
              fill
              className="object-contain"
            />
          </div>
          <div className="my-auto w-full sm:ps-9">
            <ProductInfo
              id={product.id}
              title={product.title}
              price={product.price}
              rating={product.rating}
              category={product.category}
              description={product.description}
            />
          </div>
        </div>
        {/* Second seciton ( description and reviews ) */}
        <div></div>
      </div>
    </section>
  );
}

export default Page;
