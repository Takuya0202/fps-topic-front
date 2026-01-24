import GameFilterButton from "../components/features/index/game-filter-button";
import Image from "next/image";
import TagFilterButton from "../components/features/index/tag-filter-button";
import BlurEffect from "../components/elements/blur-effect";
import ArticleCard from "../components/features/index/article-card";

async function getArticles() {
  // ダミーAPI
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // レスポンス
  return [
    {
      id: 1,
      title: "Article 1",
      thumbnail: "/sample-thumbnail-1.svg",
      author: "Author 1",
      createdAt: "2026-01-01",
    },
    {
      id: 2,
      title: "Article 2",
      thumbnail: "/sample-thumbnail-1.svg",
      author: "Author 2",
      createdAt: "2026-01-02",
    },
    {
      id: 3,
      title: "Article 3",
      thumbnail: "/sample-thumbnail-1.svg",
      author: "Author 3",
      createdAt: "2026-01-03",
    },
  ];
}

export default async function IndexPage() {
  const articles = await getArticles();
  return (
    <main
      className="relative min-h-screen overflow-hidden"
      style={{
        backgroundImage: `url(/slash.svg)`,
        backgroundRepeat: "repeat-y",
        backgroundPosition: "top right",
      }}
    >
      <div className="w-[90%] mx-auto flex items-start flex-col space-y-4 my-5">
        <div className="relative w-[30px] h-[14px]">
          <Image src="/Dot.svg" alt="dot" fill className="object-cover" />
        </div>
        <h1 className="text-white text-[32px] font-extrabold">FPS Topic</h1>
        <ul className="flex items-center space-x-4">
          <li>
            <GameFilterButton gameType="all" />
          </li>
          <li>
            <GameFilterButton gameType="valorant" />
          </li>
          <li>
            <GameFilterButton gameType="apex" />
          </li>
          <li>
            <GameFilterButton gameType="cod" />
          </li>
        </ul>
        <ul className="flex items-center space-x-4">
          <li>
            <TagFilterButton tag="all" />
          </li>
          <li>
            <TagFilterButton tag="esport" />
          </li>
          <li>
            <TagFilterButton tag="update" />
          </li>
        </ul>

        <section className="flex items-center w-full space-y-4 flex-col">
          <ArticleCard
            id={articles[0].id}
            title={articles[0].title}
            thumbnail={articles[0].thumbnail}
            author={articles[0].author}
            createdAt={articles[0].createdAt}
          />
          <ArticleCard
            id={articles[1].id}
            title={articles[1].title}
            thumbnail={articles[1].thumbnail}
            author={articles[1].author}
            createdAt={articles[1].createdAt}
          />
          <ArticleCard
            id={articles[2].id}
            title={articles[2].title}
            thumbnail={articles[2].thumbnail}
            author={articles[2].author}
            createdAt={articles[2].createdAt}
          />
        </section>
      </div>

      <BlurEffect />
    </main>
  );
}
