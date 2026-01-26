import BlurEffect from "@/app/components/elements/blur-effect";
import HomeButton from "@/app/components/elements/buttons/home-button";
import CommentButton from "@/app/components/features/comments/comment-button";
import Image from "next/image";

async function getArticle(articleId: string) {
  // ダミーAPI
  await new Promise((resolve) => setTimeout(resolve, 3000));

  // レスポンス
  return {
    id: 1,
    title: "Article 1",
    thumbnail: "/sample-thumbnail-1.svg",
    author: "Author 1",
    createdAt: "2026-01-01",
  };
}

export default async function ArticlePage({ params }: { params: { articleId: string } }) {
  const { articleId } = params;
  const article = await getArticle(articleId);
  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="mt-10">
        <HomeButton />
      </div>
      <div className="w-[90%] mx-auto flex items-start flex-col space-y-3 my-5">
        {/* 記事のサムネ、タイトル、コンテンツ */}
        <div className="relative w-full h-[200px]">
          <Image
            src={article.thumbnail}
            alt={article.title}
            fill
            className="object-cover rounded-[10px]"
          />
        </div>
        <h1 className="text-white font-extrabold text-[24px]">{article.title}</h1>
        <div className="flex items-start space-x-4 text-white text-[12px] font-medium">
          <span>{article.author}</span>
          <span>{article.createdAt}</span>
        </div>

        {/* 別の記事紹介 */}
        <h2 className="text-white font-extrabold text-[24px]">More News</h2>
      </div>
      <div className="absolute bottom-10 right-4">
        <CommentButton articleId={articleId} />
      </div>
      <BlurEffect />
    </main>
  );
}
