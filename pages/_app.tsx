import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout/Layout'
import './../src/styles/globals.css'
import { ThemeProvider } from '../src/components/theme/darkMode'
import { ApolloProvider } from '@apollo/client'
import { client } from '../src/utils/apolloClient'
import Head from 'next/head'

//analytics use
import { useEffect } from 'react'
import Script from 'next/script'
import { useRouter } from 'next/router'
import * as gtag from '../lib/gtag'


function Semms({ Component, pageProps }: AppProps) {

  const router = useRouter()
  useEffect(() => {
    const handleRouteChange = (url: any) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    router.events.on('hashChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
      router.events.off('hashChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (<>
    {/* Global Site Tag (gtag.js) - Google Analytics */}
    <Script
      strategy="afterInteractive"
      src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}
    />
    <Script
      id="gtag-init"
      strategy="afterInteractive"
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
      }}
    />
    <style global jsx>{`
        body {
          background: black;
        }
      `}
    </style>

    <Head>
      <title>{process.env.storename}</title>
      <link rel="shortcut icon" href="/semmsFavicon.png" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content="Semms Luxury is the e-commerce platform for new generation luggage and suitcase for mindful travellers." />
      <meta name="keywords" content="" />
    </Head>
    <ThemeProvider>
      <ApolloProvider client={client}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ApolloProvider>
    </ThemeProvider>
  </>

  )
}

export default Semms
