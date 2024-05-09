'use client'

import Link from 'next/link'
import SwitchThemeBtn from "@/app/components/switch_theme";

// ナビゲーション
const Navigation = () => {
    return (
        <header className="border-b py-5">
            <div className="container max-w-screen-xl mx-auto relative flex justify-left items-center">
                <Link href="/" className="px-5 font-bold text-2xl cursor-pointer dark:text-white">
                    ISSO BLOG
                </Link>

                <div className="absolute right-5">
                    <div className="flex space-x-4">
                        <Link href="/blog" className="hidden sm:block">BLOGS</Link>
                        <Link href="/tags" className="hidden sm:block">TAGS</Link>
                        <Link href="/about" className="hidden sm:block">ABOUT</Link>
                        {/* TODO: algolia search */}
                        {/*<button>*/}
                        {/*    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*/}
                        {/*         stroke="currentColor" className="h-6 w-6 text-gray-900 dark:text-gray-100">*/}
                        {/*        <path strokeLinecap="round" strokeLinejoin="round"*/}
                        {/*              d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"></path>*/}
                        {/*    </svg>*/}
                        {/*</button>*/}
                        <SwitchThemeBtn/>
                        <div className="sm:hidden">
                            <button type="button"
                                    className="text-gray-500 hover:text-gray-600 dark:hover:text-gray-400 focus:outline-none focus:text-gray-600 dark:focus:text-gray-400"
                                    onClick={() => {
                                        // @ts-ignore
                                        document.getElementById("mobile-menu").classList.remove("translate-x-full")
                                        // @ts-ignore
                                        document.getElementById("mobile-menu").classList.add("translate-x-0")
                                    }}>
                                <svg viewBox="0 0 24 24" className="mt-2 h-8 w-8 fill-current">
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
                                    ></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
                <div id="mobile-menu"
                     className="ml-0 fixed left-0 top-0 z-10 h-full w-full transform bg-white opacity-95 duration-300 ease-in-out dark:bg-gray-950 dark:opacity-[0.98] translate-x-full">
                    <div className="flex justify-end">
                        <button className="mr-8 mt-11 h-8 w-8" aria-label="Toggle Menu"
                            onClick={() => {
                                // @ts-ignore
                                document.getElementById("mobile-menu").classList.remove("translate-x-0")
                                // @ts-ignore
                                document.getElementById("mobile-menu").classList.add("translate-x-full")
                            }}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                 className="text-gray-900 dark:text-gray-100">
                                <path fillRule="evenodd"
                                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <nav className="fixed mt-8 h-full">
                        <div className="px-12 py-4">
                            <a className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100" href="/">
                                HOME
                            </a>
                        </div>
                        <div className="px-12 py-4">
                            <a className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                               href="/blog">
                                BLOGS
                            </a>
                        </div>
                        <div className="px-12 py-4">
                            <a className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                               href="/tags">
                                TAGS
                            </a>
                        </div>
                        <div className="px-12 py-4">
                            <a className="text-2xl font-bold tracking-widest text-gray-900 dark:text-gray-100"
                               href="/about">
                                ABOUT
                            </a>
                        </div>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Navigation