type TGridList<T> = {
    records: T[];
    renderItems: (record:T) => React.ReactNode;
}

const GridList = <T,>({records, renderItems}:TGridList<T>) => {
    const categoriesList =
    records.length > 0 ? (
      records.map((record) => renderItems(record))
    ) : (
      <div className="text-center col-span-4 text-4xl font-extrabold text-secondary">
        {"No Wishlist Available"}
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-[70vh] place-items-center sm:mt-10 xlg:mt-0">
        {categoriesList}
    </div>
  )
}

export default GridList