import '../styles/globals.css'
import Providers  from './providers'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html suppressHydrationWarning lang="ja">
        <head>
            <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5900858210913337"
                    crossOrigin="anonymous"></script>
        </head>
        <body className="min-h-screen">
            <Providers>{children}</Providers>
        </body>
        </html>
    )
}

export default RootLayout