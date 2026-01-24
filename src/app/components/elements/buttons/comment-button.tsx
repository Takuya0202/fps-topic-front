import { MessageCirclePlus } from "lucide-react";

export default function CommentButton() {
  return (
    <button className="w-[56px] h-[56px] bg-crimson rounded-full flex items-center justify-center">
      <MessageCirclePlus className="w-8 h-8 text-white" />
    </button>
  );
}
