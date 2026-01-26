import { X } from "lucide-react";

interface Props {
    onClose: () => void;
    articleId: string;
}

export default function CommentForm({ onClose, articleId }: Props) {
    return (
        <form action=""
            className="flex items-start flex-col space-y-2 p-2 bg-darker h-full">

            <div className="flex items-center justify-between w-full">
                <X className="w-5 h-5 text-white opacity-80"
                    onClick={onClose} />
                <h2 className="text-white font-bold">
                    Comment
                </h2>
                <button type="submit" className="text-crimson font-bold">
                    送信
                </button>
            </div>
        </form>
    )
}