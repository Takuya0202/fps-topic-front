import Image from "next/image";

interface props {
  content: string;
  username: string;
  userIcon: string;
}

export default function CommentPost({ content, username, userIcon }: props) {
  return (
    <div className="w-full flex items-start flex-col space-y-3">
      <div className="flex items-center space-x-3">
        <div className="relative w-8 h-8 rounded-full">
          <Image src={userIcon} alt="userIcon" fill className="object-cover rounded-full" />
        </div>
        <span className="text-white text-[12px]">{username}</span>
      </div>
      <div className="bg-darker rounded-[10px] p-4 ml-10 w-full">
        <span className="text-white text-[12px]">{content}</span>
      </div>
    </div>
  );
}
