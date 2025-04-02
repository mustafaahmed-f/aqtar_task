import ProductsSearchDiv from "./_components/ProductsSearchDiv";

interface HeaderProps {}

function Header({}: HeaderProps) {
  return (
    <header className="sm:px-4 px-3 py-2 flex items-center justify-between bg-black text-white">
      <p>M Store</p>
      <ProductsSearchDiv />
    </header>
  );
}

export default Header;
