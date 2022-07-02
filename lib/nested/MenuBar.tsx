
import React from "react";
import { Button, ButtonGroup, HStack } from '@chakra-ui/react'
import { Content, Editor } from '@tiptap/react'
import {FaUndo, FaRedo, FaHeading, FaBold, FaItalic} from 'react-icons/fa'
import {ImStrikethrough} from 'react-icons/im'
import {RiCodeBoxLine, RiCodeFill} from 'react-icons/ri'
import {GoListUnordered, GoListOrdered} from 'react-icons/go'
import {TbBlockquote, TbClearFormatting} from 'react-icons/tb'
import {IoReturnDownBackSharp, IoSave} from 'react-icons/io5'
import {MdOutlineHorizontalRule} from 'react-icons/md'
import {VscClearAll} from 'react-icons/vsc'
import {BsParagraph} from 'react-icons/bs'

export type MenuBarProps = {
  editor : Editor,
  onSave(c: Content) : void
}

export const MenuBar = ({ editor, onSave } : MenuBarProps) => {
  if (!editor) {
    return null
  }

  return (
    <HStack>
      <ButtonGroup isAttached variant='outline'>
        <Button
          onClick={() => editor.chain().focus().toggleBold().run()}
          isActive={editor.isActive('bold')}
          >
          <FaBold />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleItalic().run()}
          isActive={editor.isActive('italic')}
          >
          <FaItalic />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleStrike().run()}
          isActive={editor.isActive('strike')}
          >
          <ImStrikethrough />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleCode().run()}
          isActive={editor.isActive('code')}
          >
          <RiCodeFill />
        </Button>
        <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
          <TbClearFormatting />
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button onClick={() => editor.chain().focus().clearNodes().run()}>
          <VscClearAll />
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button
          onClick={() => editor.chain().focus().setParagraph().run()}
          isActive={editor.isActive('paragraph')}
        >
          <BsParagraph />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          isActive={editor.isActive('heading', { level: 1 }) }
          >
          <FaHeading />1
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          isActive={editor.isActive('heading', { level: 2 })}
          >
          <FaHeading />2
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          isActive={editor.isActive('heading', { level: 3 })}
        >
          <FaHeading />3
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          isActive={editor.isActive('heading', { level: 4 })}
          >
          <FaHeading />4
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          isActive={editor.isActive('heading', { level: 5 })}
          >
          <FaHeading />5
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
          isActive={editor.isActive('heading', { level: 6 })}
          >
          <FaHeading />6
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          isActive={editor.isActive('bulletList')}
          >
          <GoListUnordered />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          isActive={editor.isActive('orderedList')}
          >
          <GoListOrdered />
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          isActive={editor.isActive('codeBlock')}
          >
          <RiCodeBoxLine />
        </Button>
        <Button
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          isActive={editor.isActive('blockquote')}
          >
          <TbBlockquote />
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
          <MdOutlineHorizontalRule />
        </Button>
        <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
          <IoReturnDownBackSharp />
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button onClick={() => editor.chain().focus().undo().run()}>
          <FaUndo />
        </Button>
        <Button onClick={() => editor.chain().focus().redo().run()}>
          <FaRedo />
        </Button>
      </ButtonGroup>
      <ButtonGroup isAttached variant='outline'>
        <Button onClick={() => onSave(editor.getJSON())} >
          <IoSave />
        </Button>
      </ButtonGroup>
    </HStack>
  )
}