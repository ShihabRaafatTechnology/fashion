import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useWishList from "@hooks/useWishList";


const Wishlist = () => {
  const { records, loading, error } = useWishList();
  return (
    <>
      <Heading title={<>home / <span className="active">wishlist</span></>} />
      <Loading status={loading} error={error} type="product">
        <GridList
          records={records}
          itemType="favorites"
          typeLottie="wishlist"
          renderItems={(record) => <Product {...record} key={record.id} />}
        />
      </Loading>
    </>
  );
};

export default Wishlist;
