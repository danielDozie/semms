import React from 'react'
import { VscStarFull, VscStarEmpty } from 'react-icons/vsc'

export default function FeaturedProducts() {
    return (<>
        <div className="w-full max-h-screen pb-28 bg-white dark:bg-black">
            <div className="w-[80%] md:max-w-5xl mx-auto mt-16 mb-8">
                <h1 className="font-bold text-4xl text-gray-700 dark:text-gray-300 py-2">Featured</h1>
                <p className="font-light text-xl text-gray-500 dark:text-myGray">Top selling products </p>
            </div>
            <div className="grid grid-rows-1 grid-flow-col gap-4 max-w-[80%] mx-auto overflow-x-auto md:overflow-hidden">
                {products.map(product =>
                    <div key={product.id}>
                        <div className="bg-myGray dark:bg-gray-900 min-h-[280px] min-w-[250px]">
                            <div className="p-4">
                                <div>
                                    <img className="w-full" src={product.image} alt="red" />
                                </div>
                            </div>
                        </div>
                        <div className="justify-center items-center mx-auto text-center drop-shadow-md">
                            <h1 className="font-medium text-[10px]  text-gray-400 dark:text-myGray my-2 uppercase">{product.brand}</h1>
                            <StarRating rating={product.rating} />
                            <p className="font-semibold text-sm text-gray-500 dark:text-myGray py-2">{product.name}</p>
                            <p className="font-semibold text-sm text-gray-500 dark:text-myGray pb-3">{product.price}</p>
                            <button className="bg-gold text-white dark:text-black font-semibold py-2 px-4 rounded-full text-sm">Add to cart</button>
                        </div>
                    </div>
                )}
                <div>
                </div>
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

const products = [
    {
        id: 1,
        brand: 'Semms',
        name: 'Red Lux Luggage',
        price: '$100.00',
        image: '/image/redbag.png',
        rating: 1,
    },
    {
        id: 2,
        brand: 'Semms',
        name: 'Hot Pink Lux Luggage',
        price: '$100.00',
        image: '/image/hotpinkbag.png',
        rating: 5,
    },
    {
        id: 3,
        brand: 'Semms',
        name: 'Brown Lux Luggage',
        price: '$100.00',
        image: '/image/brownbag.png',
        rating: 2,
    },
    {
        id: 4,
        brand: 'Semms',
        name: 'Light Pink Lux Luggage',
        price: '$100.00',
        image: '/image/lightPink.png',
        rating: 4,
    },
]