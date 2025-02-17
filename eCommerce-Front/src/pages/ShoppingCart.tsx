import { Heading } from "@components/common";
import { CartItemsList, CartItemsSubTotalPrice } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import useShoppingCart from "@hooks/useShoppingCart";


const ShoppingCart = () => {
  const { products, loading, error } = useShoppingCart();
  return (
    <>
      <Heading title={`home / ${<span className="text-primary">cart</span>}`} />
        <div className="justify-center md:flex md:space-x-6 xl:px-0 mt-10">
          <Loading status={loading} error={error}>
            {products.length ? (
              <>
                <CartItemsList products={products} />
                <CartItemsSubTotalPrice products={products} />
              </>
            ) : (
              <div className="text-center col-span-4 text-4xl font-extrabold text-secondary h-[70vh] flex place-items-center">
              {"No Cart Available"}
            </div>
            )}
          </Loading>
        </div>
    </>
  );
};

export default ShoppingCart;
