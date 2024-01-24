import {Metadata} from "next";
import * as fs from "fs";

export const metadata: Metadata = {
    metadataBase: new URL('https://isso.cc'),
}

const Page = (params: any) => {
    metadata.title = "TAGS | ISSO BLOG";
    metadata.description = "いっそが思ったことを書くブログです。";
    metadata.openGraph = {
        title: "BLOGS | ISSO BLOG",
        description: "いっそが思ったことを書くブログです。",
        type: "website",
        siteName: "ISSO BLOG",
        locale: 'ja_JP',
        url: `https://isso.cc/blog/`,
        images: '/opengraph-image.jpeg',
    }
    metadata.twitter = {
        card: "summary_large_image",
        title: "BLOGS | ISSO BLOG",
        description: "いっそが思ったことを書くブログです。",
        site: "@isso_app",
        images: '/opengraph-image.jpeg',
    }

    // {"uncategorized":{"ids":["hello_world"],"count":1}}
    const tags = JSON.parse(fs.readFileSync("./data/tags.json", "utf8"));

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <main className="mb-auto">
                <div
                    className="flex flex-col items-start justify-start divide-y divide-gray-200 dark:divide-gray-700 md:mt-24 md:flex-row md:items-center md:justify-center md:space-x-6 md:divide-y-0">
                    <div className="space-x-2 pb-8 pt-6 md:space-y-5">
                        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:border-r-2 md:px-6 md:text-6xl md:leading-14">
                            Tags
                        </h1>
                    </div>
                    <div className="flex max-w-lg flex-wrap">
                        {Object.keys(tags).map((tag) => {
                            return (
                                <div className="mb-2 mr-5 mt-2" key={tag}>
                                    <a className="mr-3 text-sm font-medium uppercase text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                                       href={`/tags/${tag}`}>
                                        {tag}
                                    </a>
                                    <a className="-ml-2 text-sm font-semibold uppercase text-gray-600 dark:text-gray-300"
                                       aria-label="View posts tagged next-js" href="/tags/next-js">
                                        ({tags[tag].count})
                                    </a>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </main>
        </div>
    )
}

export default Page