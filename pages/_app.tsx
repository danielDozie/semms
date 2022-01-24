import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../src/components/layout/Layout'
import { ThemeProvider } from '../src/components/theme/darkMode'
import {ApolloProvider} from '@apollo/client'
import {client} from '../src/utils/apolloClient'

function Semms({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <ApolloProvider client={client}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
      </ApolloProvider>
    </ThemeProvider>
  )
}

export default Semms
