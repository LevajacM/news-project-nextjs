import NewsList from "@/components/news-list";
import { getAllNews } from "@/lib/news";

const NewsPage = async () => {
  // const resp = await fetch("http://localhost:8080/news");
  // if (!resp.ok) {
  //   throw new Error("failed to fetch news");
  // }
  // const news = await resp.json();

  const news = await getAllNews();

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
};

export default NewsPage;
