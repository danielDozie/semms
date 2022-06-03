import Head from 'next/head'
import React from 'react'
import OurApproach from '../../src/components/about/OurApproach'
import { OurTeam } from '../../src/components/about/OurTeam'
import WhoWeAre from '../../src/components/about/WhoWeAre'
import Breadcrumbs from '../../src/components/common/Breadcrumbs'

export default function index() {
    return (
        <>
            <Head>
                <title>About - {process.env.storename}</title>
                <meta name="description" content="Collections" />
                <meta name="keywords" content="Collections" />
            </Head>
            <div className="items-center justify-center h-full pt-24 mx-auto w-full">
                <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
            </div>
            
            <div className="w-full bg-gold dark:bg-black">
                <div className="flex flex-col w-[80%] mx-auto py-12">
                    <WhoWeAre />
                </div>
            </div>
            <div className="bg-gray-900 w-100">
                <div className="flex flex-col w-[80%] mx-auto py-12">
                <OurApproach />
                </div>
            </div>
            <div className="w-100 bg-myGray dark:bg-black">
                <div className="flex flex-col w-[80%] mx-auto py-12">
                    <OurTeam />
                </div>
            </div>
        
        </>
    )
}

const title = 'About Us'
const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1644614892/semms%20luxury/story_pxrsuc.jpg'
const crumbmenus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about'
    }
]