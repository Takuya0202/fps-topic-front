import BlurEffect from "@/app/components/elements/blur-effect";
import HomeButton from "@/app/components/elements/buttons/home-button";
import { ArticlePreview } from "@/app/components/features/articles/dynamic-article-preview";
import RecommendedArticle from "@/app/components/features/articles/recommended-artcile";
import CommentButton from "@/app/components/features/comments/comment-button";
import CommentPost from "@/app/components/features/comments/comment-post";
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
        <div className="flex items-start space-x-4 text-white text-[12px] font-medium mb-6">
          <span>{article.author}</span>
          <span>{article.createdAt}</span>
        </div>

        <ArticlePreview
          content={`[
    {
      "id": "1",
      "type": "heading",
      "props": { "level": 1, "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "【VALORANT】最新メタ解説！パッチ9.0環境で強いエージェント", "styles": {} }],
      "children": []
    },
    {
      "id": "2",
      "type": "paragraph",
      "props": { "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "パッチ9.0のアップデートにより、エージェントのピック率が大きく変動しました。今回は現環境で特に強力なエージェントと、その立ち回りについて解説します。", "styles": {} }],
      "children": []
    },
    {
      "id": "3",
      "type": "heading",
      "props": { "level": 2, "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "Tier1 エージェント", "styles": {} }],
      "children": []
    },
    {
      "id": "4",
      "type": "bulletListItem",
      "props": { "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "ジェット", "styles": { "bold": true } }, { "type": "text", "text": " - ナーフ後も依然として強力。機動力は唯一無二。", "styles": {} }],
      "children": []
    },
    {
      "id": "5",
      "type": "bulletListItem",
      "props": { "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "オーメン", "styles": { "bold": true } }, { "type": "text", "text": " - スモークの汎用性が高く、どのマップでも安定。", "styles": {} }],
      "children": []
    },
    {
      "id": "6",
      "type": "bulletListItem",
      "props": { "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "ソーヴァ", "styles": { "bold": true } }, { "type": "text", "text": " - 情報収集能力は相変わらず最強クラス。", "styles": {} }],
      "children": []
    },
    {
      "id": "7",
      "type": "heading",
      "props": { "level": 2, "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "まとめ", "styles": {} }],
      "children": []
    },
    {
      "id": "8",
      "type": "paragraph",
      "props": { "textColor": "default", "backgroundColor": "default", "textAlignment": "left" },
      "content": [{ "type": "text", "text": "今回のパッチではデュエリストよりもコントローラーの重要性が増しています。ランクを上げたい方は、サポート系エージェントの練習をおすすめします！", "styles": {} }],
      "children": []
    }
  ]`}
        />

        {/* 別の記事紹介 */}
        <h2 className="text-white font-extrabold text-[24px] mb-6 mt-4 ml-2">More News</h2>
        <div className="flex items-center space-x-3 overflow-x-auto pb-2">
          <RecommendedArticle
            articleId={article.id}
            title={article.title}
            thumbnail={article.thumbnail}
          />
          <RecommendedArticle
            articleId={article.id}
            title={article.title}
            thumbnail={article.thumbnail}
          />
          <RecommendedArticle
            articleId={article.id}
            title={article.title}
            thumbnail={article.thumbnail}
          />
        </div>

        {/* コメント */}
        <h2 className="text-white font-extrabold text-[24px] mb-6 mt-4 ml-2">Comment</h2>
        <div className="flex items-start flex-col space-y-3 w-full">
          <CommentPost content="This is a comment" username="John Doe" userIcon="/user-icon.svg" />
          <CommentPost content="This is a comment" username="John Doe" userIcon="/user-icon.svg" />
          <CommentPost content="This is a comment" username="John Doe" userIcon="/user-icon.svg" />
        </div>
      </div>
      <div className="absolute bottom-10 right-4">
        <CommentButton articleId={articleId} />
      </div>
      <BlurEffect />
    </main>
  );
}
