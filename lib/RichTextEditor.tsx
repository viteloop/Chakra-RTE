import React from "react";
import { useEditor, EditorContent, Content } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from "./nested/MenuBar";

export interface RichTextEditorProps {
  content : Content
}

export const RichTextEditor = ({content}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content,
  })

  return (
    <div>
      <MenuBar editor={editor!} />
      <EditorContent editor={editor} />
    </div>
  )
}
