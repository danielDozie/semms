import Link from 'next/link'
import React from 'react'

export default function DiscoverBanner() {
    return (
        <>
            <div className="mx-auto bg-gold h-44 w-full my-16  bg-center bg-cover rounded-md" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644509999/semms%20luxury/coll_ssarep.jpg'})` }}>
                <div className="flex flex-col justify-center items-center py-8 md:py-12">
                    <h1 className="text-center px-4 md:px-0 text-xl md:text-3xl bg-clip-text text-transparent bg-gradient-to-r from-gold to-yellow-300 drop-shadow-lg font-bold">
                        Getting the best doesn’t mean breaking the bank
                    </h1>
                    <p className="text-md md:text-xl py-4 text-gold font-light hover:underline hover:underline-offset-2 cursor-pointer">
                        <Link href="/collections">
                            Checkout out our collections
                        </Link>
                    </p>
                </div>
            </div>
        </>
    )
}
