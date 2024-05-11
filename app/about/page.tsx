import {Metadata} from "next";

export const metadata: Metadata = {
    metadataBase: new URL('https://isso.cc'),
}

const Page = () => {
    metadata.title = "ABOUT | ISSO BLOG";
    metadata.description = "いっそが思ったことを書くブログです。";
    metadata.openGraph = {
        title: "ABOUT | ISSO BLOG",
        description: "いっそが思ったことを書くブログです。",
        type: "website",
        siteName: "ISSO BLOG",
        locale: 'ja_JP',
        url: `https://isso.cc/about`,
        images: '/opengraph-image.jpeg',
    }
    metadata.twitter = {
        card: "summary_large_image",
        title: "ABOUT | ISSO BLOG",
        description: "いっそが思ったことを書くブログです。",
        site: "@isso_app",
        images: '/opengraph-image.jpeg',
    }

    return (
        <div className="mx-auto max-w-3xl px-4 sm:px-6 xl:max-w-5xl xl:px-0">
            <div className="h-[80vh] min-h-[320px] flex justify-center items-center flex-col">
                <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Kazuki Isogai
                </h1>
                <p className="mt-6 text-lg text-center text-gray-500 dark:text-gray-400">
                    a.k.a. isso
                </p>
                <div className="flex justify-center mt-8">
                    <a href="https://github.com/isso-719" target="_blank" rel="noreferrer">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 98" fill="currentColor"
                                className="h-6 w-6 text-gray-900 dark:text-gray-100 hover:text-gray-600 dark:hover:text-gray-400 transition-colors duration-300">
                            <path fillRule="evenodd" clipRule="evenodd" d="M48.854 0C21.839 0 0 22 0 49.217c0 21.756 13.993 40.172 33.405 46.69 2.427.49 3.316-1.059 3.316-2.362 0-1.141-.08-5.052-.08-9.127-13.59 2.934-16.42-5.867-16.42-5.867-2.184-5.704-5.42-7.17-5.42-7.17-4.448-3.015.324-3.015.324-3.015 4.934.326 7.523 5.052 7.523 5.052 4.367 7.496 11.404 5.378 14.235 4.074.404-3.178 1.699-5.378 3.074-6.6-10.839-1.141-22.243-5.378-22.243-24.283 0-5.378 1.94-9.778 5.014-13.2-.485-1.222-2.184-6.275.486-13.038 0 0 4.125-1.304 13.426 5.052a46.97 46.97 0 0 1 12.214-1.63c4.125 0 8.33.571 12.213 1.63 9.302-6.356 13.427-5.052 13.427-5.052 2.67 6.763.97 11.816.485 13.038 3.155 3.422 5.015 7.822 5.015 13.2 0 18.905-11.404 23.06-22.324 24.283 1.78 1.548 3.316 4.481 3.316 9.126 0 6.6-.08 11.897-.08 13.526 0 1.304.89 2.853 3.316 2.364 19.412-6.52 33.405-24.935 33.405-46.691C97.707 22 75.788 0 48.854 0z"/>
                        </svg>
                    </a>
                </div>
            </div>
            <div id="about-me" className="pb-36">
                <div className="flex justify-between flex-col sm:flex-row items-center sm:items-start">
                    <div className="w-full sm:w-1/3">
                        <img className="w-full"
                             src="/static/assets/images/kazuki_isogai.png"
                             alt="Kazuki Isogai"/>
                    </div>
                    <div className="py-8 sm:py-0 sm:pl-10 w-full sm:w-2/3">
                        <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">About Me</h2>
                        <p className="text-base font-normal text-gray-600 dark:text-gray-300">
                            こんにちは。磯貝和希です。よく周囲からは「いっそ」と呼ばれます。<br/><br/>
                            2 歳からゲームを機にコンピューターを触り始めました。<br/>
                            その後、Minecraft のサーバー構築をきっかけにプログラミングに興味を持ち、現在は Web アプリケーションを中心に開発を行っています。<br/>
                            また、日本を代表する EdTech で 3 年間、中高生中心に Web やゲームの開発、UI/UX を教える活動をし、
                            それ以外でも様々な IT 企業でインターンシップを経験しています。<br/>
                            大学での専門分野は Web サービス, HCI, ネットワーキング。複数画面インタラクティブデジタルサイネージシステムの研究を行っていました。<br/>
                            モダンな技術にも興味があり、最近は Go, TypeScript, GCP などを使って Web 開発を行っています。<br/>
                        </p>
                    </div>
                </div>
            </div>
            <div id="educations" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Educational History</h2>
                <ol className="relative border-s border-gray-200 dark:border-gray-700">
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2005 - March 2008</p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">横浜れんげ幼稚園</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2008 - March 2014</p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">横浜市立富士見台小学校</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400"></p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2014 - March 2017</p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">法政大学第二中学校</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">放送部</p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2017 - March 2020</p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">法政大学第二高等学校</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            全日制 / 普通科 <br/>
                            放送部
                        </p>
                    </li>
                    <li className="mb-10 ms-4">
                        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2020 - March 2024</p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">法政大学</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            情報科学部コンピュータ科学科 ISコース<br />
                            サービスシステム研究室 (藤田 悟 研究室)<br />
                            理学学士 (情報科学)<br />
                            Research theme: 複数画面インタラクティブデジタルサイネージシステム
                        </p>
                    </li>
                </ol>
            </div>
            <div id="jobs" className="pb-36">
                <h2 className="pb-2 text-4xl font-bold text-center sm:text-left">Job Experience</h2>
                <p className="mb-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Show Permanent employment, Long-term Internship and Part-time Job.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="w-full px-0 pb-4">
                        <h3 className="text-center sm:text-left text-lg font-semibold text-gray-900 dark:text-white">合同会社 DMM.com</h3>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            April 2024 - Present
                        </p>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            新卒入社した。
                        </p>
                    </div>
                    <div className="w-full px-0 pb-4">
                        {/*  this is empty section.  */}
                    </div>
                    <div className="w-full px-0 pb-4">
                        <h3 className="text-center sm:text-left text-lg font-semibold text-gray-900 dark:text-white">ライフイズテック株式会社</h3>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            June 2020 - June 2023
                        </p>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            メンターとして、中高生にプログラミングを教える (Web Service, Web Design, Unity, etc...)。<br/>
                            また、Webサービスプログラミングコースのリーダやメンター講師を務め、同コースのカリキュラムの作成やメンターの育成に貢献した。
                        </p>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <h3 className="text-center sm:text-left text-lg font-semibold text-gray-900 dark:text-white">学校法人 法政大学 (CIS RAT)</h3>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            September 2021 - April 2024
                        </p>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            法政大学情報科学部で教育・研究等に使用されるコンピュータシステム環境の提供のため、
                            それに関わるサーバー、クライアント PC、およびネットワークの仕様策定・構築・運用・保守を行う。
                        </p>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <h3 className="text-center sm:text-left text-lg font-semibold text-gray-900 dark:text-white">株式会社サイバーエージェント (株式会社アプリボット)</h3>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            November 2022 - November 2022
                        </p>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            バックエンドエンジニアとして、Goを用いた新規IP開発に携わった。
                        </p>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <h3 className="text-center sm:text-left text-lg font-semibold text-gray-900 dark:text-white">株式会社Stack (株式会社 Appify Technologies)</h3>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            April 2022 - August 2023
                        </p>
                        <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            バックエンドエンジニアとして、GoやGraphQL, Google Cloud Platformを用いたShopifyアプリの開発に携わった。
                        </p>
                    </div>
                </div>
                <p className="text-center sm:text-left mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                    ... and more
                </p>
            </div>
            <div id="works" className="pb-36">
                <h2 className="pb-2 text-4xl font-bold text-center sm:text-left">Work</h2>
                <p className="mb-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Show a small selection of my work.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] font-bold text-white text-2xl">
                            <a href="https://isogai.notion.site/GayaON-5ad2fcdd75ac4eecac09d62cd6562562" target="_blank" rel="noreferrer">
                                <div className="relative w-full h-full">
                                    <img className="w-full hover:opacity-80 transition-opacity"
                                            src="/static/assets/images/gaya-on.svg"
                                            alt="GayaON"/>
                                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg font-bold">GayaON!</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] font-bold text-white text-2xl">
                            <a href="https://isogai.notion.site/Keypod-0ca847b1d9d54fb0a48c07828bdd31b5" target="_blank" rel="noreferrer">
                                <div className="relative w-full h-full">
                                    <img className="w-full hover:opacity-80 transition-opacity"
                                         src="/static/assets/images/keypod.svg"
                                         alt="KeyPod"/>
                                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg font-bold">Keypod</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] font-bold text-white text-2xl">
                            <a href="https://isogai.notion.site/Pomod-co-d87c0935545c486592c6f26f39dcf6ce" target="_blank" rel="noreferrer">
                                <div className="relative w-full h-full">
                                    <img className="w-full hover:opacity-80 transition-opacity"
                                         src="/static/assets/images/pomodco.svg"
                                         alt="Pomodco"/>
                                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg font-bold">Pomod.co</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] font-bold text-white text-2xl">
                            <a href="https://isogai.notion.site/BOT-8daf568712aa4e34bf3f9ef3eecedc74" target="_blank" rel="noreferrer">
                                <div className="relative w-full h-full">
                                    <img className="w-full hover:opacity-80 transition-opacity"
                                         src="/static/assets/images/asakatsu.svg"
                                         alt="Asakatsu BOT"/>
                                    <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity">
                                        <p className="text-white text-lg font-bold">朝活 BOT</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
                <p className="pt-8 text-2xl font-bold text-center sm:text-left">
                    See more on my <a href="https://github.com/isso-719" target="_blank" rel="noreferrer"
                                      className="text-2xl font-bold text-pink-500 hover:text-pink-600 dark:hover:text-pink-400">
                    GitHub
                </a> and <a href="https://isogai.notion.site/ec8f390467934e29a7dc7da0c28180fd" target="_blank" rel="noreferrer"
                                           className="text-2xl font-bold text-pink-500 hover:text-pink-600 dark:hover:text-pink-400">
                    Notion
                </a>.
                </p>
            </div>
            <div id="skill" className="pb-36">
                <h2 className="pb-2 text-4xl font-bold text-center sm:text-left">Skill</h2>
                <p className="mb-8 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    Show a small selection of my skills.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <path
                                d="M400.1 194.8C389.2 197.6 380.2 199.1 371 202.4C363.7 204.3 356.3 206.3 347.8 208.5L347.2 208.6C343 209.8 342.6 209.9 338.7 205.4C334 200.1 330.6 196.7 324.1 193.5C304.4 183.9 285.4 186.7 267.7 198.2C246.5 211.9 235.6 232.2 235.9 257.4C236.2 282.4 253.3 302.9 277.1 306.3C299.1 309.1 316.9 301.7 330.9 285.8C333 283.2 334.9 280.5 337 277.5V277.5L337 277.5C337.8 276.5 338.5 275.4 339.3 274.2H279.2C272.7 274.2 271.1 270.2 273.3 264.9C277.3 255.2 284.8 239 289.2 230.9C290.1 229.1 292.3 225.1 296.1 225.1H397.2C401.7 211.7 409 198.2 418.8 185.4C441.5 155.5 468.1 139.9 506 133.4C537.8 127.8 567.7 130.9 594.9 149.3C619.5 166.1 634.7 188.9 638.8 218.8C644.1 260.9 631.9 295.1 602.1 324.4C582.4 345.3 557.2 358.4 528.2 364.3C522.6 365.3 517.1 365.8 511.7 366.3C508.8 366.5 506 366.8 503.2 367.1C474.9 366.5 449 358.4 427.2 339.7C411.9 326.4 401.3 310.1 396.1 291.2C392.4 298.5 388.1 305.6 382.1 312.3C360.5 341.9 331.2 360.3 294.2 365.2C263.6 369.3 235.3 363.4 210.3 344.7C187.3 327.2 174.2 304.2 170.8 275.5C166.7 241.5 176.7 210.1 197.2 184.2C219.4 155.2 248.7 136.8 284.5 130.3C313.8 124.1 341.8 128.4 367.1 145.6C383.6 156.5 395.4 171.4 403.2 189.5C405.1 192.3 403.8 193.9 400.1 194.8zM48.3 200.4C47.05 200.4 46.74 199.8 47.36 198.8L53.91 190.4C54.53 189.5 56.09 188.9 57.34 188.9H168.6C169.8 188.9 170.1 189.8 169.5 190.7L164.2 198.8C163.6 199.8 162 200.7 161.1 200.7L48.3 200.4zM1.246 229.1C0 229.1-.3116 228.4 .3116 227.5L6.855 219.1C7.479 218.2 9.037 217.5 10.28 217.5H152.4C153.6 217.5 154.2 218.5 153.9 219.4L151.4 226.9C151.1 228.1 149.9 228.8 148.6 228.8L1.246 229.1zM75.72 255.9C75.1 256.8 75.41 257.7 76.65 257.7L144.6 258C145.5 258 146.8 257.1 146.8 255.9L147.4 248.4C147.4 247.1 146.8 246.2 145.5 246.2H83.2C81.95 246.2 80.71 247.1 80.08 248.1L75.72 255.9zM577.2 237.9C577 235.3 576.9 233.1 576.5 230.9C570.9 200.1 542.5 182.6 512.9 189.5C483.9 196 465.2 214.4 458.4 243.7C452.8 268 464.6 292.6 487 302.6C504.2 310.1 521.3 309.2 537.8 300.7C562.4 287.1 575.8 268 577.4 241.2C577.3 240 577.3 238.9 577.2 237.9z"/>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Backend, CLI tools
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 14" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <path
                                d="M 4.2885412,11.577814 C 6.9452811,11.94031 9.5545715,12.296822 12.215586,12.660173 11.308918,11.150769 10.42576,9.6798365 9.5353355,8.1969355 7.7908211,9.3211875 6.0625509,10.434753 4.2889687,11.577814 Z M 12.965799,3.2228685 c -0.234254,0.35181 -0.468937,0.703192 -0.702763,1.055002 -0.80322,1.208464 -1.606441,2.416928 -2.4088065,3.625819 -0.04488,0.06754 -0.102593,0.120975 -0.03975,0.224423 0.7754345,1.280279 1.5444565,2.5644065 2.3156175,3.8472495 0.12183,0.202622 0.244513,0.404389 0.402251,0.598889 0.1556,-3.1137075 0.311627,-6.2274155 0.467655,-9.3411225 -0.01154,-0.0034 -0.02308,-0.0068 -0.0342,-0.0098 z M 2.3815877,7.2146045 c 0.036335,0.03463 0.1265318,0.05429 0.1688515,0.03377 0.7438017,-0.365489 1.4923055,-0.722855 2.2194358,-1.118695 0.237247,-0.129096 0.4197777,-0.359931 0.6241094,-0.547591 0.6766885,-0.62069 1.3525221,-1.242662 2.0279282,-1.864634 0.041465,-0.03805 0.090197,-0.07524 0.11499,-0.123112 0.2428042,-0.474067 0.4809062,-0.950698 0.7279852,-1.441009 -0.2945284,-0.110715 -0.5732403,-0.218866 -0.8557994,-0.317184 -0.038045,-0.01325 -0.098746,0.01325 -0.1402109,0.03634 C 6.614845,2.2375505 5.9488433,2.5833755 5.315757,2.9817795 4.9990001,3.1809815 4.7408068,3.4750825 4.4603851,3.7307105 4.0081195,4.1432215 3.5567088,4.5570145 3.1112828,4.9767925 2.992873,5.0883625 2.88515,5.2153215 2.7932434,5.3495485 2.4884558,5.7932645 2.1930725,6.2433925 1.88401,6.7059175 c 0.1726988,0.179111 0.3300086,0.3501 0.4980052,0.509119 z M 5.099456,6.6084485 C 4.7296926,8.1712875 4.361639,9.7255765 3.9816162,11.330735 5.7633204,10.182545 7.5044147,9.0608565 9.2335398,7.9468645 7.8575068,7.5014385 6.4857484,7.0572945 5.099456,6.6088765 Z m 7.411941,-3.370618 c -1.505557,0.251354 -2.9752065,0.49715 -4.4636651,0.745511 0.506982,1.233258 1.0037048,2.441722 1.5149616,3.684811 0.9887435,-1.485466 1.9578225,-2.941009 2.9491305,-4.430322 z M 5.1614395,6.2886995 C 6.5173814,6.7289965 7.845965,7.1603155 9.2134486,7.6040315 8.7056116,6.3669275 8.215301,5.1729975 7.714731,3.9542735 6.861924,4.7339835 6.0223685,5.5017235 5.1614395,6.2886995 Z M 2.4375866,8.1259755 C 1.9566803,9.2754475 1.4924455,10.385594 1.0196612,11.51583 1.9284671,11.4889 2.8094874,11.462824 3.7204307,11.435893 3.292531,10.33216 2.8731807,9.2497995 2.4375866,8.1255475 Z m 1.314477,2.5242235 c 0.011114,-0.0021 0.022229,-0.0051 0.03377,-0.0073 0.324024,-1.3482475 0.6531776,-2.6875185 0.9844685,-4.0887725 -0.738672,0.38387 -1.4431462,0.749787 -2.1668566,1.12639 0.369336,0.960102 0.7630379,1.972784 1.1490453,2.9696495 z M 11.966369,3.0193925 c -0.431318,-0.114135 -0.862638,-0.228698 -1.293958,-0.342406 -0.620262,-0.162867 -1.2409515,-0.324024 -1.8607863,-0.4886 -0.077372,-0.02052 -0.1333713,-0.0342 -0.1791108,0.05942 -0.2188658,0.448846 -0.4449986,0.894272 -0.6672841,1.341408 -0.00684,0.01368 -0.00556,0.03163 -0.010687,0.06626 1.3431177,-0.203476 2.6772582,-0.405671 4.0109722,-0.607865 4.28e-4,-0.0094 4.28e-4,-0.01881 8.54e-4,-0.02821 z M 9.4643745,1.9985885 c 1.1580235,0.320604 2.3164715,0.640781 3.5151035,0.972499 -0.201767,-0.574522 -0.388572,-1.107153 -0.580933,-1.655172 -0.98447,0.218438 -1.956541,0.433884 -2.9290405,0.64933 -0.0017,0.01111 -0.0034,0.0218 -0.0051,0.03292 z M 4.0504392,11.836861 c -0.4355942,-0.05001 -0.8823026,-0.0038 -1.3238814,0.0034 -0.3629239,0.0064 -0.7254204,0.02009 -1.0879168,0.0312 -0.037618,0.0013 -0.074808,0.0085 -0.1119977,0.04873 2.9987176,0.27743 5.9974351,0.554432 8.9957257,0.831861 0.0021,-0.01325 0.0038,-0.02693 0.006,-0.04018 C 9.5669685,12.580664 8.6060106,12.44943 7.6446256,12.318196 6.4468485,12.154474 5.2512087,11.974936 4.0504392,11.836435 Z M 1.0786524,10.481348 C 1.4650873,9.5849375 1.8498123,8.6872465 2.237957,7.7916915 c 0.0389,-0.08977 0.035908,-0.150897 -0.040182,-0.22314 -0.1624398,-0.154318 -0.31291,-0.321032 -0.490311,-0.505272 -0.2398119,1.184098 -0.4736392,2.338273 -0.7074665,3.4928755 0.00855,0.0038 0.017526,0.0081 0.026076,0.0124 0.017954,-0.02864 0.039755,-0.056 0.053007,-0.08678 z m 7.615845,-8.7195795 c 0.6514681,-0.167996 1.3127676,-0.299658 1.9697916,-0.446281 0.04232,-0.0094 0.08421,-0.02351 0.126105,-0.03548 -0.0021,-0.01069 -0.0043,-0.02137 -0.0064,-0.03206 -0.9254775,0.124394 -1.8513826,0.249216 -2.8238819,0.380023 0.2650328,0.115845 0.4693645,0.202194 0.7343973,0.134226 z"/>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Backend
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 90" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <g clipPath="url(#clip0_11_2)">
                                <path
                                    d="M0 67.5V135H135V0H0V67.5ZM108.785 62.1169C112.215 62.9733 114.826 64.5131 117.243 66.9938C118.475 68.31 120.319 70.7273 120.475 71.3222C120.517 71.4994 114.653 75.4312 111.092 77.6292C110.962 77.7178 110.434 77.1694 109.86 76.3087C108.127 73.7817 106.3 72.6848 103.511 72.4866C99.4233 72.2208 96.7866 74.3555 96.8077 77.9372C96.7866 78.8147 96.9848 79.6964 97.3772 80.4642C98.28 82.3331 99.9717 83.4511 105.199 85.7166C114.868 89.8678 118.998 92.6142 121.567 96.5039C124.445 100.853 125.082 107.798 123.15 112.982C120.998 118.585 115.678 122.407 108.207 123.66C105.899 124.078 100.406 124.01 97.9214 123.55C92.4961 122.584 87.3534 119.901 84.1894 116.387C82.9364 115.024 80.5191 111.442 80.6752 111.202C80.7427 111.113 81.2911 110.763 81.907 110.409C82.523 110.055 84.7842 108.738 86.9189 107.506L90.8086 105.245L91.6228 106.452C92.7661 108.186 95.2467 110.561 96.7444 111.35C101.052 113.636 106.962 113.307 109.886 110.692C111.071 109.704 111.734 108.186 111.645 106.65C111.645 105.089 111.447 104.389 110.633 103.22C109.578 101.727 107.447 100.453 101.36 97.8159C94.3945 94.8038 91.3823 92.9602 88.6613 89.9944C86.9484 88.0369 85.6744 85.7334 84.9487 83.2486C84.4425 81.3375 84.3117 76.545 84.7083 74.6339C86.1384 67.8881 91.2347 63.2095 98.55 61.8258C100.925 61.3659 106.46 61.5389 108.789 62.1127L108.785 62.1169ZM77.1019 67.7658L77.1441 73.2797H59.5645V123.225H47.1277V73.2797H29.5734V67.8755C29.5734 64.8633 29.6409 62.3616 29.7253 62.2941C29.7928 62.2055 40.4705 62.1633 53.4347 62.1844L77.0344 62.2519L77.1019 67.7658Z"/>
                            </g>
                            <path
                                d="M195 0V136H331V0H195ZM269.013 106.065C269.013 119.301 261.242 125.343 249.92 125.343C239.691 125.343 233.77 120.064 230.734 113.657L241.148 107.372C243.154 110.923 244.975 113.929 249.376 113.929C253.563 113.929 256.234 112.287 256.234 105.886V62.4434H269.013V106.065ZM299.244 125.343C287.373 125.343 279.694 119.699 275.959 112.287L286.373 106.279C289.107 110.743 292.687 114.051 298.972 114.051C304.252 114.051 307.657 111.408 307.657 107.736C307.657 103.365 304.193 101.815 298.336 99.2363L295.149 97.8714C285.921 93.9566 279.82 89.0071 279.82 78.5934C279.82 69.0006 287.135 61.7149 298.52 61.7149C306.656 61.7149 312.485 64.5369 316.676 71.944L306.719 78.3214C304.533 74.4066 302.163 72.8571 298.491 72.8571C294.761 72.8571 292.391 75.2274 292.391 78.3214C292.391 82.1489 294.761 83.6934 300.254 86.0929L303.441 87.4577C314.311 92.1011 320.411 96.8709 320.411 107.552C320.411 119.029 311.363 125.339 299.249 125.339L299.244 125.343Z"/>
                            <defs>
                                <clipPath id="clip0_11_2">
                                    <rect width="135" height="135"/>
                                </clipPath>
                            </defs>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Frontend, Backend, Desktop Apps
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 135" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <path
                                d="M0 0L10.7228 120.516L58.8302 134.091L107.268 120.516L118 0H0ZM94.6995 39.311H38.2159L39.4719 54.4767H93.439L89.2509 100.072L59.1699 108.363V108.453H58.8346L28.4988 100.072L26.6528 76.7715H41.3179L42.4085 88.5045L58.8346 92.9473L75.3367 88.5045L77.1872 69.3965H25.8974L21.9552 24.6459H96.0448L94.6995 39.311Z"/>
                            <path
                                d="M214 0H331L320.36 120.394L272.376 134L224.655 120.387L214 0ZM309.218 24.6361L235.789 24.621L236.973 39.2555L293.386 39.2705L291.97 54.4378H254.971L256.312 68.8019H290.756L288.718 88.4748L272.504 92.965L256.042 88.4372L254.986 76.656H240.45L242.068 98.1835L272.504 107.682L302.437 99.1446L309.218 24.6361Z"/>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Frontend, Design
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 331 249" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M129.004 86.593C131.653 87.7286 132.752 89.9385 133.244 92.4887C133.773 95.2111 134.584 97.7572 136.642 99.7498C136.917 100.012 137.114 100.365 137.327 100.693C139.861 104.543 139.283 107.261 135.318 109.557C133.543 110.59 131.665 111.447 129.832 112.37C127.069 113.755 124.646 115.531 122.596 117.896C119.988 120.889 116.803 123.046 112.789 123.796C107.988 124.694 103.769 122.595 101.719 118.109C101.28 117.15 100.784 116.859 99.7509 116.806C97.2048 116.654 94.6587 116.396 92.1331 116.023C87.6847 115.367 83.4125 116.461 79.0788 117.097C77.365 117.347 76.1719 117.913 75.0362 119.372C72.7977 122.246 69.4111 122.984 65.9999 122.533C63.2324 122.164 60.3911 121.467 57.8819 120.282C54.2248 118.569 50.4405 117.777 46.5045 117.351C45.0162 117.191 43.5197 116.99 42.0601 116.679C38.1118 115.822 36.2382 113.259 37.2878 109.385C38.1528 106.191 38.2717 103.149 37.8617 99.8892C37.2755 95.2357 38.6858 93.0504 43.3065 91.7384C47.0047 90.6888 48.411 87.4867 50.6742 85.0678C50.8505 84.8751 50.8177 84.4282 50.789 84.1084C50.1453 77.7903 52.0313 72.0257 54.6799 66.4498C57.5826 60.3408 61.4735 54.8673 65.6924 49.6071C70.2803 43.8876 72.1376 37.3071 71.6702 30.0215C71.3217 24.5357 70.8543 19.0417 72.1745 13.597C73.8964 6.463 78.8 1.93663 86.0898 1.24783C89.2017 0.952634 92.4693 0.821434 95.4992 1.43233C102.58 2.85092 105.934 8.04559 107.516 14.6466C108.759 19.8289 108.918 25.1138 108.689 30.3905C108.463 35.4826 109.636 40.0869 112.703 44.1623C114.909 47.0938 117.328 49.8654 119.394 52.8911C121.985 56.6959 124.617 60.5171 126.671 64.6171C130.091 71.4353 131.395 78.2413 129.004 86.593ZM72.8797 101.992C74.6631 104.994 76.7008 107.421 80.0792 108.581C87.6109 111.176 94.4701 109.606 100.973 105.547C101.698 105.1 102.449 104.186 102.596 103.386C103.285 99.5202 103.773 95.6129 104.326 91.7097C104.843 88.0484 105.589 84.5184 109.341 82.6119C109.665 82.4438 109.825 81.8493 109.952 81.427C110.64 79.1761 111.747 78.0937 114.015 78.4463C118.541 79.1515 123.035 80.1601 124.58 85.6787C125.507 84.1412 125.04 82.821 124.072 81.8329C122.973 80.7054 121.694 79.623 120.288 78.9588C118.5 78.1265 117.865 77.3106 118.029 75.1007C118.59 67.5486 115.073 61.5421 110.03 56.2695C109.923 56.1588 109.726 56.126 109.57 56.0604C114.695 62.1243 118.086 68.5735 115.692 76.7817C113.002 76.5808 112.965 76.589 112.723 75.4123C111.715 70.5128 109.718 66.0029 107.52 61.5421C105.696 57.8152 104.076 53.9694 102.555 50.1114C101.223 46.733 100.153 43.2316 98.9965 39.8778C97.7337 40.7101 96.5488 41.5916 95.2737 42.3214C93.6583 43.2439 91.9486 43.986 90.3333 44.9085C86.2456 47.2291 82.9246 46.9175 79.3494 43.8425C78.3695 42.9938 77.283 42.2722 76.0202 41.3292C75.4093 47.799 73.2322 53.379 70.7969 58.8853C69.694 61.374 68.5747 63.8504 67.4226 66.3104C65.2414 70.972 64.0729 75.8879 63.6219 81.3655C61.658 78.5242 61.1127 75.7198 61.3054 72.735C61.5514 68.877 62.9495 65.3838 64.733 62.0136C65.4095 60.7303 66.0081 59.4183 66.6477 58.1104C66.5247 58.053 66.3976 57.9997 66.2746 57.9423C63.4497 62.4031 60.8954 67.0074 59.8704 72.2594C58.5338 79.0982 60.8052 83.6 66.7543 87.13C70.4894 89.3399 73.9005 92.0459 75.9095 96.068C77.529 99.2865 76.4835 101.287 72.8797 101.992ZM65.0159 118.72C68.4722 118.462 70.9486 117.999 72.3672 115.469C73.7857 112.948 73.3142 110.496 71.7932 108.2C70.8338 106.744 69.7145 105.387 68.7469 103.932C66.9347 101.193 65.1594 98.4214 63.4087 95.6457C62.1459 93.6367 61.1168 91.4637 59.69 89.59C57.5703 86.8021 53.905 85.5311 51.1129 89.8852C49.5959 92.255 47.5869 93.7515 44.8809 94.5715C42.0683 95.4202 41.3016 97.0848 41.5353 100.049C41.7075 102.292 42.0437 104.678 41.5025 106.794C40.252 111.685 41.0843 113.247 46.0986 113.759C50.6496 114.231 55.0899 114.952 59.2677 117.097C61.2439 118.105 63.6137 118.343 65.0159 118.72ZM111.255 86.9291C110.587 87.7778 109.738 88.4994 109.374 89.4178C108.795 90.8446 108.324 92.3985 108.201 93.9196C107.807 98.6592 107.348 103.362 105.741 107.876C105.413 108.798 105.224 109.766 105.048 110.725C104.499 113.673 104.79 116.42 107.299 118.462C109.771 120.487 112.604 120.553 115.306 119.245C117.291 118.294 119.3 117.043 120.78 115.44C123.404 112.599 126.454 110.541 129.902 108.93C131.226 108.315 132.534 107.618 133.74 106.798C135.13 105.855 135.4 104.739 134.662 103.218C134.174 102.226 133.572 101.234 132.825 100.414C131.522 98.979 130.845 97.3062 130.443 95.4653C130.189 94.3214 129.923 93.157 129.443 92.1033C128.303 89.5572 125.011 88.9955 122.768 90.6314C121.341 91.6728 119.681 92.5133 118.004 93.075C115.872 93.7966 113.994 92.9561 112.891 91.0004C112.231 89.836 111.87 88.5076 111.255 86.9291ZM85.4994 43.9614C86.1349 43.7933 87.2665 43.6826 88.2341 43.2152C90.7433 42.0385 93.1868 40.7183 95.6386 39.4186C96.0978 39.1767 96.516 38.8405 96.9096 38.4961C99.5418 36.1509 99.1195 33.5475 95.9092 32.1289C93.6091 31.1203 91.3213 30.0953 89.0459 29.0293C86.0529 27.6435 83.1583 27.5656 80.44 29.6443C78.6893 30.9809 76.9796 32.3749 75.274 33.7689C74.2531 34.5929 74.0112 35.6425 74.5319 36.8684C75.356 38.7995 81.9652 43.6252 84.1013 43.8425C84.4088 43.8835 84.7204 43.8999 85.4994 43.9614ZM94.343 30.1486C94.9498 30.411 95.4254 30.575 95.8436 30.821C97.2253 31.6451 98.156 31.0916 98.4102 29.7222C98.7833 27.6804 99.2835 25.5484 99.017 23.5394C98.5783 20.1856 96.0691 17.9019 93.4492 17.7666C90.3005 17.6149 87.6806 20.2184 87.1107 24.0437C86.672 26.9834 86.7499 27.0941 89.6158 27.7665C89.9233 26.5406 90.0422 25.2204 90.6121 24.138C90.981 23.4328 92.0183 22.6497 92.7317 22.6743C93.4451 22.6907 94.4086 23.5394 94.7735 24.2692C95.7329 26.1798 95.409 28.1478 94.343 30.1486ZM113.564 84.8792C113.662 86.5192 114.011 88.3231 115.794 89.1636C117.487 89.9713 119.008 89.0693 120.386 88.0648C120.726 87.8147 121.042 87.5114 121.317 87.1916C122.297 86.0641 122.284 84.7152 121.054 83.8665C119.91 83.0752 118.615 82.4028 117.295 81.96C114.798 81.1318 113.547 82.124 113.564 84.8792ZM80.3785 28.2503C81.1985 27.6025 82.4736 27.09 82.5474 26.434C82.8262 23.9986 82.1948 21.678 80.3047 19.9232C78.6524 18.3939 76.6803 18.6276 75.2494 20.4193C72.9494 23.2852 73.3224 28.812 76.053 31.5016C76.5163 31.1572 76.9919 30.8046 77.5044 30.4192C76.1514 28.9309 75.8808 27.2253 76.2826 25.5033C76.4548 24.7735 77.2748 24.2077 77.7996 23.564C78.3941 24.0683 79.1895 24.4701 79.5257 25.1097C79.9726 25.9625 80.0628 26.9957 80.3785 28.2503Z"/>
                            <path fillRule="evenodd" clipRule="evenodd"
                                  d="M78.8614 44.8511C79.2017 45.1381 79.5461 45.4128 79.8741 45.7162C83.1048 48.7092 85.6345 49.0618 89.5295 47.0036C90.6529 46.4091 91.7312 45.7203 92.8546 45.1135C93.2687 44.8962 93.7484 44.7937 94.2609 44.8265C91.0588 46.5075 88.3077 49.3365 84.2446 48.7748C81.8174 48.4386 80.1529 46.8847 78.5662 45.2447C78.6646 45.1176 78.763 44.9864 78.8614 44.8511Z"/>
                            <path
                                d="M235.605 6.01415C210.719 5.44675 188.635 21.9932 182.119 46.1386C182.414 46.0251 181.802 46.2084 182.119 46.1386C159.674 60.9828 159.405 93.3294 180.694 109.815L180.716 109.771L180.672 109.954C187.483 115.113 195.763 117.868 204.294 117.841H234.249L234.432 117.999H264.5C303.234 118.317 318.798 67.9401 286.719 46.1386C283.96 35.886 278.279 26.6809 270.386 19.6537L270.138 19.9025L270.16 19.6057C260.591 11.1252 248.35 6.30659 235.613 6.00979L235.605 6.01415ZM233.524 30.1551C240.717 29.9064 248.115 32.2938 253.706 36.8375C260.695 42.7036 264.678 51.4329 264.496 60.5725V63.5972C284.947 63.187 284.947 94.2198 264.496 93.8095H234.427L234.384 93.8532V93.6262H204.294C202.166 93.6262 200.063 93.1723 198.117 92.2862C188.548 87.9434 186.263 75.3033 193.682 67.8266C201.127 60.3718 213.681 62.6676 218.025 72.2829L235.47 54.7544C229.68 47.1599 221.309 41.9572 211.965 40.1153C212.078 40.0717 212.191 39.98 212.283 40.0018C217.756 33.9568 225.427 30.4083 233.55 30.1595L233.524 30.1551Z"/>
                            <path
                                d="M218.113 187.756C212.899 182.598 211.472 167.232 218.113 160.427L220.089 158.122L222.066 160.098C228.433 165.146 232.056 170.854 232.934 177.22C241.791 174.527 248.298 176.289 255 180.512C250.654 189.59 243.958 195.282 228.982 194.671C215.423 228.436 186.277 248.671 143.023 249C120.188 249 103.831 240.768 93.9503 223.646C88.4597 213.56 87.2976 206.293 88.3515 192.366H102.843V174.915H119.969V157.793H154.22V141H174.64V174.915H191.766V192.366C203.504 192.706 210.797 191.981 218.113 187.756ZM118.322 178.866H119.31V191.378H118.322V178.866ZM116.016 178.866H117.334V191.378H116.016V178.866ZM113.711 178.866H115.028V191.378H113.711V178.866ZM111.406 178.866H112.723V191.378H111.406V178.866ZM109.43 178.866H110.418V191.378H109.43V178.866ZM107.124 178.866H108.112V191.378H107.124V178.866ZM105.807 177.878V192.695H120.627V177.878H105.807ZM135.448 162.073H136.436V174.256H135.448V162.073ZM133.142 162.073H134.13V174.256H133.142V162.073ZM130.837 162.073H132.154V174.256H130.837V162.073ZM128.532 162.073H129.849V174.256H128.532V162.073ZM126.226 162.073H127.544V174.256H126.226V162.073ZM124.25 162.073H125.238V174.256H124.25V162.073ZM122.933 160.756V175.573H137.753V160.756H122.933ZM135.448 178.866H136.436V191.378H135.448V178.866ZM133.142 178.866H134.13V191.378H133.142V178.866ZM130.837 178.866H132.154V191.378H130.837V178.866ZM128.532 178.866H129.849V191.378H128.532V178.866ZM126.226 178.866H127.544V191.378H126.226V178.866ZM124.25 178.866H125.238V191.378H124.25V178.866ZM122.933 177.878V192.695H137.753V177.878H122.933ZM152.244 178.866H153.562V191.378H152.244V178.866ZM150.268 178.866H151.256V191.378H150.268V178.866ZM147.963 178.866H148.951V191.378H147.963V178.866ZM145.657 178.866H146.975V191.378H145.657V178.866ZM143.352 178.866H144.669V191.378H143.352V178.866ZM141.047 178.866H142.364V191.378H141.047V178.866ZM140.059 177.878V192.695H154.879V177.878H140.059ZM152.244 162.073H153.562V174.256H152.244V162.073ZM150.268 162.073H151.256V174.256H150.268V162.073ZM147.963 162.073H148.951V174.256H147.963V162.073ZM145.657 162.073H146.975V174.256H145.657V162.073ZM143.352 162.073H144.669V174.256H143.352V162.073ZM141.047 162.073H142.364V174.256H141.047V162.073ZM140.059 160.756V175.573H154.879V160.756H140.059ZM169.37 178.866H170.688V191.378H169.37V178.866ZM167.065 178.866H168.382V191.378H167.065V178.866ZM165.089 178.866H166.077V191.378H165.089V178.866ZM162.783 178.866H163.771V191.378H162.783V178.866ZM160.478 178.866H161.795V191.378H160.478V178.866ZM158.173 178.866H159.49V191.378H158.173V178.866ZM157.185 177.878V192.695H171.676V177.878H157.185ZM169.37 162.073H170.688V174.256H169.37V162.073ZM167.065 162.073H168.382V174.256H167.065V162.073ZM165.089 162.073H166.077V174.256H165.089V162.073ZM162.783 162.073H163.771V174.256H162.783V162.073ZM160.478 162.073H161.795V174.256H160.478V162.073ZM158.173 162.073H159.49V174.256H158.173V162.073ZM157.185 160.756V175.573H171.676V160.756H157.185ZM169.37 144.951H170.688V157.134H169.37V144.951ZM167.065 144.951H168.382V157.134H167.065V144.951ZM165.089 144.951H166.077V157.134H165.089V144.951ZM162.783 144.951H163.771V157.134H162.783V144.951ZM160.478 144.951H161.795V157.134H160.478V144.951ZM158.173 144.951H159.49V157.134H158.173V144.951ZM157.185 143.634V158.451H171.676V143.634H157.185ZM186.496 178.866H187.484V191.378H186.496V178.866ZM184.191 178.866H185.508V191.378H184.191V178.866ZM181.885 178.866H183.203V191.378H181.885V178.866ZM179.909 178.866H180.897V191.378H179.909V178.866ZM177.604 178.866H178.592V191.378H177.604V178.866ZM175.299 178.866H176.616V191.378H175.299V178.866ZM173.981 177.878V192.695H188.802V177.878H173.981ZM136.765 216.402C135.667 216.402 134.734 216.841 133.966 217.72C133.197 218.598 132.813 219.585 132.813 220.683C132.813 221.78 133.197 222.713 133.966 223.482C134.734 224.25 135.667 224.634 136.765 224.634C137.863 224.634 138.796 224.25 139.565 223.482C140.333 222.713 140.717 221.78 140.717 220.683C140.717 219.805 140.553 219.091 140.223 218.543C139.894 217.994 139.4 217.5 138.741 217.061C138.083 216.622 137.424 216.402 136.765 216.402ZM136.765 217.72C137.204 217.72 137.534 217.829 137.753 218.049C137.314 218.268 137.095 218.598 137.095 219.037C137.095 219.695 137.534 220.024 138.412 220.024C138.851 220.024 139.18 219.805 139.4 219.366C139.619 219.805 139.729 220.244 139.729 220.683C139.729 222.659 138.741 223.646 136.765 223.646C134.789 223.646 133.801 222.659 133.801 220.683C133.801 218.707 134.789 217.72 136.765 217.72ZM147.634 246.037C138.631 241.646 132.374 235.5 128.861 227.598C125.128 228.695 120.627 229.354 115.358 229.573H101.196C112.174 240.329 126.116 245.817 143.023 246.037H147.634Z"/>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Infrastructure
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <path
                                d="M10.11,17H7.5L2.59,12L7.5,7H10.11L11.42,4.74L18.21,3L20.08,9.74L18.77,12L20.08,14.26L18.21,21L11.42,19.26L10.11,17M10.25,16.75L15.38,18.13L12.42,13H6.5L10.25,16.75M17.12,17.13L18.5,12L17.12,6.87L14.15,12L17.12,17.13M10.25,7.25L6.5,11H12.42L15.38,5.87L10.25,7.25Z"/>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Game Development
                        </p>
                    </div>
                    <div
                        className="flex justify-center items-center flex-col w-full max-w-[496px] h-[300px] font-bold text-white text-2xl bg-gray-200 dark:bg-gray-900">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                             className="text-gray-900 dark:text-gray-100 h-32 w-32">
                            <path
                                d="M14.782 3.153c-.231.02-.472.04-.703.07a8.453 8.453 0 0 0-2.832.834 8.951 8.951 0 0 0-2.46 1.777c-.03.04-.09.06-.141.05a7.44 7.44 0 0 0-1.496-.07 7.424 7.424 0 0 0-2.932.763c-1.768.884-3.013 2.26-3.736 4.108a7.089 7.089 0 0 0-.462 2.139c0 .05-.01.09-.02.13v.773c.02.201.05.392.07.593.1.813.332 1.596.703 2.33.824 1.646 2.089 2.851 3.786 3.594a7.127 7.127 0 0 0 2.45.593c.032 0 .06.004.086.01h8.576c.183-.017.362-.035.547-.06a8.344 8.344 0 0 0 2.811-.834 8.836 8.836 0 0 0 3.646-3.304 8.187 8.187 0 0 0 1.184-3.093c.05-.34.08-.692.121-1.034 0-.05.01-.09.02-.13v-.794c-.02-.23-.05-.452-.05-.662a8.345 8.345 0 0 0-.834-2.812 8.952 8.952 0 0 0-3.324-3.645 8.245 8.245 0 0 0-3.072-1.175c-.362-.06-.713-.09-1.075-.13-.05 0-.09-.01-.14-.02zm.369 1.693c2.126.005 3.93.826 5.395 2.455a6.93 6.93 0 0 1 1.616 3.323c.15.764.181 1.547.07 2.32-.19 1.346-.702 2.55-1.576 3.605a7.082 7.082 0 0 1-3.997 2.45 7.297 7.297 0 0 1-2.56.1c-1.095-.14-2.099-.501-3.003-1.154a5.2 5.2 0 0 1-.672-.573c-1.226-1.205-2.44-2.42-3.666-3.625-.301-.3-.321-.632-.18-.934a.822.822 0 0 1 .863-.472c.21.02.372.141.522.292 1.105 1.114 2.2 2.209 3.304 3.324a5.263 5.263 0 0 0 3.093 1.536c1.948.261 3.605-.341 4.92-1.798.713-.793 1.145-1.747 1.326-2.811.26-1.587-.11-3.013-1.095-4.268-.873-1.115-2.018-1.808-3.404-2.059-1.416-.25-2.751.02-3.966.794-.03.02-.1.03-.131.01a9.04 9.04 0 0 0-1.406-.854s-.01-.01-.02-.03a6.603 6.603 0 0 1 1.255-.823 6.646 6.646 0 0 1 2.641-.784 8.45 8.45 0 0 1 .67-.024zM7.546 7.509c1.455-.024 2.791.525 3.982 1.63.854.802 1.637 1.636 2.46 2.47.231.23.281.522.171.833-.11.311-.362.462-.683.512a.722.722 0 0 1-.632-.23c-.784-.784-1.567-1.557-2.34-2.35-.633-.653-1.386-1.025-2.27-1.186-1.958-.351-3.936.784-4.639 2.641-.904 2.36.522 5.031 2.982 5.594.482.11.995.11 1.497.1.14-.01.22.04.32.13.483.473.995.945 1.497 1.416.03.03.07.06.1.09-.06 0-.1.01-.14.01h-2.3a5.833 5.833 0 0 1-5.693-4.568c-.653-2.942 1.034-5.925 3.926-6.798a6.33 6.33 0 0 1 1.762-.294Z"/>
                        </svg>
                        <p className="pt-8 text-center text-lg font-semibold text-gray-900 dark:text-white">
                            Ps, Ai, Pr, Ae, Xd
                        </p>
                    </div>
                </div>
            </div>
            <div id="award" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Award</h2>
                <ul className="list-none">
                    <li className="m-0.5 text-center sm:text-left">
                        情報科学部賞: 法政大学 情報科学部 (2024)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>
                            <a href="https://www.ipsj.or.jp/event/taikai/86/WEB/data/pdf/5Y-08.html" target="_blank"
                               rel="noreferrer">
                                学生奨励賞: 情報処理学会 第 86 回全国大会 (2024)
                            </a>
                        </b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        ハイスキルテクノロジーアワード: 株式会社ライフイズテックメンターアワード (2022)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>優秀賞: SPAJAM 2021 第四回 予選 (2021)</b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        優秀賞: SFC未来構想キャンプ 映像づくりワークショップ (2019)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>優勝: 第 52 回神奈川県高等学校放送アンデパンダン大会 ショートビデオ部門 (2019)</b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        奨励賞: 川崎市立中学校放送コンテスト 朗読部門 (2016)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        奨励賞: 川崎市立中学校放送コンテスト 朗読部門 (2015)
                    </li>
                </ul>
            </div>
            <div id="publication" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Publication</h2>
                <ul className="list-none">
                    <li className="m-0.5 text-center sm:text-left">
                        磯貝和希 (法政大学)，藤田悟 (法政大学). <br/>複数画面インタラクティブデジタルサイネージシステムの構築.<br/>情報処理学会
                        第86回全国大会 講演論文集，5Y-08，2024.
                    </li>
                </ul>
            </div>
            <div id="qualification" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Qualification</h2>
                <ul className="list-none">
                    <li className="m-0.5 text-center sm:text-left">
                        応用情報技術者試験 合格 (December 2022)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        基本情報技術者試験 合格 (January 2022)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        普通自動車第一種運転免許 (March 2021)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        ITパスポート試験 合格 (February 2020)
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        実用英語技能検定 2級 合格 (July 2019)
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Page