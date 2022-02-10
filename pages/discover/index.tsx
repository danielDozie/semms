import Head from 'next/head';
import React from 'react';
import Breadcrumbs from '../../src/components/common/Breadcrumbs';
import DiscoverBanner from '../../src/components/discover/DiscoverBanner';
import DiscoverProducts from '../../src/components/discover/DiscoverProducts';

export default function index() {
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
        <h1>Discover.</h1>
        <div>
          <p className="text-gray-500 dark:text-gray-400 font-bold underline decoration-wavy underline-offset-4 mt-2 text-sm">SEMMS Luxury Catalog</p>
        </div>
      </div>
      <div className="mx-auto w-full">
      {/* discover products */}
      <DiscoverProducts />
      {/* discover banner */}
      <DiscoverBanner/>
      </div>
    </div>

  </>
};


const title = 'Discover, Our Products'
const crumbmenus: any[] = [
]