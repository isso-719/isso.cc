import '../styles/globals.css'
import Providers from './providers'
import Script from "next/script";

const RootLayout = async ({children}: { children: React.ReactNode }) => {
    return (
        <html suppressHydrationWarning lang="ja">
        <head>
            {/* Google Adsense */}
            <Script async
                    src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5900858210913337"
                    crossOrigin="anonymous"></Script>
            {/* Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={"https://www.googletagmanager.com/gtag/js?id=G-TD6R30D7K7"}
            />
            <Script
                id="gtag-init"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
                        window.dataLayer = window.dataLayer || [];
                        function gtag(){dataLayer.push(arguments);}
                        gtag('js', new Date());
             
                        gtag('config', 'G-TD6R30D7K7');
                    `,
                }}
            />
        </head>
        <body className="min-h-screen">
        <Providers>{children}</Providers>
        </body>
        </html>
    )
}

export default RootLayout