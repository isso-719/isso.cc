import {MDXRemote} from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import SyntaxHighlighter from 'react-syntax-highlighter'
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import remarkToc from "remark-toc";

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

  let body = <MDXRemote
                        {...props}
                        components={{...components, ...(props.components || {})}}
                        options={{
                          mdxOptions: {
                            remarkPlugins: [remarkGfm, remarkToc],
                            rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings],
                          },
                        }}
                      />

  // body から h1 - h6 のタグを取得して目次を作成する
  // 1行の始まりが # で始まる行を取得する
  // body.props.source

  const headings = body.props.source.split('\n').filter((line) => line.match(/^#+ /)).map((line) => {
    const level = line.match(/^#+ /)[0].length - 1
    const text = line.replace(/^#+ /, '')
    const id = text.replace(/ /g, '-').toLowerCase()
    return {level, text, id}
  })

  return (
    <article className="prose dark:prose-invert max-w-none">
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.8.0/styles/github-dark.min.css"></link>
      {headings.length > 0 && (
          <nav className="pt-6 pb-8">
            <h2 className="m-0 text-lg font-bold text-gray-900 dark:text-gray-100">目次</h2>
            <ul className="m-0 p-0 list-none">
              {headings.map((heading) => (
                <li key={heading.id} style={{marginLeft: `${(heading.level - 1) * 0.5}rem`}} className="p-0">
                  <a href={`#${heading.id}`} className="!text-gray-500 dark:!text-gray-400 hover:!text-gray-600 dark:hover:!text-gray-300">
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
      )}
      {body}
    </article>
  )
}

export default Article
