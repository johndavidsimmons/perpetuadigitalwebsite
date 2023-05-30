import '@/css/tailwind.css'
import '@/css/prism.css'
import 'katex/dist/katex.css'

import '@fontsource/inter/variable-full.css'

import { ThemeProvider } from 'next-themes'
import type { AppProps } from 'next/app'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
// import GAScript from '@/components/analytics/GoogleAnalytics'
import LayoutWrapper from '@/components/LayoutWrapper'
import GTMContainer from '@/components/analytics/GTM'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <script src="/static/scripts/prehide.js" async></script>
        <script
          src="https://assets.adobedtm.com/9d5ea4d031a2/94b8b3ffca90/launch-20d79a252cfc.min.js"
          async
        ></script>
      </Head>
      <GTMContainer />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  )
}
