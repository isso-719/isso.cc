// @ts-ignore
import Article from "@/app/components/article";
import NotFound from "@/app/not-found";
import * as fs from "fs";
import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://isso.cc'),
}

const Page = ({params}: { params: { id: string } }) => {
    let article;
    // mdxファイルを読み込む
    try {
        article = fs.readFileSync(`public/static/articles/${params.id}/${params.id}.mdx`, "utf-8");
    } catch (e) {
        return (
            <NotFound/>
        )
    }
    // 最初の 6 行から, title, date, tags, summary を取得する
    const articleMeta = article.split("\n").slice(0, 6);
    // title, date, tags, summary を取得する
    const title = articleMeta[1].replace("title: ", "");
    const date = articleMeta[2].replace("date: ", "");
    const tags = articleMeta[3].replace("tags: ", "").split(",").map((tag) => tag.trim());
    const summary = articleMeta[4].replace("summary: ", "");
    const author = articleMeta[5].replace("author: ", "");
    const content = article.split("\n").slice(7).join("\n");
    
    metadata.title = `${title} | ISSO BLOG`;
    metadata.description = summary;
    metadata.openGraph = {
        title: `${title} | ISSO BLOG`,
        description: summary,
        type: "article",
        siteName: "ISSO BLOG",
        locale: 'ja_JP',
        url: `https://isso.cc/blog/${params.id}`,
        images: '/opengraph-image.jpeg',
    }
    metadata.twitter = {
        card: "summary_large_image",
        title: `${title} | ISSO BLOG`,
        description: summary,
        site: "@isso_app",
        images: '/opengraph-image.jpeg',
    }

    return (
        <div className="h-full">
            <section className="mx-auto max-w-xl px-4 sm:px-6 xl:max-w-3xl xl:px-0">
                <article>
                    <div className="xl:divide-y xl:divide-gray-200 xl:dark:divide-gray-700">
                        <header className="pt-6 xl:pb-6">
                            <div className="space-y-1 text-center">
                                <dl className="space-y-10">
                                    <div>
                                        <dt className="sr-only">Published on</dt>
                                        <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                                            <time dateTime={date}>{date}</time>
                                        </dd>
                                    </div>
                                </dl>
                                <div>
                                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-5xl md:leading-14">
                                        {title}
                                    </h1>
                                    <h2 className="py-4 leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:leading-10 md:leading-14">
                                        {author}
                                    </h2>
                                </div>
                            </div>
                        </header>
                        <div className="py-4 sm:py-6 xl:py-8 xl:col-span-3 xl:row-span-2">
                            <Article source={content} paramsId={params.id}/>
                        </div>
                    </div>
                    <footer>
                        <div
                            className="divide-gray-200 text-sm font-medium leading-5 dark:divide-gray-700 xl:col-start-1 xl:row-start-2 xl:divide-y">
                            <div className="py-4 xl:py-8">
                                <h2 className="text-xs uppercase tracking-wide text-gray-500 dark:text-gray-400">Tags</h2>
                                <div className="flex flex-wrap">
                                    {tags.map((tag) => {
                                        return (
                                            <a className="mr-3 text-sm font-medium uppercase text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                                               href={`/tags/${tag}`}
                                               key={tag}>
                                                {tag}
                                            </a>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>
                        <div className="pt-4 xl:pt-8"><a
                            className="text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                            aria-label="Back to the blog" href="/blog">← Back to the blog</a></div>
                    </footer>
                </article>
            </section>
        </div>
    )
}

export default Page