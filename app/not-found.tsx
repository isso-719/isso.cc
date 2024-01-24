import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://isso.cc'),
}

const NotFound = () => {
    metadata.title = "404 | ISSO BLOG";
    metadata.description = "いっそが思ったことを書くブログです。";
    return (
        <div className="absolute top-[45%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] w-full">
            <div className="flex flex-col items-center justify-center">
                <div className="flex flex-col items-center justify-center">
                    <h1 className="text-6xl font-bold">404</h1>
                    <h2 className="text-2xl font-bold">This page could not be found.</h2>
                </div>
            </div>
        </div>
    )
}

export default NotFound