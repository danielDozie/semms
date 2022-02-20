import React from 'react';

const parallax = "https://res.cloudinary.com/semms-luxury/image/upload/v1645075779/semms%20luxury/photo-1457972657980-4c9fddebec8d_k70nz7.jpg";

export default function ParallaxSection() {
    return (
        <div className="bg-fixed bg-center bg-no-repeat bg-cover max-w-7xl" style={{ backgroundImage: `url(${parallax})` }}>
            <div className="w-full h-full pt-20 bg-black bg-opacity-50">

                <div className="w-[80%] mx-auto px-0 md:px-4 py-16">
                    <div className="flex flex-col">
                        <div className="bg-white dark:bg-black w-full p-8 md:w-[60%] md:p-8 rounded-sm">
                            <h1 className="text-lg font-normal text-gray-600 dark:text-gray-300">
                                Top Quality Leather Luggage Company
                            </h1>
                            <h1 className="py-4 text-2xl font-bold text-gray-600 uppercase dark:text-gray-300 md:text-3xl">
                                Established since 2019
                            </h1>
                            <p className="font-light text-gray-500 dark:text-gray-300 text-md">
                                However you wish to pack. Whatever your need is, we have the solution. 
                            </p>
                            <p className="font-light text-gray-500 dark:text-gray-300 text-md">
                            As a family owned business, we pride ourselves on our personal customer service. That can be proven by our amazing customer ratings and reviews.

We offer a diverse range of products to suit all, as well as offering great deals! We also offer a product personalization service for the majority of our items, and subject to availability.
                            </p>

                            <div className="pt-8">
                            <button className="px-4 py-2 text-sm font-light text-white bg-gray-800 rounded-md hover:bg-star hover:text-gray-800">
                                Learn More
                            </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
