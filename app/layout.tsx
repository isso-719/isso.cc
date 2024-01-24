import '../styles/globals.css'
import Providers  from './providers'

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
    return (
        <html suppressHydrationWarning lang="ja">
        <body className="min-h-screen">
            <Providers>{children}</Providers>
        </body>
        </html>
    )
}

export default RootLayout