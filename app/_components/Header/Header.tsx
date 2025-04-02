import { getAllProducts } from "@/app/_utils/_APIs/ProductsAPIs";
import ProductsSearchDiv from "./_components/ProductsSearchDiv";

interface HeaderProps {}

async function Header({}: HeaderProps) {
  const products = await getAllProducts();
  return (
    <header className="sm:px-4 px-3 py-2 flex sm:flex-row max-sm:gap-3 flex-col items-center justify-between bg-black text-white">
      <p>M Store</p>
      <ProductsSearchDiv products={products} />
    </header>
  );
}

export default Header;
