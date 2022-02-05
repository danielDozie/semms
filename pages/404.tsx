import Head from 'next/head'
import React from 'react'

export default function Index() {
    return (<>
        <Head>
            <title>Page Not Found | {process.env.SiteTitle}</title>
        </Head>
        <div className="flex justify-center items-center h-full pt-24">
            <div className="w-full max-w-md py-24">   
                <div className="bg-white dark:bg-black p-8">
                    <h1 className="text-center text-2xl font-bold text-gold">Oops!</h1>
                    <p className="text-center text-gray-800 dark:text-gray-300">Page not found</p>
                    <p className="text-center text-gray-800 dark:text-gray-300 my-4">We're are working on this page, please re-visit.</p>
                </div>
            </div>
        </div>
        </>)
}
