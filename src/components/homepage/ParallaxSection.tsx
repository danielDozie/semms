import React from 'react';
import router from 'next/router'

const parallax = "https://res.cloudinary.com/semms-luxury/image/upload/v1645075779/semms%20luxury/photo-1457972657980-4c9fddebec8d_k70nz7.jpg";

export default function ParallaxSection():JSX.Element {
    return (
        <div className="w-full bg-fixed bg-center bg-no-repeat bg-cover" style={{ backgroundImage: `url(${parallax})` }}>
            <div className="w-full h-full pt-20 bg-black bg-opacity-50">

                <div className="w-[80%] mx-auto px-0 md:px-4 py-16">
                    <div className="flex flex-col">
                        <div className="bg-white dark:bg-black w-full p-8 md:w-[60%] md:p-8 rounded-sm">
                            <h1 className="text-lg font-normal text-gray-600 dark:text-gray-300">
                                Top Quality Leather Luggage Company
                            </h1>
                            <h1 className="py-4 text-2xl font-bold text-gray-600 uppercase dark:text-gray-300 md:text-3xl">
                                Established since 2019<span className="font-bold text-gold">.</span>
                            </h1>
                            <p className="font-light text-gray-500 dark:text-gray-300 text-md">
                            The tangible experience of travel is lost in today’s bustle and frequent travel. You may not always remember the first time you saw your luggage, but with Semms luxuries, you get a piece of art and a lifetime of memories.
As a family-owned business, we pride ourselves on our excellent customer service. This is proven by countless amazing reviews and ratings from our equally amazing customers.
Ask our customers, and they’d all tell you the same thing; we offer only the best. Our diverse range of products does not compromise on quality or comfort, all while offering you great deals!
However you need to pack, whatever your need is, we have the solution.
                            </p>

                            <div className="pt-8">
                            <button className="px-4 py-2 text-sm font-light text-white bg-gray-800 rounded-md hover:bg-star hover:text-gray-800" onClick={() => router.push('/collections')}>
                                See our collections
                            </button>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
