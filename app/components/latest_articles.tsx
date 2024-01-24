import * as fs from "fs";
import React from "react";

const LatestArticles = () => {
    const articles = JSON.parse(fs.readFileSync("./data/latest_articles.json", "utf8"));
    return (
        <>
            {articles.map((article: { id: number; date: string; title: string; tags: string[]; summary: string }) => {
                return (
                    <li className="py-12 border-y" key={article.id}>
                        <article>
                            <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                                <dl>
                                    <dt className="sr-only">Published on</dt>
                                    <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                        <time dateTime={article.date}>{article.date}</time>
                                    </dd>
                                </dl>
                                <div className="space-y-5 xl:col-span-3">
                                    <div className="space-y-6">
                                        <div>
                                            <h2 className="text-2xl font-bold leading-8 tracking-tight">
                                                <a className="text-gray-900 dark:text-gray-100"
                                                   href={`/blog/${article.id}`}>
                                                    {article.title}
                                                </a>
                                            </h2>
                                            <div className="flex flex-wrap text-pink-500 hover:text-pink-600 dark:hover:text-pink-400">
                                                {article.tags.map((tag) => {
                                                    return (
                                                        <a className="mr-3 text-sm font-medium uppercase text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                                                           href={`/tags/${tag}`}
                                                           key={tag}>
                                                            {tag}
                                                        </a>
                                                    );
                                                })}
                                            </div>
                                        </div>
                                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                                            {article.summary}
                                        </div>
                                    </div>
                                    <div className="text-base font-medium leading-6">
                                        <a
                                            className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                                            aria-label="Read more: &quot;Release of Tailwind Nextjs Starter Blog v2.0&quot;"
                                            href={`/blog/${article.id}`}>
                                            Read more →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </li>
                );
            })}
        </>
    );
}

export default LatestArticles;