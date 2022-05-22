import React, { useEffect, useRef } from 'react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import { useProductStore } from '../../store/productStore';
import { motion } from 'framer-motion';
import { productImageVariant } from './homepageAnimation';
import router from 'next/router';
import Image from 'next/image';


export default function FeaturedProducts() {
    const productsData = useProductStore(state => state.products);
    const products = productsData.slice(0, 4);
    const setProducts = useProductStore(state => state.setProducts);

    useEffect(() => {
        setProducts();
    }, [products]);

    const productPage = (e: any) => {
        e.preventDefault();
        const slug = `/products/${e.currentTarget.id}`;
        router.push(slug);
    }
    // const d =  JSON.parse(products[0].node.ratings.value)
    // console.log(Math.floor(d.value))
    return (<>
        <div className="h-full bg-white max-w-7xl pb-28 dark:bg-black">
            <div className="w-[80%] flex justify-between md:max-w-5xl mx-auto mt-16 mb-8 ">
                <div>
                <h1 className="py-2 text-4xl font-bold text-gray-700 dark:text-gray-300">Featured</h1>
                <p className="text-lg font-light text-gray-500 dark:text-gray-300">Top selling products </p>
                </div>
                <div className="pt-14">
                <a href="/products" className="text-xs md:text-sm font-semibold md:pr-4 text-gray-500 dark:text-gray-300 hover:underline hover:underline-offset-8">View All</a>
                </div>
            </div>
            <div className="flex flex-row max-w-[80%] mx-auto overflow-x-auto lg:overflow-hidden no-scrollbar">
                {products.map(product =>
                    <div key={product?.node?.id}>
                        <div className="bg-myGray dark:bg-gray-900 min-w-[250px] carousel-item mr-2 cursor-pointer rounded-md" onClick={productPage} id={product?.node?.handle}>
                            <div className="p-4 relative">
                                <div className="absolute">
                                <Image src="/image/setOf3.svg" width="50" height="50" />
                                </div>
                                <motion.div initial="initial" animate="animate" whileHover="hover" whileTap="hover" variants={productImageVariant} className="drop-shadow-md">
                                    <div className="items-center justify-center w-full mx-auto text-center">
                                        <Image className="" src={product?.node.media.edges[0].node.previewImage.src} alt={product?.node.media.edges[0].node.previewImage.altText} height="250" width="250" />
                                    </div>
                                </motion.div>
                                {/* bottom half */}
                                <div className="items-center justify-center pt-8 pb-2 mx-auto text-center">
                                    <h1 className="font-medium text-[10px] text-gold my-2 uppercase">{product.node.vendor}</h1>
                                    {
                                        product?.node?.ratings?.value ?
                                        <StarRating rating={Math.floor(JSON.parse(product?.node?.ratings?.value).value)} />:
                                            <StarRating rating={product?.node?.ratings?.value} />
                                    }
                                    <p className="py-2 text-sm font-light text-gray-500 dark:text-gray-300">{product.node.title}</p>

                                    <p className="pb-3 text-sm font-bold text-gray-900 dark:text-gray-300"><span className="text-[10px] italic text-gray-500 font-light">From </span>${product?.node.priceRange.minVariantPrice.amount} {product?.node.priceRange.maxVariantPrice.currencyCode}</p>
                                    <div>
                                        <button className="px-2 py-1 text-xs font-normal bg-gray-900 rounded-full shadow-md dark:bg-myGray to-gray-600 text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-900 dark:hover:bg-gold dark:hover:text-gray-900">
                                            View Details
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    </>)
}


export function StarRating(props: { rating: any }) {
    const rating = props.rating
    const star = <VscStarFull className="text-star" size="14" />
    const blankStar = <VscStarEmpty className="text-gray-400" size="14" />
    switch (rating) {
        case 1:
            return <div className="flex justify-center flex-auto ">
                {star}
                {blankStar}
                {blankStar}
                {blankStar}
                {blankStar}
            </div>;
        case 2:
            return <div className="flex justify-center flex-auto ">
                {star}
                {star}
                {blankStar}
                {blankStar}
                {blankStar}
            </div>;
        case 3:
            return <div className="flex justify-center flex-auto ">
                {star}
                {star}
                {star}
                {blankStar}
                {blankStar}
            </div>;
        case 4:
            return <div className="flex justify-center flex-auto ">
                {star}
                {star}
                {star}
                {star}
                {blankStar}
            </div>;
        case 5:
            return <div className="flex justify-center flex-auto ">
                {star}
                {star}
                {star}
                {star}
                {star}
            </div>;
        default:
            return <div className="flex justify-center flex-auto ">
                {blankStar}
                {blankStar}
                {blankStar}
                {blankStar}
                {blankStar}
            </div>;

    }

}
