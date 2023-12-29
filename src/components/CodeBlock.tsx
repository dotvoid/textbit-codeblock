import { type TBRenderElementFunction } from '@ttab/textbit'

export const CodeBlock: TBRenderElementFunction = ({ element, children }) => {
  const style = {
    padding: '1rem',
    border: '1px solid gray',
    fontFamily: 'monospace'
  }

  return <div style={style}>
    <code>{children}</code>
  </div>
}
