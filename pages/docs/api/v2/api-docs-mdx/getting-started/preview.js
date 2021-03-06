import { Code } from '~/components/text/code'

export default function Preview(props) {
  return (
    <div className="preview">
      <Code lang="bash">{`curl -X POST https://api.zeit.co/v6/now/deployments \\
-H "Authorization: Bearer $TOKEN" \\
-d '${(props.content || '').replace(/'/g, "\\'")}'`}</Code>

      <style jsx>{`
        .preview :global(pre) {
          margin-top: 0;
        }

        @media screen and (max-width: 700px) {
          .preview {
            margin: 0;
          }
        }
      `}</style>
    </div>
  )
}

Preview.defaultProps = {
  files: null
}
