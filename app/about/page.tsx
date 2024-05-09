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
            <div className="py-32 sm:py-72">
                <h1 className="text-center text-4xl font-extrabold leading-10 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
                    Kazuki Isogai
                </h1>
                <p className="mt-6 text-lg text-center text-gray-500 dark:text-gray-400">
                    a.k.a. isso
                </p>
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
                        <p className="text-lg">
                            磯貝和希, あだ名はいっそです。
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
                        <p className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2020 - B.S. expected March 2024</p>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">法政大学</h3>
                        <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                            情報科学部コンピュータ科学科 ISコース<br />
                            サービスシステム研究室 (藤田研)<br />
                            Research theme: 複数画面インタラクティブデジタルサイネージシステム
                        </p>
                    </li>
                </ol>
            </div>
            <div id="jobs" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Job Experience</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
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
                        <h3 className="text-center sm:text-left text-lg font-semibold text-gray-900 dark:text-white">株式会社Stack</h3>
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
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Work</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                            Coming Soon
                        </div>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                            Coming Soon
                        </div>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                            Coming Soon
                        </div>
                    </div>
                    <div className="w-full px-0 pb-4">
                        <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                            Coming Soon
                        </div>
                    </div>
                </div>
            </div>
            <div id="skill" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Skill</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                        Coming Soon
                    </div>
                    <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                        Coming Soon
                    </div>
                    <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                        Coming Soon
                    </div>
                    <div className="flex justify-center items-center w-full max-w-[496px] h-[300px] bg-black font-bold text-white text-2xl">
                        Coming Soon
                    </div>
                </div>
            </div>
            <div id="award" className="pb-36">
                <h2 className="pb-8 text-4xl font-bold text-center sm:text-left">Award</h2>
                <ul className="list-none">
                    <li className="m-0.5 text-center sm:text-left">
                        <b>情報科学部賞: 法政大学 情報科学部 (2024)</b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>
                            <a href="https://www.ipsj.or.jp/event/taikai/86/WEB/data/pdf/5Y-08.html" target="_blank" rel="noreferrer">
                                情報処理学会 第 86 回全国大会 学生奨励賞 (2024)
                            </a>
                        </b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>ハイスキルテクノロジーアワード: 株式会社ライフイズテックメンターアワード (2022)</b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>優秀賞: SPAJAM 2021 第四回 予選 (2021)</b>
                    </li>
                    <li className="m-0.5 text-center sm:text-left">
                        <b>優秀賞: SFC未来構想キャンプ 映像づくりワークショップ  (2019)</b>
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
                        磯貝和希 (法政大学)，藤田悟 (法政大学). <br/>複数画面インタラクティブデジタルサイネージシステムの構築.<br/>情報処理学会 第86回全国大会論文誌，5Y-08，2024.
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