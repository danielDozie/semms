import Head from 'next/head';
import React from 'react';
import Breadcrumbs from '../../src/components/common/Breadcrumbs';

export default function index () {
  const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1644442447/semms%20luxury/discover2_kuyrko.jpg'

  return <>
  <Head>
    <title>Discover - {process.env.storename}</title>
    <meta name="description" content="Discover Products" />
    <meta name="keywords" content="Discover Products" />
  </Head>
  <div className="max-w-7xl mx-auto justify-center items-center h-full pt-24">
      <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
  </div>

  <div className="flex flex-col w-[80%] mx-auto py-6">
            <div className="justify-between text-3xl flex md:text-4xl font-bold py-12 text-gray-800 dark:text-myGray">
                <h1>Products</h1>
                <div>
                    <p className="text-muted font-normal text-sm">Filter</p>
                </div>

            </div>
    </div>
  
  </>
};


const title = 'Discover, Our Products'
const crumbmenus: any[] = [
]