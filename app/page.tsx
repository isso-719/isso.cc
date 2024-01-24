import LatestArticles from "@/app/components/latest_articles";
import type { Metadata } from 'next'

export const metadata: Metadata = {
    metadataBase: new URL('https://isso.cc'),
}

const Page = (props: any) => {
    metadata.title = "HOME | ISSO BLOG";
    metadata.description = "いっそが思ったことを書くブログです。";
    metadata.openGraph = {
        title: "HOME | ISSO BLOG",
        description: "いっそが思ったことを書くブログです。",
        type: "website",
        siteName: "ISSO BLOG",
        locale: 'ja_JP',
        url: `https://isso.cc/`,
        images: '/opengraph-image.jpeg',
    }
    metadata.twitter = {
        card: "summary_large_image",
        title: "HOME | ISSO BLOG",
        description: "いっそが思ったことを書くブログです。",
        site: "@isso_app",
        images: '/opengraph-image.jpeg',
    }

    return (
        <>
            <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
                <div className="space-y-2 pb-8 pt-6 md:space-y-5">
                    <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        Latest
                    </h1>
                    <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
                        最近書いた記事
                    </p>
                </div>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <LatestArticles/>
                </ul>
                <div className="flex justify-end mt-8">
                    <a
                        href="/blog"
                        className="text-base font-medium leading-6 text-pink-500 hover:text-pink-600 dark:hover:text-pink-400"
                    >
                        All Posts →
                    </a>
                </div>
            </div>
        </>
    )
}

export default Page