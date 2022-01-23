import React from 'react'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { ThemeProvider } from '../components/theme/darkMode'
import {ApolloProvider} from '@apollo/client'
import {client} from '../utils/apolloClient'

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
