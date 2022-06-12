import Head from 'next/head'
import React from 'react'
import Orders from '../../src/components/account/Orders'
import Settings from '../../src/components/account/Addresses'
import { useLoginOutStore } from '../../src/store/store'
import Link from 'next/link'

export const index = () => {
  const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
  return (
    <>
      <Head>
        <title>Account - {process.env.storename}</title>
      </Head>
      {isLoggedIn ? (<>
        <div className="flex flex-auto w-full pt-24 mx-auto">
          <div className="flex w-[80%] flex-col mx-auto my-16 gap-y-8">
            <div className="flex w-[80%">
              <h1 className="text-3xl font-semibold text-gray-800 dark:text-myGray">Account<span className="text-gold">.</span> </h1>
            </div>
            <Orders />
            <Settings />
          </div>
        </div>
      </>) : <><div className="flex flex-auto w-full pt-24 mx-auto">
        <div className="flex w-[80%] flex-col mx-auto my-16 gap-y-8">
          <div className="flex w-[80%">
            <h1 className="text-3xl font-semibold text-gray-800 dark:text-myGray">Account<span className="text-gold">.</span> </h1>
          </div>
          <div className="font-normal text-gray-800 text-md dark:text-myGray">
            <h1>You must <Link href={`/account/login`}><span className="text-gold cursor-pointer">login</span></Link> or <Link href={`/account/register`}><span className="text-gold cursor-pointer">register</span></Link> an account to access your account page.</h1>
          </div>
        </div>
      </div></>}
    </>
  )
}

export default index