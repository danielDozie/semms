import { motion } from 'framer-motion';
import Head from 'next/head';
import Image from 'next/image';
import router from 'next/router';
import React, { useEffect } from 'react';
import Breadcrumbs from '../../src/components/common/Breadcrumbs';
import { StarRating } from '../../src/components/homepage/FeaturedProducts';
import { productImageVariant } from '../../src/components/homepage/homepageAnimation';
import { useProductStore } from '../../src/store/productStore';

export default function index() {
  const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1644442447/semms%20luxury/discover2_kuyrko.jpg'
  const productsData = useProductStore(state => state.products);
    const products = productsData
    const setProducts = useProductStore(state => state.setProducts);
    
    useEffect(() => {
        setProducts();
    }, [products]);

    const productPage = (e:any) => {
      e.preventDefault();
      const slug =  `/products/${e.currentTarget.id}`;
      router.push(slug);
  }

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
        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-6">
          {products?.map((product:any) => 
                   <div className="bg-myGray dark:bg-gray-900 h-full w-full cursor-pointer" key={product.node.id} id={product?.node.handle} onClick={productPage}>
                   <motion.div initial="initial" animate="animate" whileHover="hover" whileTap="hover" variants={productImageVariant} className="drop-shadow-md">
                   <div className="w-full mx-auto mt-4 justify-center items-center text-center">
                   <Image className="" src={product?.node.media.edges[0].node.previewImage.src} alt={product?.node.media.edges[0].node.previewImage.altText} height="250" width="250" />
                   </div>
                   </motion.div>
                   {/* bottom half */}
                   <div className="items-center justify-center  pb-2 mx-auto text-center px-4">
                     <h1 className="font-medium text-[10px] text-gold my-2 uppercase">{product.node.vendor}</h1>
                     <StarRating rating={product?.rating} />
                     <p className="py-2 text-[10px] md:text-sm font-normal text-gray-500 dark:text-gray-300 md:px-4">{product?.node.title}</p>
                     <p className="pb-3 text-xl font-bold text-gray-900 dark:text-gray-300 hidden md:inline-block"><span className="text-[10px] italic text-gray-500 font-light">From </span>${product?.node.priceRange.minVariantPrice.amount} {product?.node.priceRange.maxVariantPrice.currencyCode}</p>
                     <div className="pb-4 md:pb-8">
                       <button className="bg-gray-900 dark:bg-myGray shadow-md text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-[10px] md:text-sm rounded-full">
                         View Details
                       </button>
                     </div>
                   </div>
                 </div>
          )}
        
        </div>
      </div>
    </div>

  </>
};


const title = 'Discover, Our Products'
const crumbmenus: any[] = [
]