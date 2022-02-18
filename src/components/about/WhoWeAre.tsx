import Link from 'next/link';
import React from 'react';
export default function WhoWeAre() {
    return (
        <>
            <div className="flex flex-col-reverse my-16 md:flex-row">
                <div className="w-full md:w-[60%] ">
                    <div className="flex flex-col md:pr-8">
                        <h1 className="pt-8 text-4xl font-bold text-gray-900 dark:text-myGray">Who we are</h1>
                        <p className="pt-8 text-sm font-light text-gray-800 dark:text-myGray ">We carry tested and trusted top luggage, handbags, accessories, kids collections, and more. With a wide variety of brands, thousands of products, and customer-generated ratings and reviews, we are committed to helping our customers find the best travel bags and accessories at the right price. We pride ourselves on having the knowledge and experience to help our customers choose the very best in our product catalog.</p>
                        <div className="pt-8">
                            <Link href="/discover">
                            <button className="w-[50%] md:w-[30%] h-10 bg-gray-900 dark:bg-myGray shadow-md text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm md:text-sm rounded-md || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                                View Products
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-[40%] ">
                    <div className="bg-center bg-cover rounded-md shadow-sm h-72" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644629624/semms%20luxury/aabout_l3tjra.jpg'})` }} />
                </div>
            </div>
        </>
    )
}