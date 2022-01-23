import Head from 'next/head'
import React from 'react'

export default function Index() {
    return (<>
        <Head>
            <title>Page Not Found | {process.env.SiteTitle}</title>
        </Head>
        <div className="flex justify-center items-center h-screen">
            <div className="w-full max-w-md">   
                <div className="bg-white dark:bg-black rounded-lg shadow-lg p-8">
                    <h1 className="text-center text-2xl font-bold text-gold">Oops!</h1>
                    <p className="text-center text-gray-800 dark:text-gray-300">Page not found</p>
                    <p className="text-center text-gray-800 dark:text-gray-300 my-4">I am working on it. Check back soon.</p>
                </div>
            </div>
        </div>
        </>)
}
