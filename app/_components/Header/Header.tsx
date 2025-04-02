import { getAllProducts } from "@/app/_utils/_APIs/ProductsAPIs";
import ProductsSearchDiv from "./_components/ProductsSearchDiv";
import Link from "next/link";

interface HeaderProps {}

async function Header({}: HeaderProps) {
  const products = await getAllProducts();
  return (
    <header className="px-5 sm:px-20 py-4 flex sm:flex-row max-sm:gap-3 flex-col items-center justify-between bg-black text-white">
      <Link href="/">M Store</Link>
      <ProductsSearchDiv products={products} />
    </header>
  );
}

export default Header;
