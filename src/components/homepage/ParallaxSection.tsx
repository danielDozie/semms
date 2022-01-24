import React from 'react';

const parallax = "https://images.unsplash.com/photo-1457972657980-4c9fddebec8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80";

export default function ParallaxSection() {
    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: `url(${parallax})` }}>
            <div className="bg-black bg-opacity-50 h-screen pt-20 w-full">

                <div className="w-[80%] mx-auto px-0 md:px-4 py-16">
                    <div className="flex flex-col">
                        <div className="bg-white dark:bg-black w-full p-8 md:w-[60%] md:p-8 rounded-sm">
                            <h1 className="text-gray-600 dark:text-gray-300 text-lg font-normal">
                                Top Quality Leather Luggage Company
                            </h1>
                            <h1 className="text-gray-600 dark:text-gray-300 text-2xl  md:text-3xl font-bold uppercase py-4">
                                Established since 2019
                            </h1>
                            <p className="text-gray-500 dark:text-gray-300 text-md font-light">
                                However you wish to pack. Whatever your need is, we have the solution. 
                            </p>
                            <p className="text-gray-500 dark:text-gray-300  text-md font-light">
                            As a family owned business, we pride ourselves on our personal customer service. That can be proven by our amazing customer ratings and reviews.

We offer a diverse range of products to suit all, as well as offering great deals! We also offer a product personalization service for the majority of our items, and subject to availability.
                            </p>

                            <div className="pt-8">
                            <button className="bg-gray-800 hover:bg-star hover:text-gray-800 text-gray-300 font-light text-sm py-2 px-4 rounded-md">
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
