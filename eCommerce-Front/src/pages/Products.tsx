import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { memo } from "react";
import useProducts from "@hooks/useProducts";

const Products = memo(() => {
  const {productsFullInfo, params} = useProducts();
  return (
    <>
      <Heading title={<>home / categories / products / <span className="text-primary">{params.prefix}</span></>} />
      <GridList
        records={productsFullInfo}
        renderItems={(record) => <Product {...record} key={record.id} />}
      />
    </>
  );
});

export default Products;
