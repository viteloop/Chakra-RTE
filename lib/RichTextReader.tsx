import React from "react";
import { useEditor, EditorContent, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from "./nested/MenuBar";
import { StyledContent } from "./nested/StyledContent";

export interface RichTextReaderProps {
  content : JSONContent
}

export const RichTextReader = ({content}: RichTextReaderProps) => {
  const editor = useEditor({
    editable:false,
    extensions: [
      StarterKit,
    ],
    content,
  })

  return (
    <div>
      <StyledContent>
        <EditorContent editor={editor} />
      </StyledContent>
    </div>
  )
}
