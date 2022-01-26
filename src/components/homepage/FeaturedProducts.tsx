import React, { useEffect , useRef} from 'react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import { useProductStore } from '../../store/productStore';
import {motion} from 'framer-motion';
import { productImageVariant } from './homepageAnimation';
import {useRouter} from 'next/router';


export default function FeaturedProducts() {
    const productsData = useProductStore(state => state.products);
    const products = productsData.slice(0, 4);
    const setProducts = useProductStore(state => state.setProducts);
    useEffect(() => {
        setProducts();
    }, []);
    const [showButton, setShowButton] = React.useState(false);

    const router = useRouter();
    

    const productPage = (e:any) => {
        e.preventDefault();
        const slug =  `/products/${e.currentTarget.id}`;
        router.push(slug);
    }
    
    return (<>
        <div className="h-full bg-white max-w-7xl pb-28 dark:bg-black">
            <div className="w-[80%] md:max-w-5xl mx-auto mt-16 mb-8">
                <h1 className="py-2 text-4xl font-bold text-gray-700 dark:text-gray-300">Featured</h1>
                <p className="text-lg font-light text-gray-500 dark:text-gray-300">Top selling products </p>
            </div>
            <div className="flex flex-row max-w-[80%] mx-auto overflow-x-auto md:overflow-hidden carousel carousel-center">
                {products.map(product =>
                    <div key={product.node.id}>
                        <motion.div onHoverStart={() => setShowButton(true)} onHoverEnd={() => setShowButton(false)} className="bg-myGray dark:bg-gray-900 min-w-[250px] carousel-item mr-2 cursor-pointer rounded-md" onClick={productPage} id={product.node.handle}>
                            <div className="p-4">
                                <motion.div initial="initial" animate="animate" whileHover="hover" whileTap="hover" variants={productImageVariant} className="drop-shadow-md">
                                    <img className="w-full" src={product.node.media.edges[0].node.previewImage.src} alt={product.node.media.edges[0].node.previewImage.altText} />
                                </motion.div>
                                {/* bottom half */}
                                <div className="items-center justify-center pt-8 pb-2 mx-auto text-center">
                                    <h1 className="font-medium text-[10px] text-gold my-2 uppercase">{product.node.vendor}</h1>
                                    <StarRating rating={product.rating} />
                                    <p className="py-2 text-sm font-light text-gray-500 dark:text-gray-300">{product.node.title}</p>
                                    <p className="pb-3 text-sm font-bold text-gray-500 dark:text-gray-300">${product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.maxVariantPrice.currencyCode} - ${product.node.priceRange.maxVariantPrice.amount} {product.node.priceRange.maxVariantPrice.currencyCode}</p>
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
