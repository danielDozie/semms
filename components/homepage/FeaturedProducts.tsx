import React, { useEffect } from 'react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'
import { useProductStore } from '../../store/productStore';

export default function FeaturedProducts() {
    const products = useProductStore(state => state.products);
    const setProducts = useProductStore(state => state.setProducts);
    useEffect(() => {
        setProducts();
    }, []);
    // console.log(products[0].node.images.edges[0].node.src);


    return (<>
        <div className="w-full max-h-screen pb-28 bg-white dark:bg-black">
            <div className="w-[80%] md:max-w-5xl mx-auto mt-16 mb-8">
                <h1 className="font-bold text-4xl text-gray-700 dark:text-gray-300 py-2">Featured</h1>
                <p className="font-light text-lg text-gray-500 dark:text-gray-300">Top selling products </p>
            </div>
            <div className="grid grid-rows-1 md:grid-rows-1 grid-flow-col gap-4 max-w-[80%] mx-auto overflow-x-auto md:overflow-hidden carousel carousel-center">
                {products.map(product =>
                    <div key={product.node.id}>
                        <div className="bg-myGray dark:bg-gray-900 min-h-[280px] min-w-[250px] carousel-item">
                            <div className="p-4">
                                <div className="drop-shadow-md">
                                    <img className="w-full" src={product.node.media.edges[0].node.previewImage.src} alt={product.node.media.edges[0].node.previewImage.altText} />
                                </div>
                            </div>
                        </div>
                        <div className="justify-center items-center mx-auto text-center drop-shadow-md">
                            <h1 className="font-medium text-[10px]  text-gray-500 dark:text-gray-300 my-2 uppercase">{product.node.vendor}</h1>
                            <StarRating rating={product.rating} />
                            <p className="font-light text-sm text-gray-500 dark:text-gray-300 py-2">{product.node.title}</p>
                            <p className="font-bold text-sm text-gray-800 dark:text-gray-300 pb-3">${product.node.priceRange.minVariantPrice.amount} - ${product.node.priceRange.maxVariantPrice.amount}</p>
                            <button className="btn btn-xs btn-outline  dark:bg-black font-light text-gray-800 dark:text-myGray">Buy Now</button>
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
