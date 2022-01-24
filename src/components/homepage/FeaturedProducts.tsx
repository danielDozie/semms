import React, { useEffect } from 'react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import { useProductStore } from '../../store/productStore';
import {motion} from 'framer-motion';
import { productImageVariant } from './homepageAnimation';

export default function FeaturedProducts() {
    const productsData = useProductStore(state => state.products);
    const products = productsData.slice(0, 4);
    const setProducts = useProductStore(state => state.setProducts);
    useEffect(() => {
        setProducts();
    }, []);
    
    const [showButton, setShowButton] = React.useState(false);
    
    return (<>
        <div className="w-full max-h-screen pb-28 bg-white dark:bg-black">
            <div className="w-[80%] md:max-w-5xl mx-auto mt-16 mb-8">
                <h1 className="font-bold text-4xl text-gray-700 dark:text-gray-300 py-2">Featured</h1>
                <p className="font-light text-lg text-gray-500 dark:text-gray-300">Top selling products </p>
            </div>
            <div className="flex flex-row max-w-[80%] mx-auto overflow-x-auto md:overflow-hidden carousel carousel-center">
                {products.map(product =>
                    <div key={product.node.id}>
                        <motion.div onHoverStart={() => setShowButton(true)} onHoverEnd={() => setShowButton(false)} className="bg-myGray dark:bg-gray-900 min-w-[250px] carousel-item mr-2 cursor-pointer rounded-md">
                            <div className="p-4">
                                <motion.div initial="initial" animate="animate" whileHover="hover" variants={productImageVariant} className="drop-shadow-md">
                                    <img className="w-full" src={product.node.media.edges[0].node.previewImage.src} alt={product.node.media.edges[0].node.previewImage.altText} />
                                </motion.div>
                                {/* bottom half */}
                                <div className="justify-center items-center mx-auto text-center pt-8 pb-2">
                                    <h1 className="font-medium text-[10px] text-gold my-2 uppercase">{product.node.vendor}</h1>
                                    <StarRating rating={product.rating} />
                                    <p className="font-light text-sm text-gray-500 dark:text-gray-300 py-2">{product.node.title}</p>
                                    <p className="font-bold text-sm text-gray-500 dark:text-gray-300 pb-3">${product.node.priceRange.minVariantPrice.amount} - ${product.node.priceRange.maxVariantPrice.amount}</p>
                                    {/* <motion.button animate={showButton ? {transition:{duration:.3, fade:'fadeIn'}}: {transition:{duration: .3, fade: 'fadeOut'}}} className={`${showButton ? 'inline-block' : 'hidden'} btn btn-xs btn-outline rounded-sm  dark:bg-black font-light text-gray-800 dark:text-myGray`}>View Product</motion.button> */}
                                </div>
                            </div>
                        </motion.div>
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
            return <div className="flex flex-auto justify-center ">
                {star}
                {blankStar}
                {blankStar}
                {blankStar}
                {blankStar}
            </div>;
        case 2:
            return <div className="flex flex-auto justify-center ">
                {star}
                {star}
                {blankStar}
                {blankStar}
                {blankStar}
            </div>;
        case 3:
            return <div className="flex flex-auto justify-center ">
                {star}
                {star}
                {star}
                {blankStar}
                {blankStar}
            </div>;
        case 4:
            return <div className="flex flex-auto justify-center ">
                {star}
                {star}
                {star}
                {star}
                {blankStar}
            </div>;
        case 5:
            return <div className="flex flex-auto justify-center ">
                {star}
                {star}
                {star}
                {star}
                {star}
            </div>;
        default:
            return <div className="flex flex-auto justify-center ">
                {blankStar}
                {blankStar}
                {blankStar}
                {blankStar}
                {blankStar}
            </div>;

    }

}
