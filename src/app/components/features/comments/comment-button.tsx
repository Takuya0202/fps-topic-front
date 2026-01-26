"use client";
import { MessageCirclePlus } from "lucide-react";
import { useState } from "react";
import CommentModal from "./comment-modal";

interface Props {
  articleId: string;
}

export default function CommentButton({ articleId }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClick = () => {
    setIsOpen(true);
  };

  if (isOpen) {
    return <CommentModal onClose={() => setIsOpen(false)} articleId={articleId} />;
  }
  return (
    <button
      onClick={handleClick}
      className="w-[56px] h-[56px] bg-crimson rounded-full flex items-center justify-center shadow"
    >
      <MessageCirclePlus className="w-8 h-8 text-white" />
    </button>
  );
}
