import Link from 'next/link';
import React from 'react';
export default function OurApproach():JSX.Element {
    return (
        <>
            <div className="flex flex-col my-16 md:flex-row">
                <div className="w-full md:w-[40%] ">
                    <div className="bg-center bg-cover rounded-md shadow-sm h-72" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644627866/semms%20luxury/who-we-are_ekdgiz.jpg'})` }} />
                </div>
                <div className="w-full md:w-[60%] ">
                    <div className="flex flex-col md:pl-8">
                        <h1 className="pt-8 text-4xl font-bold text-myGray dark:text-myGray">Our Approach</h1>
                        <p className="pt-8 text-sm font-light text-myGray ">At Semms Luxuries, we strive to ensure that the luggage we produce is nothing short of impeccable.
Semms Luxuries was created by a luxury luggage connoisseur and made to last. Smart and luxurious, our collections will make you look good while you're on the go.
Family-owned, Semms Luxuries offers 75+ luxurious styles of travel luggage to meet your taste and budget.
We’ve got everything you need; and so much more.
 </p>
                        <div className="pt-8">
                            <Link href="/collections">
                            <button className="w-[50%] md:w-[30%] h-10 bg-myGray shadow-md text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-gray-800 font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm md:text-sm rounded-md || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                                See our collections
                            </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}