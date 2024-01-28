import {MDXRemote} from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'

export function Article(props) {
  const components = {
    a: ({href, children}) => (
      <a className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 font-bold break-all"
         href={href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
    pre: ({children: {props}}) => {
      let language = props.className ? props.className.replace('language-', '') : ''
      return (
        <SyntaxHighlighter language={language} style={"github-dark"}
                           customStyle={{borderRadius: '0.5rem', padding: '1rem', background: '#1f2937'}}>
          {props.children}
        </SyntaxHighlighter>
      )
    },
    code: ({children}) => {
      return (
        <code className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400 font-bold bg-gray-100 dark:bg-gray-800 rounded p-1 break-all">
          {children}
        </code>
      )
    },
    img: ({src, alt}) => {
      if (src.startsWith('http')) {
        return (
          <img src={src} alt={alt} className="w-full h-full object-contain rounded-lg" />
        )
      } else {
        return (
          <img src={"/static/articles/" + props.paramsId + "/" + src} alt={alt} className="w-full h-full object-contain rounded-lg" />
        )
      }
    },
  }
  return (
    <article className="prose dark:prose-invert max-w-none">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"></link>
      <MDXRemote
        {...props}
        components={{...components, ...(props.components || {})}}
        options={{
          mdxOptions: {
            remarkPlugins: [remarkGfm],
          },
        }}
      />
    </article>
  )
}

export default Article
