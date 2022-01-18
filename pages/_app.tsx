import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from '../components/layout/Layout'
import { ThemeProvider } from '../components/theme/darkMode'

function Semms({ Component, pageProps }: AppProps) {
  return (<>
  <ThemeProvider>
  <Layout>
    <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  </>)
}

export default Semms
