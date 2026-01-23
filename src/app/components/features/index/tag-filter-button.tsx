"use client";
import { useRouter, useSearchParams } from "next/navigation";
type tag = "all" | "esport" | "update";
interface Props {
  tag: tag;
}

const label: Record<tag, string> = {
  all: "All News",
  esport: "Esports",
  update: "Update",
};
export default function TagFilterButton({ tag }: Props) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentTag = searchParams.get("tag") ?? "all";
  const isSelected = currentTag === tag;

  const handleClick = () => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("tag", tag);
    router.push(`/index?${params.toString()}`);
  };
  return (
    <button
      className={`py-[6px] px-3 rounded-[30px] border-2 ${isSelected ? "text-red border-red" : "text-white border-white"}`}
      onClick={handleClick}
    >
      <span className="font-extrabold text-[12px]">{label[tag]}</span>
    </button>
  );
}
