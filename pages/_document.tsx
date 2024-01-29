import Script from 'next/script'

import { FC, ReactNode } from 'react'
import { Html, Head, Main, NextScript } from 'next/document'

const document: FC = (): ReactNode => {
    return (
        <Html>
            <Head />

            <body className="dark:text-white">
                <Main />
                <NextScript />
            </body>

            <Script src="/js/webflow.js" />
        </Html>
    )
}

export default document
