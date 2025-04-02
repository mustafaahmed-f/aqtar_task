"use client";

import { Trie } from "@/app/_utils/_DataStructures/Trie";
import { ProductType } from "../_types/products.type";
import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import AutoCompleteDialog from "./AutoCompleteDialog";
import { KeyboardArrowDownOutlined, SearchOutlined } from "@mui/icons-material";
import CloseIcon from "@mui/icons-material/Close";

interface ProductsSearchDivProps {
  products: ProductType[];
}

function ProductsSearchDiv({ products }: ProductsSearchDivProps) {
  const { 0: searchVal, 1: setSearchVal } = useState<string>("");
  const { 0: showAutoComplete, 1: setShowAutoComplete } =
    useState<boolean>(false);
  const { 0: trie, 1: setTrie } = useState<Trie>(new Trie());

  const inputRef = useRef<HTMLInputElement>(null);
  const pathName = usePathname();
  const route = useRouter();

  useEffect(() => {
    const newTrie = new Trie();
    products.forEach((el: ProductType) => {
      newTrie.addProduct(el.title, el.id);
    });
    setTrie(newTrie);
  }, []);

  let productsArr = trie.search(searchVal);

  useEffect(() => {
    setShowAutoComplete(false);
  }, [pathName, setShowAutoComplete]);

  useEffect(() => {
    const inputElement = inputRef.current;
    function handleSearch(e: KeyboardEvent) {
      if (!productsArr.length) return;
      if (e.key === "Enter" && searchVal && productsArr.length > 0) {
        route.push(`/product/${String(productsArr[0]?.prodId)}`);
      }
    }

    inputElement?.addEventListener("keydown", handleSearch);

    return () => inputElement?.removeEventListener("keydown", handleSearch);
  }, [productsArr, searchVal, route]);

  useEffect(() => {
    function handleCloseAutoComplete(e: any) {
      if (!e.target.closest(".productSearchDiv")) {
        setShowAutoComplete(false);
      }
    }

    document.addEventListener("click", handleCloseAutoComplete);
  }, [setShowAutoComplete]);

  return (
    <div
      className={`productSearchDiv flex relative items-center gap-[2px] sm:gap-1 py-1 sm:text-base text-sm bg-white rounded-sm w-full sm:w-fit flex-nowrap ring-1 ring-neutral-400`}
    >
      <input
        value={searchVal}
        ref={inputRef}
        onChange={(e) => {
          setSearchVal(e.target.value);
          setShowAutoComplete(e.target.value ? true : false);
        }}
        onFocus={() => {
          setShowAutoComplete(true);
        }}
        placeholder="Search products"
        className="flex-grow px-2 text-black py-1 sm:px-3 focus:outline-0"
        suppressHydrationWarning
      />
      {searchVal && showAutoComplete && (
        <AutoCompleteDialog productsArr={productsArr} />
      )}

      <div
        className={` flex h-full bg-white cursor-pointer whitespace-nowrap flex-nowrap`}
        onClick={() => setShowAutoComplete(false)}
      >
        {searchVal && (
          <div
            onClick={() => {
              setSearchVal("");
            }}
            className="cursor-pointer hover:text-primary-500   text-lg flex items-center  pe-2"
          >
            <CloseIcon fontSize="small" color="action" />
          </div>
        )}
      </div>
      <Link
        href={`/product/${String(productsArr[0]?.prodId)}`}
        onClick={(e) => {
          if (!productsArr.length) e.preventDefault();
        }}
        className="h-full px-1 bg-white cursor-pointer border-s-2"
      >
        <SearchOutlined color="action" />
      </Link>
    </div>
  );
}

export default ProductsSearchDiv;
