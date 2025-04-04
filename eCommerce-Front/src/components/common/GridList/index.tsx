import Lottie from "lottie-react";
import wishlist from "@assets/lottieFiles/wishlist.json"

type TGridList<T> = {
    records: T[];
    renderItems: (record:T) => React.ReactNode;
}

const GridList = <T,>({records, renderItems}:TGridList<T>) => {
    const categoriesList =
    records.length > 0 ? (
      records.map((record) => renderItems(record))
    ) : (
      <div className="col-span-1 md:col-span-4 md:w-[30rem]">
         <Lottie animationData={wishlist} />
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center sm:mt-10 xlg:mt-0">
        {categoriesList}
    </div>
  )
}

export default GridList