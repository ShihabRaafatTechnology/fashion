import { LottieHandler } from "@components/feedback";
import { lottieFilesMap } from "@components/feedback/lottieHandler";

type TGridList<T> = {
    records: T[];
    renderItems: (record:T) => React.ReactNode;
    itemType: string;
    typeLottie: keyof typeof lottieFilesMap;
  }

const GridList = <T,>({records, renderItems, itemType, typeLottie}:TGridList<T>) => {
    const renderList =
    records.length > 0 ? (
      records.map((record) => renderItems(record))
    ) : (
      <div className="text-center col-span-4 text-4xl font-extrabold text-secondary">
        <LottieHandler type={typeLottie}
          message={`No ${itemType} available`}/>
      </div>
    );
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 place-items-center sm:mt-10 xlg:mt-0">
        {renderList}
    </div>
  )
}

export default GridList