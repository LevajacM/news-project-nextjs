import { DUMMY_NEWS } from "@/dummy-news";
import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

const FilteredNewsPage = ({ params }) => {
  const newsYear = params.year;
  const newsPerYearList = getNewsForYear(newsYear);

  return <NewsList news={newsPerYearList} />;
};

export default FilteredNewsPage;
