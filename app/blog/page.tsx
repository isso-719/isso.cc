import Articles from "@/app/components/articles";
import {Metadata} from "next";
import MenuTags from "@/app/components/menu_tags";

export const metadata: Metadata = {
    metadataBase: new URL('https://isso.cc'),
}

const Page = (params: any) => {
    metadata.title = "BLOGS | ISSO BLOG";
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

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div>
                <div className="pb-6 pt-6">
                    <h1
                        className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:hidden sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                        All Posts
                    </h1>
                </div>
                <div className="flex sm:space-x-24">
                    <div className="hidden h-full max-h-screen min-w-[280px] max-w-[280px] flex-wrap overflow-auto rounded bg-gray-50 pt-5 shadow-md dark:bg-gray-900/70 dark:shadow-gray-800/40 sm:flex">
                        <MenuTags jsonPath={`public/static/data/tags.json`}/>
                    </div>
                    <div>
                        <Articles jsonPath={`public/static/data/articles.json`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Page