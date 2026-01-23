import GameFilterButton from "../components/features/index/game-filter-button";
import Image from "next/image";
export default function IndexPage() {
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
      </div>
    </main>
  );
}
