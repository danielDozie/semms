import Head from 'next/head'
import React from 'react'
import Orders from '../../src/components/account/Orders'
import Settings from '../../src/components/account/Settings'

export const index = () => {
  return (
    <>
    <Head>
        <title>Account - {process.env.storename}</title>
    </Head>
    <div className="w-full flex flex-auto mx-auto pt-24">
        <div className="flex w-[80%] flex-col mx-auto my-16 gap-y-8">
        <div className="flex w-[80%">
          <h1 className="text-3xl font-semibold text-gray-800 dark:text-myGray">Account<span className="text-gold">.</span> </h1>
          </div>
          <Orders />
          <Settings />

          </div>
        </div>
    </>
  )
}

export default index