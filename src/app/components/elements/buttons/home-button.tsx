import { House } from "lucide-react";
import Link from "next/link";

export default function HomeButton() {
  return (
    <Link
      href={"/index"}
      className="bg-crimson flex items-center justify-center w-[108px] h-8
            rounded-r-[10px] space-x-5 shadow"
    >
      <span className="text-white font-extrabold">Home</span>
      <House className="w-4 h-4 text-white" />
    </Link>
  );
}
