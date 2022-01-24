import React from 'react'
import {FaShippingFast, FaPercent} from 'react-icons/fa'
import {CgDesignmodo} from 'react-icons/cg'


export default function Highlights(){
    return (
        <>
            <div className="w-ful min-h-full bg-myGray dark:bg-black">  
                <div className="container mx-auto px-4 py-24">
                    <div className="flex flex-wrap">
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div className="bg-white rounded-lg shadow-lg p-8 dark:bg-gray-900">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <FaShippingFast className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold uppercase text-gray-600 dark:text-gray-300">Free Shipping</h5>
                                        <p className="text-gray-800 dark:text-gray-300 font-light">Free shipping on all orders over $800</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <FaPercent className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold uppercase text-gray-600 dark:text-gray-300">30% Off</h5>
                                        <p className="text-gray-800 font-light dark:text-gray-300">All items are 30% off</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full md:w-1/2 lg:w-1/3 p-3">
                            <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-8">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <CgDesignmodo className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold uppercase text-gray-600 dark:text-gray-300">Free Returns</h5>
                                        <p className="text-gray-800 font-light dark:text-gray-300">Free returns on all items</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="w-[80%] mx-auto px-0 md:px-4 py-16">
                            <div className="my-4 mx-auto text-center">
                                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-300">
                                    Newsletter
                                </h1>
                                <h1 className="text-5xl font-bold text-gray-800 py-4 dark:text-gray-300">Let&apos;s keep in touch with you</h1>
                                <p className="text-md font-regular text-gray-500 dark:text-gray-300">Subscribe to our newsletter for new products alert and updates on our stories</p>
                                <div className="flex flex-wrap py-8 mx-auto justify-center">
                                    <input type="text" className="w-1/2 p-4" placeholder="Enter your email" />
                                    <button className="bg-gold text-white font-light py-2 px-4 hover:bg-gray-800 hover:text-white">Subscribe</button>
                                </div>
                                <p className="text-gray-400 text-[10px]  dark:text-gray-300 -mt-6">*We won&apos;t spam your email. We promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                    
        </>
    )
}
