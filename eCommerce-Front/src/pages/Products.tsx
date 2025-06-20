import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { memo } from "react";
import { Loading } from "@components/feedback";
import useProducts from "@hooks/useProducts";

const Products = memo(() => {
  const { productsFullInfo, params, loading, error } = useProducts();
  return (
    <>
      <Heading title={<>home / categories / products / <span className="active">{params.prefix}</span></>} />
      <Loading status={loading} error={error} type="product">
        <GridList
          records={productsFullInfo}
          itemType="products"
          typeLottie="empty"
          renderItems={(record) => <Product {...record} key={record.id} />}
        />
      </Loading>
    </>
  );
});

export default Products;
