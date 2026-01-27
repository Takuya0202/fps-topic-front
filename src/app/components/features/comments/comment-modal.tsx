import CommentForm from "./comment-form";

interface Props {
  onClose: () => void;
  articleId: string;
}

export default function CommentModal({ onClose, articleId }: Props) {
  return (
    <div
      className="fixed inset-0 z-50 flex items-end bg-black/50 animate-fade-in"
      onClick={onClose}
    >
      <div
        className="w-full bg-darker rounded-t-[10px] h-[90%] animate-slide-up"
        onClick={(e) => e.stopPropagation()}
      >
        <CommentForm onClose={onClose} articleId={articleId} />
      </div>
    </div>
  );
}
