import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import React from 'react';
import Breadcrumbs from '../../src/components/common/Breadcrumbs';
import Products from '../../src/components/products/productsPage/Products';
import ProductsPageBanner from '../../src/components/products/productsPage/ProductsPageBanner';
import { PRODUCTS } from '../../src/graphql/productsQuery';
import { client } from '../../src/utils/apolloClient';

export default function index({products}:any) {
  const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1644442447/semms%20luxury/discover2_kuyrko.jpg'

  return <>
    <Head>
      <title>Discover - {process.env.storename}</title>
      <meta name="description" content="Discover Products" />
      <meta name="keywords" content="Discover Products" />
    </Head>
    <div className="items-center justify-center h-full pt-24 mx-auto max-w-7xl">
      <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
    </div>
    
    <div className="flex flex-col w-[80%] mx-auto py-6">
      <div className="flex justify-between py-12 text-3xl font-bold text-gray-800 md:text-4xl dark:text-myGray">
        <h1>Products</h1>
        <div>
          <p className="mt-2 text-sm font-bold text-gray-500 underline dark:text-gray-400 decoration-wavy underline-offset-4">SEMMS Luxury Catalog</p>
        </div>
      </div>
      <div className="w-full mx-auto">
      {/* discover products */}
      <Products data={products} />
      {/* discover banner */}
      <ProductsPageBanner/>
      </div>
    </div>
  
  </>
};


const title = 'Discover, Our Products'
const crumbmenus: any[] = [
]

export const getStaticProps: GetStaticProps = async () => {
  const {data} = await client.query({
    query: PRODUCTS
  })
  const result = data.PRODUCTS.edges
  return {
    props: {
      products: result
      },
      revalidate: 60
}
}