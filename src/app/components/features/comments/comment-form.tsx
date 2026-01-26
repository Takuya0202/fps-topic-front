"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";

interface Props {
  onClose: () => void;
  articleId: string;
}

export default function CommentForm({ onClose, articleId }: Props) {
  const [comment, setComment] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === "") {
      toast.error("コメントが未入力です");
      return;
    }
    // コメント送信APIの呼び出し
    toast.success("コメントを送信しました");
    setComment("");
    onClose();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex items-start flex-col space-y-2 p-4 bg-darker h-full rounded-t-[10px]"
    >
      <div className="flex items-center justify-between w-full">
        <X className="w-8 h-8 text-white opacity-80" onClick={onClose} />
        <h2 className="text-white font-bold">Comment</h2>
        <button type="submit" className="text-crimson font-bold">
          送信
        </button>
      </div>

      <textarea
        className="w-full h-full p-4 text-white opacity-70 font-bold placeholder:text-white/70"
        placeholder="ここにコメントを入力"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      ></textarea>
    </form>
  );
}
