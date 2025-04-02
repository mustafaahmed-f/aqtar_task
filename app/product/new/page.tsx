import ProductForm from "@/app/_components/General/ProductForm";

interface PageProps {}

function Page({}: PageProps) {
  const initialValues = {
    title: "",
    price: 0,
    description: "",
    category: "",
    image: "",
  };
  return (
    <div className="py-10 px-2 sm:px-6">
      <ProductForm initialValues={initialValues} isEdit={false} />
    </div>
  );
}

export default Page;
