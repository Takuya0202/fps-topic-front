import Image from "next/image";
import TagFilterButton from "../components/features/index/tag-filter-button";
import GameFilterButton from "../components/features/index/game-filter-button";

function ArticleCardSkeleton() {
  return (
    <article className="w-full">
      <div className="w-full flex items-start flex-col">
        <div className="relative w-full h-[200px] skeleton rounded-t-[30px]" />
        <div className="w-full flex items-start flex-col py-[6px] px-6 bg-dark rounded-br-[30px] rounded-bl-[10px] shadow-red skeleton-glow">
          <div className="w-full border-b border-white/20 pb-2">
            <div className="h-3 w-3/4 skeleton rounded" />
          </div>
          <div className="w-full flex items-center space-x-2 pt-2">
            <div className="h-2 w-16 skeleton rounded" />
            <div className="h-2 w-20 skeleton rounded" />
          </div>
        </div>
      </div>
    </article>
  );
}

export default function IndexLoading() {
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
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
          <ArticleCardSkeleton />
        </section>
      </div>
    </main>
  );
}
