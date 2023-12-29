import * as uuid from 'uuid'
import {
  Editor as SlateEditor,
  Transforms
} from 'slate'
import { TBEditor } from '@ttab/textbit'

import {
  TextbitEditor,
  TextbitElement,
  type TBElement
} from '@ttab/textbit'

const PLUGIN_NAME = 'dotvoid/codeblock'

export const actionHandler = (editor: TBEditor, type: string) => {
  const isActive = TextbitEditor.includes(editor, PLUGIN_NAME)

  Transforms.unwrapNodes(editor, {
    match: (n) =>
      !SlateEditor.isEditor(n)
      && TextbitElement.isElement(n)
      && n.type === PLUGIN_NAME,
    split: true
  })

  const newProperties: Partial<TBElement> = {
    type: isActive ? 'core/text' : `${PLUGIN_NAME}/body`,
    properties: {}
  }

  Transforms.setNodes<TBElement>(editor, newProperties, {
    match: (n) => {
      return !SlateEditor.isEditor(n) &&
        TextbitElement.isElement(n) &&
        n.class === 'text'
    }
  })

  if (!isActive) {
    const node = Transforms.wrapNodes(editor, {
      // @ts-ignore
      id: uuid.v4(),
      class: 'text',
      type: PLUGIN_NAME,
      children: []
    })
  }
}
