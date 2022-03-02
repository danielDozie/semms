import React from 'react'
import { FaShippingFast, FaPercent } from 'react-icons/fa'
import { CgDesignmodo } from 'react-icons/cg'
import { useForm } from "react-hook-form";


export default function Highlights() {
    const { register, handleSubmit } = useForm();
    const [formData, setFormData] = React.useState<any>()

    return (
        <>
            <div className="h-full max-w-7xl bg-myGray dark:bg-black">
                <div className="container px-4 py-24 mx-auto">
                    <div className="flex flex-wrap">
                        <div className="w-full p-3 md:w-1/2 lg:w-1/3">
                            <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <FaShippingFast className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-gray-600 uppercase dark:text-gray-300">Free Shipping</h5>
                                        <p className="font-light text-gray-800 dark:text-gray-300">Free on all orders over $800</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-3 md:w-1/2 lg:w-1/3">
                            <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <FaPercent className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-gray-600 uppercase dark:text-gray-300">30% Off</h5>
                                        <p className="font-light text-gray-800 dark:text-gray-300">All items are 30% off</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full p-3 md:w-1/2 lg:w-1/3">
                            <div className="p-8 bg-white rounded-lg shadow-lg dark:bg-gray-900">
                                <div className="flex items-center">
                                    <div className="flex-shrink-0">
                                        <CgDesignmodo className="w-10 h-10 text-gold" />
                                    </div>
                                    <div className="ml-4">
                                        <h5 className="font-bold text-gray-600 uppercase dark:text-gray-300">Free Returns</h5>
                                        <p className="font-light text-gray-800 dark:text-gray-300">Free returns on all items</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="w-[80%] mx-auto px-0 md:px-4 py-16">
                            <div className="mx-auto my-4 text-center">
                                <h1 className="text-2xl font-bold text-gray-500 dark:text-gray-300">
                                    Newsletter
                                </h1>
                                <h1 className="py-4 text-5xl font-bold text-gray-800 dark:text-gray-300">Let&apos;s keep in touch with you</h1>
                                <p className="text-gray-500 text-md font-regular dark:text-gray-300">Subscribe to our newsletter for new products alert and updates on our stories</p>
                                <form onSubmit={handleSubmit((data) => setFormData(data))}>
                                    <       div className="flex flex-wrap justify-center py-8 mx-auto">
                                        <input {...register("email")} placeholder="Enter your email" className="w-1/2 p-4" />
                                        <button type="submit" className="px-4 py-2 font-light text-white bg-gold hover:bg-gray-800 hover:text-white">Subscribe</button>
                                    </div>
                                </form>
                                <p className="text-gray-400 text-[10px]  dark:text-gray-300 -mt-6">*We won&apos;t spam your email. We promise.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
