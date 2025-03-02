import { GridList, Heading } from "@components/common";
import { Product } from "@components/eCommerce";
import useWishList from "@hooks/useWishList";


const Wishlist = () => {
  const {records} = useWishList();
  return (
    <>
      <Heading title={<>home / <span className="active">wishlist</span></>} />
      <GridList
        records={records}
        renderItems={(record) => <Product {...record} key={record.id} />}
      />
    </>
  );
};

export default Wishlist;
