import Link from 'next/link'
import React from 'react'

export default function ContactBanner() {
    return (
        <>
            <div className="mx-auto bg-gold h-44 w-full my-0 mb-8 md:my-16  bg-left bg-cover rounded-md" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1645277210/semms%20luxury/Resizer.in_-6210f002d7b96_l9nldd.jpg'})` }}>
                <div className="flex flex-col justify-center items-center py-8 md:py-12">
                    <h1 className="text-center px-4 md:px-0 text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-900 drop-shadow-lg font-bold">
                        We pride ourselves with the quality of products we offer
                    </h1>
                    <p className="text-md md:text-xl py-4 text-gray-800 font-light hover:underline hover:underline-offset-2 cursor-pointer">
                        <Link href="/about">
                            More about us
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
