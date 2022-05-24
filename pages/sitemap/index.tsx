import Head from 'next/head'
import React from 'react'
import axios from 'axios'
import Link from 'next/link';
import { CgArrowLongRightC } from 'react-icons/cg';
const parseString = require('xml2js').parseString;
import { ISITEMAP } from '../../src/types';

export default function index():React.FunctionComponentElement<ISITEMAP> {
    const title = 'Sitemap'
    const [data, setData] = React.useState<ISITEMAP[]>([]);
    React.useEffect(() => {
        axios.get('https://www.semmslux.com/sitemap-0.xml', {
            method: 'GET',
            headers: {
                'Content-Type': 'text/xml'
            }
        })
            .then(response => response.data)
            .then(data => {
                parseString(data, (err:ISITEMAP, result: ISITEMAP) => {
                    if (!result) {
                        console.log(err);
                    } else {
                        const xmlData = result.urlset.url;
                        setData(xmlData);
                    }
                });
            }
            )
            .catch(err => {
                console.log(err);
            }
            );
    }, [])

    return (
        <>
            <Head>
                <title>{title} - {process.env.storename} </title>
            </Head>
            <div className="flex h-full">
                <div className="w-[80%] mx-auto py-24">
                    <div className="pt-12 bg-white dark:bg-black">
                        <div className="text-3xl font-bold text-gold">{title}</div>
                        <div className="py-16">
                            {data && data.map((item:ISITEMAP, index: number) => {
                                return <div className="py-1 text-sm font-semibold text-gray-800 capitalize dark:text-myGray hover:underline hover:underline-offset-4" key={index}>
                                    <Link href={item?.loc[0]}>
                                    <span className="flex cursor-pointer gap-x-4">
                                    <CgArrowLongRightC size={16} className="pt-1 text-gold" />
                                    {item?.loc[0].replace('https://www.semmslux.com/', '').replace('https://www.semmslux.com','Home')}
                                    </span>
                                    </Link>
                                </div>
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
