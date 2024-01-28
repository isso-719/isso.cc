import * as fs from "fs";
import React from "react";

const Articles = ({jsonPath, tagName}: { jsonPath: string, tagName?: string }) => {
    const articles = JSON.parse(fs.readFileSync(jsonPath, "utf8"));
    return (
        <>
            <ul>
                {articles.map((article: any) => (
                    // tagが指定されている場合は、tagに一致する記事のみ表示する
                    (!tagName || article.tags.includes(tagName)) &&
                    <li className="py-5" key={article.id}>
                      <article className="flex flex-col space-y-2 xl:space-y-0">
                        <dl>
                          <dt className="sr-only">Published on</dt>
                          <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                            <time>{article.date}</time>
                          </dd>
                        </dl>
                        <div className="space-y-3">
                          <div>
                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                              <a className="text-gray-900 dark:text-gray-100"
                                 href={`/blog/${article.id}`}>
                                  {article.title}
                              </a>
                            </h2>
                            <div className="my-1 flex flex-wrap">
                                {article.tags.map((tag: any) => {
                                    return (
                                        <a
                                            className="mr-3 text-sm font-medium uppercase text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                                            href={`/tags/${tag}`}
                                            key={tag}>
                                            {tag}
                                        </a>
                                    );
                                })}
                            </div>
                          </div>
                          <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                            <p>{article.summary}</p>
                          </div>
                        </div>
                      </article>
                    </li>
                ))}
            </ul>
        </>
    );
}

export default Articles;