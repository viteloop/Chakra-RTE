import React from "react";
import { useEditor, EditorContent, JSONContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import { MenuBar } from "./nested/MenuBar";

export interface RichTextEditorProps {
  content : JSONContent,
  onSave(c: JSONContent) : void
}

export const RichTextEditor = ({content, onSave}: RichTextEditorProps) => {
  const editor = useEditor({
    extensions: [
      StarterKit,
    ],
    content,
  })

  return (
    <div>
      <MenuBar editor={editor!} onSave={onSave}/>
      <EditorContent editor={editor} />
    </div>
  )
}
