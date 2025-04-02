"use client";

import { Pagination } from "@mui/material";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface ProductsPaginationProps {
  productsCount: number;
}

function ProductsPagination({ productsCount }: ProductsPaginationProps) {
  let searchParams = useSearchParams();
  let pathName = usePathname();
  let router = useRouter();

  let count = Math.ceil(productsCount / 12);
  function handlePageChange(e: React.ChangeEvent<unknown>, value: number) {
    let params = new URLSearchParams(searchParams);
    params.set("page", value.toString());
    router.replace(`${pathName}?${params.toString()}`);
  }
  return (
    <div className="px-5 sm:px-20 mt-5 mb-3 justify-end flex">
      <Pagination
        count={count}
        defaultPage={parseInt(searchParams.get("page") ?? "1")}
        page={parseInt(searchParams.get("page") ?? "1")}
        onChange={handlePageChange}
        siblingCount={1}
        color="primary"
        variant="outlined"
        size="small"
        shape="circular"
        showFirstButton
        showLastButton
      />
    </div>
  );
}

export default ProductsPagination;
