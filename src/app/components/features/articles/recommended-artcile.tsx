import Image from "next/image";
import Link from "next/link";

interface Props {
  articleId: number;
  title: string;
  thumbnail: string;
}
export default function RecommendedArticle({ articleId, title, thumbnail }: Props) {
  return (
    <Link href={`/article/${articleId}`}>
      <article className="w-[176px] flex flex-col items-start">
        <div className="relative w-full h-[100px]">
          <Image src={thumbnail} alt={title} fill className="object-cover rounded-t-[10px]" />
        </div>
        <div className="py-2 px-4 bg-dark w-full rounded-b-[10px] shadow-red">
          <span className="text-white text-[12px] font-semibold">{title}</span>
        </div>
      </article>
    </Link>
  );
}
