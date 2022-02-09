import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import HomeIndex from '../src/components/homepage/HomeIndex'

const Home: NextPage = () => {
  return (<>
    <Head>
        <title>{process.env.storename}</title>
    </Head>
  <HomeIndex />
  </>)
}

export default Home
