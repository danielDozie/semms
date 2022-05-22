import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { StarRating } from '../../homepage/FeaturedProducts'
import { productImageVariant } from '../../homepage/homepageAnimation'
import { useRouter } from 'next/router'

export default function Products({ data }: any) {
  const router = useRouter()

  var start = 0, end = 6;
  const products = data.slice(start, end)
  const [productsToShow, setProductsToShow] = useState<any[]>();

  useEffect(() => {
    setProductsToShow(products);
  }, []);

  const productPage = (e: { preventDefault: () => void; currentTarget: { id: any } }) => {
    e.preventDefault();
    const slug = `/products/${e.currentTarget.id}`;
    router.push(slug);
  }

  const buttonRef = useRef<any>(null);

  const loadMore = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    end = end + 6;
    setProductsToShow(data.slice(start, end));
    if (data.length <= end) {
      buttonRef.current.style.display = 'none';
    }
  }


  return (
    <>
      <div className="grid grid-cols-2 gap-2 md:grid-cols-3 md:gap-6">
        {productsToShow?.map((product: any) =>
          <div className="w-full h-full cursor-pointer bg-myGray dark:bg-gray-900" key={product.node.id} id={product?.node.handle} onClick={productPage}>
            <div className="absolute ml-4 mt-2 hidden md:inline-block">
                    <Image src="/image/setOf3.svg" width="60" height="60" />
                </div>
            <div className="absolute ml-4 mt-2 inline-block md:hidden">
                    <Image src="/image/setOf3.svg" width="40" height="40" />
                </div>
            <motion.div initial="initial" animate="animate" whileHover="hover" whileTap="hover" variants={productImageVariant} className="drop-shadow-md">
              <div className="items-center justify-center w-full mx-auto mt-4 text-center">
                <Image className="" src={product?.node.media.edges[0].node.previewImage.src} alt={product?.node.media.edges[0].node.previewImage.altText} height="250" width="250" />
              </div>
            </motion.div>
            {/* bottom half */}
            <div className="items-center justify-center px-4 pb-2 mx-auto text-center">
              <h1 className="font-medium text-[10px] text-gold my-2 uppercase">{product.node.vendor}</h1>
              {
                product?.node?.ratings?.value ?
                  <StarRating rating={Math.floor(JSON.parse(product?.node?.ratings?.value).value)} /> :
                  <StarRating rating={product?.node?.ratings?.value} />
              }
              <p className="py-2 text-[10px] md:text-sm font-normal text-gray-500 dark:text-gray-300 md:px-4">{product?.node.title}</p>
              <p className="hidden pb-3 text-xl font-bold text-gray-900 dark:text-gray-300 md:inline-block"><span className="text-[10px] italic text-gray-500 font-light">From </span>${product?.node.priceRange.minVariantPrice.amount} {product?.node.priceRange.maxVariantPrice.currencyCode}</p>
              <div className="pb-4 md:pb-8">
                <button className="bg-gray-900 dark:bg-myGray shadow-md text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-[10px] md:text-sm rounded-full || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                  View Details
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="mx-auto my-12 text-center">
        <button className="py-2 px-4 rounded-md text-myGray dark:text-gray-900 text-xs font-normal || transition ease-in-out delay-50 bg-gold hover:-translate-y-1 hover:scale-105 hover:bg-gold duration-300" ref={buttonRef} onClick={loadMore}>Load more</button>
      </div>
    </>
  )
}
