import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    render() {
        return (
            <Html lang="es">
                <Head />
                <body>
                    <Main />
                    <NextScript />
                    <noscript dangerouslySetInnerHTML={{
                        __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M2PXQ69"
height="0" width="0" style="display:none;visibility:hidden"></iframe>`}}></noscript>
                </body>
            </Html>
        )
    }
}

export default MyDocument