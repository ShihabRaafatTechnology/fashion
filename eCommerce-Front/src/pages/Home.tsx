import { GridList } from "@components/common";
import { Category, FrameCategories, Hero } from "@components/eCommerce";
import useCategories from "@hooks/useCategories";

const Home = () => {
  const { records } = useCategories();

  return (
    <div>
      <Hero/>
      <FrameCategories />
      <GridList records={records} renderItems={(record) => <Category {...record} key={record.id} />} />
    </div>
  );
};

export default Home;
