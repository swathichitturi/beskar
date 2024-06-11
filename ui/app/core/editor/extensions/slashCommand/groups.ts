import { Editor } from "@tiptap/core";
import { icons } from "lucide-react";

export interface Command {
    name: string;
    label: string;
    description: string;
    aliases?: string[];
    iconName: keyof typeof icons;
    action: (editor: Editor) => void;
    shouldBeHidden?: (editor: Editor) => boolean;
}

export interface Group {
    name: string;
    title: string;
    commands: Command[];
}

export const GROUPS: Group[] = [
    {
        name: "format",
        title: "Format",
        commands: [
            {
                name: "heading1",
                label: "Heading 1",
                iconName: "Heading1",
                description: "High priority section title",
                aliases: ["h1"],
                action: (editor) => {
                    editor.chain().focus().setHeading({ level: 1 }).run();
                },
            },
            {
                name: "heading2",
                label: "Heading 2",
                iconName: "Heading2",
                description: "Medium priority section title",
                aliases: ["h2"],
                action: (editor) => {
                    editor.chain().focus().setHeading({ level: 2 }).run();
                },
            },
            {
                name: "heading3",
                label: "Heading 3",
                iconName: "Heading3",
                description: "Low priority section title",
                aliases: ["h3"],
                action: (editor) => {
                    editor.chain().focus().setHeading({ level: 3 }).run();
                },
            },
            {
                name: "bulletList",
                label: "Bullet List",
                iconName: "List",
                description: "Unordered list of items",
                aliases: ["ul"],
                action: (editor) => {
                    editor.chain().focus().toggleBulletList().run();
                },
            },
            {
                name: "numberedList",
                label: "Numbered List",
                iconName: "ListOrdered",
                description: "Ordered list of items",
                aliases: ["ol"],
                action: (editor) => {
                    editor.chain().focus().toggleOrderedList().run();
                },
            },
            {
                name: "taskList",
                label: "Task List",
                iconName: "ListTodo",
                description: "Task list with todo items",
                aliases: ["todo"],
                action: (editor) => {
                    editor.chain().focus().toggleTaskList().run();
                },
            },
            {
                name: "blockquote",
                label: "Blockquote",
                iconName: "Quote",
                description: "Element for quoting",
                action: (editor) => {
                    editor.chain().focus().setBlockquote().run();
                },
            },
            {
                name: "codeBlock",
                label: "Code Block",
                iconName: "CodeSquare",
                description: "Code block with syntax highlighting",
                shouldBeHidden: (editor) => editor.isActive("columns"),
                action: (editor) => {
                    editor.chain().focus().setCodeBlock().run();
                },
            },
            {
                name: "CustomInput",
                label: "Note",
                iconName: "CodeSquare",
                description: "Code block with syntax highlighting",
                shouldBeHidden: (editor) => editor.isActive("columns"),
                action: (editor) => {
                    editor.chain().insertContentAt(editor.state.selection.head, { type: 'noteBlock' }).focus().run()
                },
            },
        ],
    },
    //   {
    //     name: 'insert',
    //     title: 'Insert',
    //     commands: [
    //       {
    //         name: 'table',
    //         label: 'Table',
    //         iconName: 'Table',
    //         description: 'Insert a table',
    //         shouldBeHidden: editor => editor.isActive('columns'),
    //         action: editor => {
    //           editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: false }).run()
    //         },
    //       },
    //       {
    //         name: 'image',
    //         label: 'Image',
    //         iconName: 'Image',
    //         description: 'Insert an image',
    //         aliases: ['img'],
    //         action: editor => {
    //           editor.chain().focus().setImageUpload().run()
    //         },
    //       },
    //       {
    //         name: 'columns',
    //         label: 'Columns',
    //         iconName: 'Columns',
    //         description: 'Add two column content',
    //         aliases: ['cols'],
    //         shouldBeHidden: editor => editor.isActive('columns'),
    //         action: editor => {
    //           editor
    //             .chain()
    //             .focus()
    //             .setColumns()
    //             .focus(editor.state.selection.head - 1)
    //             .run()
    //         },
    //       },
    //       {
    //         name: 'horizontalRule',
    //         label: 'Horizontal Rule',
    //         iconName: 'Minus',
    //         description: 'Insert a horizontal divider',
    //         aliases: ['hr'],
    //         action: editor => {
    //           editor.chain().focus().setHorizontalRule().run()
    //         },
    //       },
    //       {
    //         name: 'toc',
    //         label: 'Table of Contents',
    //         iconName: 'Book',
    //         aliases: ['outline'],
    //         description: 'Insert a table of contents',
    //         shouldBeHidden: editor => editor.isActive('columns'),
    //         action: editor => {
    //           editor.chain().focus().insertTableOfContents().run()
    //         },
    //       },
    //     ],
    //   },
];

export default GROUPS;
