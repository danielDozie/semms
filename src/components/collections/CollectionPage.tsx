import { motion } from "framer-motion";
import Breadcrumbs from "../common/Breadcrumbs";
import { StarRating } from "../homepage/FeaturedProducts";
import { productImageVariant } from "../homepage/homepageAnimation";
import Image from "next/image";
import _ from "lodash";
import React from "react";

export function CollectionPage({
  collection,
  productsToShow,
  loadMore,
  productPage,
  buttonRef,
  setProductsToShow,
}: any) {
  const sortByNewest = () => {
    const sortedProducts = _.orderBy(productsToShow, [function (product) {return product.node.createdAt}], ['desc']);
    setProductsToShow(sortedProducts);
  }
  const sortByOldest = () => {
    const sortedProducts = _.orderBy(productsToShow, [function (product) {return product.node.createdAt}], ['asc']);
    setProductsToShow(sortedProducts);
  }


  const [val, setVal] = React.useState('')
  const valueSelected = (e: { preventDefault: () => void; currentTarget: { value: any; }; }) => {
    e.preventDefault()
    const value = e.currentTarget.value
    setVal(value)
  }

  React.useEffect(()=> {
    if (val === 'Newest') {
      sortByNewest()
    } else if (val === 'Oldest') {
      sortByOldest()
    } else{
      setProductsToShow(productsToShow)
    }
  }, [val])
 
  return (
    <>
      <div className="items-center justify-center h-full pt-24 mx-auto max-w-7xl">
        <Breadcrumbs
          title={collection.node.title}
          crumbmenus={crumbmenus}
          bg_url={collection.node.image.src}
        />
        <div className="flex flex-col w-[80%] mx-auto py-6">
          <div className="flex flex-col justify-between py-12 text-3xl font-bold text-gray-800 md:flex-row md:text-4xl dark:text-myGray">
            <h1>{collection.node.title}</h1>
            <div className="pt-4 md:pt-0">
              <p className="mt-2 text-sm font-normal text-gray-500 dark:text-gray-400">
                Sort by:
                <span className="ml-2">
                  <select className="relative mt-2 text-sm font-normal text-gray-500 bg-transparent border dark:text-gray-400" value={val} onChange={valueSelected}>
                    <option value="Newest">Newest</option>
                    <option value="Oldest">Oldest</option>
                    <option value="Bestselling">Bestselling</option>
                    <option value="Most Reviews">Most Reviews</option>
                  </select>
                </span>
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3 md:gap-6">
            {productsToShow?.map((product: any) => (
              <div
                className="w-full h-full cursor-pointer bg-myGray dark:bg-gray-900"
                key={product.node.id}
                id={product?.node.handle}
                onClick={productPage}
              >
                <motion.div
                  initial="initial"
                  animate="animate"
                  whileHover="hover"
                  whileTap="hover"
                  variants={productImageVariant}
                  className="drop-shadow-md"
                >
                  <div className="items-center justify-center w-full mx-auto mt-4 text-center">
                    <Image
                      className=""
                      src={product?.node.media.edges[0].node.previewImage.src}
                      alt={
                        product?.node.media.edges[0].node.previewImage.altText
                      }
                      height="250"
                      width="250"
                    />
                  </div>
                </motion.div>
                {/* bottom half */}
                <div className="items-center justify-center px-4 pb-2 mx-auto text-center">
                  <h1 className="font-medium text-[10px] text-gold my-2 uppercase">
                    {product.node.vendor}
                  </h1>
                  <StarRating rating={product?.rating} />
                  <p className="py-2 text-sm font-normal text-gray-500 dark:text-gray-300 md:px-4">
                    {product?.node.title}
                  </p>
                  <p className="pb-3 text-xl font-bold text-gray-900 dark:text-gray-300 ">
                    <span className="text-[10px] italic text-gray-500 font-light">
                      From{" "}
                    </span>
                    ${product?.node.priceRange.minVariantPrice.amount}{" "}
                    {product?.node.priceRange.maxVariantPrice.currencyCode}
                  </p>
                  <div className="pb-4 md:pb-8">
                    <button className="bg-gray-900 dark:bg-myGray shadow-md text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm rounded-full || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mx-auto my-12 text-center">
            <button
              className="py-2 px-4 rounded-md text-myGray dark:text-gray-900 text-xs font-normal || transition ease-in-out delay-50 bg-gold hover:-translate-y-1 hover:scale-105 hover:bg-gold duration-300"
              ref={buttonRef}
              onClick={loadMore}
            >
              Load more
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

const crumbmenus = [
  {
    name: "Home",
    link: "/",
  },
  {
    name: "Collections",
    link: "/collections",
  },
  {
    name: "Bags & Luggages",
    link: "#",
  },
];
