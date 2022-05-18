import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout/Layout'
import './../src/styles/globals.css'
import { ThemeProvider } from '../src/components/theme/darkMode'
import {ApolloProvider} from '@apollo/client'
import {client} from '../src/utils/apolloClient'
import Head from 'next/head'
import Script from 'next/script'


function Semms({ Component, pageProps }: AppProps) {
  return (<>
  <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

  <Script strategy="lazyOnload">
      {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
          page_path: window.location.pathname,
          });
      `}
  </Script>
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
