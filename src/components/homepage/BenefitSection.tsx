import React from 'react'
import {FaShippingFast, FaPercent} from 'react-icons/fa'
import {CgDesignmodo} from 'react-icons/cg'

export default function BenefitSection() {
    return (
        <>
            <div className="max-w-7xl h-full bg-gold dark:bg-black pb-24">
                <div className="flex flex-col md:flex-row flex-wrap w-[80%] mx-auto">
                    <div className="my-20 w-full md:w-[50%]">
                        <h1 className="text-left text-3xl md:text-4xl font-bold text-gray-800 dark:text-myGray">
                            Quality Never Goes Out of Style
                        </h1>
                        <p className="text-gray-800 dark:text-myGray py-6 text-md font-light">We make top luggages, handbags, accessories, kids collections, and more. With a wide variety of brands, thousands of products, and customer-generated ratings and reviews, we are committed to helping our customers with the best travel bags and accessories.</p>
                    </div>
                    <div className="flex w-full md:my-20 md:pl-12 md:w-[50%] md:pt-12 gap-x-4">
                        <div className="bg-white dark:bg-gray-900 mx-auto  drop-shadow-md rounded-md md:max-h-24 w-[50%]">
                            <div className="p-4">
                                <h1 className="text-center text-md md:text-sm font-bold text-gray-800 dark:text-myGray">
                                    Quality  Assurance
                                </h1>
                                <h1 className="text-center text-2xl font-semibold text-gold py-2 ">
                                    95% <span className="text-sm font-light text-gray-800 dark:text-myGray">Avg. Rating</span>
                                </h1>
                            </div>
                        </div>
                        <div className="bg-gray-800  drop-shadow-md rounded-md md:max-h-24 w-[50%]">
                            <div className="p-4">
                                <h1 className="text-center text-md md:text-sm font-bold text-white ">
                                    Quality Materials
                                </h1>
                                <h1 className="text-center text-2xl font-semibold text-gold py-2 ">
                                    90% <span className="text-sm font-light text-white">User Reviews </span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col py-12 md:py-0 md:flex-row md:gap-x-4 gap-y-4">
                        {banners.map((banner, index) => (
                            <div className="bg-top bg-cover dark:bg-gray-900 drop-shadow-xl rounded-md h-40 min-w-[320px]" style={{ backgroundImage:`url(${banner.image})`}} key={index}>
                            <div className="bg-gray-900/80 w-full h-full rounded-md">
                            <div className="p-4">
                                <h1 className="text-center text-lg font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gray-200 drop-shadow-lg">
                                    {banner.title}
                                </h1>
                                <span className="py-8">
                                 {banner.icon}
                                </span>
                                <p className="text-center text-sm font-light text-myGray drop-shadow-lg">{banner.description}</p>
                            </div>
                        </div>
                        </div>
                        )
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

const banners = [
    {
        image: 'https://images.unsplash.com/photo-1459257831348-f0cdd359235f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Enjoy Massive Sale',
        description: 'Save More With SEMMS Luxury',
        icon: <FaPercent className="text-gold mx-auto my-2 drop-shadow-lg" size="36"/>
    },
    {
        image: 'https://images.unsplash.com/photo-1604131853518-4415773bd126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
        title: 'Ship To Contiguous U.S.A',
        description: 'Hassle Free, Fast & Reliable',
        icon: <FaShippingFast className="text-gold mx-auto my-2 drop-shadow-lg" size="40"/>
    },
    {
        image: 'https://images.unsplash.com/photo-1639598003170-acfd39fcd7b1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80',
        title: 'Personalization On Request',
        description: 'We Can Do A Little Extra',
        icon: <CgDesignmodo className="drop-shadow-lg text-gold mx-auto my-2" size="40"/>
    }
]
