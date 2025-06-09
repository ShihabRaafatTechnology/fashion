import { Heading } from "@components/common";
import { CartItemsList, CartItemsSubTotalPrice } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import useShoppingCart from "@hooks/useShoppingCart";


const ShoppingCart = () => {
  const { products, loading, error } = useShoppingCart();
  return (
    <>
      <Heading title={<>home / <span className="active">cart</span></>} />
      <div className="justify-center md:flex md:space-x-6 xl:px-0 mt-10">
        <Loading status={loading} error={error} type="cart">
          {products.length ? (
            <>
              <CartItemsList products={products} />
              <CartItemsSubTotalPrice products={products} />
            </>
          ) : (
            <div className="flex items-center justify-center text-4xl font-extrabold text-secondary h-[70vh]">
              <LottieHandler
                type="cart"
                message={`No cart available`} />
            </div>
          )}
        </Loading>
      </div>
    </>
  );
};

export default ShoppingCart;
