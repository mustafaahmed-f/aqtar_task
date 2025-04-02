import ProductForm from "@/app/_components/General/ProductForm";
import { getSingleProduct } from "@/app/_utils/_APIs/ProductsAPIs";

interface PageProps {
  params: any;
}

async function Page({ params }: PageProps) {
  const product = await getSingleProduct(parseInt(params.id));
  const initialValues = { ...product };
  return (
    <div className="py-10 px-2 sm:px-6">
      <ProductForm initialValues={initialValues} isEdit={true} id={params.id} />
    </div>
  );
}

export default Page;
