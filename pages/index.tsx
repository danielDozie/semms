import type { NextPage } from 'next'
import Head from 'next/head';
import React from 'react';
import HomeIndex from '../src/components/homepage/HomeIndex'

const Home: NextPage = () => {
  return (<>
    <Head>
        <title>{process.env.storename}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content="SEMMS Luxury Luggages" />
    </Head>
  <HomeIndex />
  </>)
}
export default Home
