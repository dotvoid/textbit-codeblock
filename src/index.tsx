import { BsCodeSquare } from 'react-icons/bs'

import { TBPlugin } from '@ttab/textbit'

import {
  CodeBlock as CodeBlockComponent,
  CodeBlockBody as CodeBlockBodyComponent
} from './components'

import { actionHandler } from './lib/actionHandler'

export const CodeBlock: TBPlugin = {
  class: 'textblock',
  name: 'dotvoid/codeblock',
  actions: [
    {
      title: 'Code block',
      tool: <BsCodeSquare />,
      hotkey: 'mod+shift+8',
      handler: ({ editor }) => {
        actionHandler(editor, 'dotvoid/codeblock')
      },
      visibility: (element) => {
        return [
          element.type === 'dotvoid/codeblock',
          true,
          element.type === 'dotvoid/codeblock'
        ]
      }
    }
  ],
  component: {
    class: 'textblock',
    render: CodeBlockComponent,
    children: [{
      type: 'body',
      class: 'text',
      render: CodeBlockBodyComponent
    }]
  }
}
