import CommentForm from "./comment-form";

interface Props {
    onClose: () => void;
    articleId: string;
}
export default function CommentModal({ onClose, articleId }: Props) {
    return (
        <div className="fixed top-0 left-0 w-full h-full bg-dark z-50">
            <div className="w-full bg-darker rounded-t-[10px] ">
                <CommentForm
                    onClose={onClose}
                    articleId={articleId}
                />
            </div>
        </div>
    )
}