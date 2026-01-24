import Image from "next/image";
import Link from "next/link";
interface Props {
  id: number;
  title: string;
  thumbnail: string;
  author: string;
  createdAt: string;
}
export default function ArticleCard({ id, title, thumbnail, author, createdAt }: Props) {
  return (
    <article className="w-full">
      <Link href={`/article/${id}`}>
        <div className="w-full flex items-start flex-col">
          <div className="relative w-full h-[200px]">
            <Image src={thumbnail} alt={title} fill className="object-cover rounded-t-[30px]" />
          </div>
          <div className="w-full flex items-start flex-col py-[6px] px-6 bg-dark rounded-br-[30px] rounded-bl-[10px] shadow-red">
            <h2 className="text-white text-[12px] font-extrabold border-b border-white pb-2 w-full">
              {title}
            </h2>
            <div className="w-full flex items-center space-x-2 text-white text-[10px] opacity-70 pt-2">
              <span>{author}</span>
              <span>{createdAt}</span>
            </div>
          </div>
        </div>
      </Link>
    </article>
  );
}
