import ProductSearchResult from "./ProductSearchResult";

interface AutoCompleteDialogProps {
  productsArr: { prodName: string; prodId: number }[];
}

function AutoCompleteDialog({ productsArr }: AutoCompleteDialogProps) {
  return (
    <div
      className="autoCompleteDialog bg-slate-300 overflow-x-hidden overflow-y-scroll rounded-bl-md rounded-br-md z-50 flex flex-col absolute translate-y-[104%] -bottom-0 left-0 w-full max-h-48 sm:max-h-60"
      suppressHydrationWarning
    >
      {!productsArr.length && (
        <p className="py-3 px-4">No results were found.</p>
      )}
      {productsArr.map((el, i) => (
        <ProductSearchResult
          index={i}
          key={el.prodId}
          prodId={el.prodId}
          prodName={el.prodName}
        />
      ))}
    </div>
  );
}

export default AutoCompleteDialog;
