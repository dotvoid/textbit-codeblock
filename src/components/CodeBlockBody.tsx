import { type TBRenderElementFunction } from '@ttab/textbit'

export const CodeBlockBody: TBRenderElementFunction = ({ element, children }) => {
  return <pre style={{ padding: '0.5rem 0' }}>
    <code>{children}</code>
  </pre>
}
