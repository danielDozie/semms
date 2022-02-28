import React from 'react'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout/Layout'
import './../src/styles/globals.css'
import { ThemeProvider } from '../src/components/theme/darkMode'
import {ApolloProvider} from '@apollo/client'
import {client} from '../src/utils/apolloClient'
import Head from 'next/head'


function Semms({ Component, pageProps }: AppProps) {
  return (<>
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
