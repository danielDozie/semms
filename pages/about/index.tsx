import Head from 'next/head'
import React from 'react'
import Breadcrumbs from '../../src/components/common/Breadcrumbs'

export default function index() {
    return (
        <>
            <Head>
                <title>About - {process.env.storename}</title>
                <meta name="description" content="Collections" />
                <meta name="keywords" content="Collections" />
            </Head>
            <div className="max-w-7xl mx-auto justify-center items-center h-full pt-24">
                <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
            </div>

            <div className="w-100 bg-gold dark:bg-black">
                <div className="flex flex-col w-[80%] mx-auto py-12">
                    <WhoWeAre />
                </div>
            </div>
            <div className="w-100 bg-gray-900">
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


export function WhoWeAre() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row  my-16">
                <div className="w-full md:w-[60%] ">
                    <div className="flex flex-col md:pr-8">
                        <h1 className="text-4xl text-gray-900 dark:text-myGray font-bold pt-8">Who we are</h1>
                        <p className="text-gray-800 pt-8 text-sm font-light dark:text-myGray ">We carry tested and trusted top luggage, handbags, accessories, kids collections, and more. With a wide variety of brands, thousands of products, and customer-generated ratings and reviews, we are committed to helping our customers find the best travel bags and accessories at the right price. We pride ourselves on having the knowledge and experience to help our customers choose the very best in our product catalog.</p>
                        <div className="pt-8">
                            <button className="w-[50%] md:w-[30%] h-10 bg-gray-900 dark:bg-myGray shadow-md text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm md:text-sm rounded-md || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                                View Products
                            </button>
                        </div>
                    </div>
                </div>
                
                <div className="w-full md:w-[40%] ">
                    <div className="h-72 rounded-md shadow-sm bg-cover bg-center" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644629624/semms%20luxury/aabout_l3tjra.jpg'})` }} />
                </div>
            </div>
        </>
    )
}
export function OurApproach() {
    return (
        <>
            <div className="flex flex-col md:flex-row my-16">
                <div className="w-full md:w-[40%] ">
                    <div className="h-72 rounded-md shadow-sm bg-cover bg-center" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644627866/semms%20luxury/who-we-are_ekdgiz.jpg'})` }} />
                </div>
                <div className="w-full md:w-[60%] ">
                    <div className="flex flex-col md:pl-8">
                        <h1 className="text-4xl text-myGray dark:text-myGray font-bold pt-8">Our Approach</h1>
                        <p className="pt-8 text-sm font-light text-myGray ">SEMMSLUX has the experience and knowledge to help you choose the right brand of products. With a wide variety of brands and thousands of products in our large warehouse, you’re sure to find what you need – at the right price and ready for immediate delivery.</p>
                        <div className="pt-8">
                            <button className="w-[50%] md:w-[30%] h-10 bg-myGray shadow-md text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm md:text-sm rounded-md || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                                See our collections
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export function OurTeam() {
    return (
        <>
            <div className="flex flex-col-reverse md:flex-row my-16">
                <div className="w-full md:w-[60%] ">
                    <div className="flex flex-col md:pr-8">
                        <h1 className="text-4xl text-gray-900 dark:text-myGray font-bold pt-8">Our Team</h1>
                        <p className="text-gray-800 pt-8 text-sm font-light dark:text-myGray ">We carry tested and trusted top luggage, handbags, accessories, kids collections, and more. With a wide variety of brands, thousands of products, and customer-generated ratings and reviews, we are committed to helping our customers find the best travel bags and accessories at the right price. We pride ourselves on having the knowledge and experience to help our customers choose the very best in our product catalog.</p>
                        <div className="pt-8">
                            <button className="w-[50%] md:w-[30%] h-10 bg-gray-900 dark:bg-myGray shadow-md text-myGray dark:text-gray-800 hover:bg-gold hover:text-gray-800 dark:hover:bg-gold dark:hover:text-myGray font-normal py-1 md:py-[6px] px-2 md:px-4 border-gray-200 text-sm md:text-sm rounded-md || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300">
                                Get in touch
                            </button>
                        </div>
                    </div>
                </div>

                <div className="w-full md:w-[40%] ">
                    <div className="h-72 rounded-md shadow-sm bg-center bg-cover" style={{ backgroundImage: `url(${'https://res.cloudinary.com/semms-luxury/image/upload/v1644629909/semms%20luxury/team_qczqkn.jpg'})` }} />
                </div>
            </div>
        </>
    )
}