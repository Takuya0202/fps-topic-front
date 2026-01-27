"use client";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import "@blocknote/react/style.css";

import { useEffect } from "react";
interface props {
  content: string;
}
export default function ArticlePreview({ content }: props) {
  const editor = useCreateBlockNote();
  useEffect(() => {
    if (content) {
      const blocks = JSON.parse(content);
      editor.replaceBlocks(editor.document, blocks);
    }
  }, [content, editor]);
  return (
    <div className="w-full overflow-hidden">
      <BlockNoteView editable={false} theme="dark" editor={editor} />
    </div>
  );
}
