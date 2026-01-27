"use client";

import dynamic from "next/dynamic";

export const ArticlePreview = dynamic(() => import("./article-preview"), {
  ssr: false,
});
