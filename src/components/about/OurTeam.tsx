import Link from 'next/link';
import React from 'react';

export function OurTeam() {
    return (
        <>
            <div className="flex flex-col-reverse my-16 md:flex-row">
                <div className="w-full md:w-[60%] ">
                    <div className="flex flex-col md:pr-8">
                        <h1 className="pt-8 text-4xl font-bold text-gray-900 dark:text-myGray">Our Team</h1>
                        <p className="pt-8 text-sm font-light text-gray-800 dark:text-myGray "> Our Team makes Semms Luxuries what it is; excellent with a touch of class.
Combining skill with experience, our focus is to bring you only the best. That is our commitment to you; we are crafting classic and contemporary fashion for fashion-forward and fashion-conscious people.
We make you feel and look good with our diverse and dynamic services. We are passionate about providing what you need, the way you need it.</p>
                        <div className="pt-8">
                            <Link href="/contact">
                            <button className="w-[50%] md:w-[30%] h-10 bg-gray-900 shadow-md text-myGray dark:bg-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-gray-800 font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm md:text-sm rounded-md || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                                Get in touch
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[40%] ">
                    <div className="bg-center bg-cover rounded-md shadow-sm h-72" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644629909/semms%20luxury/team_qczqkn.jpg'})` }} />
                </div>
            </div>
        </>
    )
}