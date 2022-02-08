import Link from 'next/link';
import React from 'react';
import { UrlObject } from 'url';

export default function Collections({ banner }: any) {
    return <>
        <div className="flex flex-col w-[80%] mx-auto py-12">
            <div className="text-3xl md:text-4xl font-bold py-12 text-gray-800 dark:text-myGray">
                <h1>Explore <span className="text-3xl md:text-4xl bg-gold text-myGray dark:text-gray-800 y-4 p-1 md:p-2">Semms Luxury</span> Collections</h1>
            </div>
            
            <div className="py-8">
                <div className="flex md:flex-row flex-col mx-auto">
                    {banner.map((banner: { image: any; link: string | UrlObject; title: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; description: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }, index: React.Key | null | undefined) => (

                        <div className="bg-gold w-full mb-8 md:mr-4 h-[400px] bg-top bg-cover dark:bg-gray-900 drop-shadow-xl cursor-pointer" style={{ backgroundImage: `url(${banner.image})` }} key={index}>
                            <Link href={banner.link}>
                                <div className="bg-gray-900/50 w-full h-full">
                                    <div className="p-4">
                                        <h1 className="absolute mb-24 text-left bottom-0 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gold to-gray-200 drop-shadow-lg">
                                            {banner.title}
                                        </h1>
                                        <p className="absolute mb-16 text-left bottom-0 text-gold text-sm italic">
                                            {banner.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    </>;
}
