"use client";

import Image from "next/image";
import { useRouter, useSearchParams } from "next/navigation";

type GameType = "all" | "valorant" | "apex" | "cod";

interface Props {
  gameType: GameType;
}

const GAME_CONFIG: Record<GameType, { label: string; icon?: string }> = {
  all: { label: "All" },
  valorant: { label: "VALORANT", icon: "/valorant-icon.svg" },
  apex: { label: "Apex", icon: "/Apex-icon.svg" },
  cod: { label: "COD", icon: "/cod-icon.svg" },
};

export default function GameFilterButton({ gameType }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentGame = searchParams.get("game") ?? "all";
  const isSelected = currentGame === gameType;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("game", gameType);
    router.push(`/index?${params.toString()}`);
  };

  return (
    <button
      className={`flex h-10 w-10 items-center justify-center rounded-[10px] bg-black ${
        isSelected ? "shadow-selected-red" : ""
      }`}
      onClick={handleClick}
    >
      {GAME_CONFIG[gameType].icon ? (
        <Image
          src={GAME_CONFIG[gameType].icon}
          alt={GAME_CONFIG[gameType].label}
          width={24}
          height={24}
        />
      ) : (
        <span className="text-sm font-extrabold text-white">{GAME_CONFIG[gameType].label}</span>
      )}
    </button>
  );
}
