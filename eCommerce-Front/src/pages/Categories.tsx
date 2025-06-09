import { GridList, Heading } from "@components/common";
import { Category } from "@components/eCommerce";
import { Loading, LottieHandler } from "@components/feedback";
import useCategories from "@hooks/useCategories";

const Categories = () => {
  const { records, loading, error } = useCategories();
  return (
    <>
      <Heading title={<>home / <span className="active">categories</span></>} />
      <Loading status={loading} error={error} type="category">
        <GridList records={records}
          itemType="categories"
          typeLottie="empty"
          renderItems={(record) => <Category {...record} key={record.id} />} />
      </Loading>
    </>
  );
};

export default Categories;
