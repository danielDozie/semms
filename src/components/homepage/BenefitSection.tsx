import React from 'react'
import {FaShippingFast, FaPercent} from 'react-icons/fa'
import {CgDesignmodo} from 'react-icons/cg'
import { motion } from 'framer-motion'

export default function BenefitSection():JSX.Element {
    return (
        <>
            <div className="w-full h-full pb-24 bg-gold dark:bg-black">
                <div className="flex flex-col md:flex-row flex-wrap w-[80%] mx-auto">
                    <div className="my-20 w-full md:w-[50%]">
                        <h1 className="text-3xl font-bold text-left text-gray-800 md:text-4xl dark:text-myGray">
                        Quality Never Goes out Of Style, Neither does Luxury
                        </h1>
                        <p className="py-6 font-light text-gray-800 dark:text-myGray text-md">What can we say? These designs are a statement.
Our collection of high-quality luggage, handbags, accessories, kids collections and so much more are unrivalled by none in the industry. Semms luxury luggage is surprisingly practical, beautifully designed and super roomy. A part of the excellence is that it is one of the most affordable luggage brands on the market.</p>
                    </div>
                    <div className="flex w-full md:my-20 md:pl-12 md:w-[50%] md:pt-12 gap-x-4">
                        <div className="bg-white dark:bg-gray-900 mx-auto  shadow-md rounded-md md:max-h-36 lg:max-h-24 w-[50%]">
                            <div className="p-4">
                                <h1 className="font-bold text-center text-gray-800 text-md md:text-sm dark:text-myGray">
                                    Quality  Assurance
                                </h1>
                                <h1 className="py-2 text-2xl font-semibold text-center text-gold ">
                                    95% <span className="text-sm font-light text-gray-800 dark:text-myGray">Avg. Rating</span>
                                </h1>
                            </div>
                        </div>
                        <div className="bg-gray-800  shadow-md rounded-md md:max-h-36 lg:max-h-24 w-[50%]">
                            <div className="p-4">
                                <h1 className="font-bold text-center text-white text-md md:text-sm ">
                                    Quality Materials
                                </h1>
                                <h1 className="py-2 text-2xl font-semibold text-center text-gold ">
                                    90% <span className="text-sm font-light text-white">User Reviews </span>
                                </h1>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full py-12 mx-auto md:py-0 md:flex-row lg:flex-row md:gap-x-4 gap-y-4">
                        {banners.map((banner, index) => (
                            <motion.div animate={{opacity: 1,}} whileHover={{opacity:1, scale: 0.95, transition:{duration: .3}}} whileTap={{opacity:1, scale: 0.95, transition:{duration: .3}}} className="bg-top bg-cover dark:bg-gray-900 drop-shadow-xl rounded-md h-40 w-[320px] md:w-[320px]" style={{ backgroundImage:`url(${banner.image})`}} key={index}>
                            <div className="w-full h-full rounded-md bg-gray-900/80">
                            <div className="p-4">
                                <h1 className="text-lg font-bold text-center text-transparent bg-clip-text bg-gradient-to-r from-gold to-gray-200 drop-shadow-lg">
                                    {banner.title}
                                </h1>
                                <span className="py-8">
                                 {banner.icon}
                                </span>
                                <p className="text-sm font-light text-center text-myGray drop-shadow-lg">{banner.description}</p>
                            </div>
                        </div>
                        </motion.div>
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
        image: 'https://res.cloudinary.com/semms-luxury/image/upload/v1645075494/semms%20luxury/photo-1459257831348-f0cdd359235f_du4kny.jpg',
        title: 'Enjoy Unmatched Discounts',
        description: 'Save More With SEMMS Luxury',
        icon: <FaPercent className="mx-auto my-2 text-gold drop-shadow-lg" size="36"/>
    },
    {
        image: 'https://res.cloudinary.com/semms-luxury/image/upload/v1645075562/semms%20luxury/photo-1604131853518-4415773bd126_e7vxy1.jpg',
        title: 'Awaken in a new world',
        description: 'Get Your Luggage Delivered Anywhere',
        icon: <FaShippingFast className="mx-auto my-2 text-gold drop-shadow-lg" size="40"/>
    },
    {
        image: 'https://res.cloudinary.com/semms-luxury/image/upload/v1645075601/semms%20luxury/photo-1639598003170-acfd39fcd7b1_gbt2ne.jpg',
        title: 'Experience Bespoke Luxury',
        description: 'We can always do extra, for you',
        icon: <CgDesignmodo className="mx-auto my-2 drop-shadow-lg text-gold" size="40"/>
    }
]
