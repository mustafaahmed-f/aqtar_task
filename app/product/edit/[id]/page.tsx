import ProductForm from "@/app/_components/General/ProductForm";
import { ProductType } from "@/app/_components/Header/_types/products.type";
import { getSingleProduct } from "@/app/_utils/_APIs/ProductsAPIs";

interface PageProps {
  params: Promise<any>;
}

export async function generateMetadata(props: { params: Promise<{ id: string }> }) {
  const params = await props.params;
  const product: ProductType = await getSingleProduct(parseInt(params.id));
  //   console.log("product", product);
  return {
    title: `M Store | Edit Product ${product.title}`,
  };
}

async function Page(props: PageProps) {
  const params = await props.params;
  const product = await getSingleProduct(parseInt(params.id));
  const initialValues = { ...product };
  return (
    <div className="py-10 px-2 sm:px-6">
      <ProductForm initialValues={initialValues} isEdit={true} id={params.id} />
    </div>
  );
}

export default Page;
