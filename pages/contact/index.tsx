import Head from 'next/head'
import React from 'react'
import Breadcrumbs from '../../src/components/common/Breadcrumbs'
import GoogleMap from '../../src/components/common/Map'
import ContactBanner from '../../src/components/contact/ContactBanner'
import ContactForm from '../../src/components/contact/ContactForm'

export default function index() {
    return (
        <>
            <Head>
                <title>Contact - {process.env.storename}</title>
                <meta name="description" content="Contact" />
                <meta name="keywords" content="Contact" />
            </Head>
            <div className="items-center justify-center h-full pt-24 mx-auto w-full">
                <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
            </div>

            <div className="w-full mx-auto ">
            <div className="flex flex-col md:flex-row w-100">
                <GoogleMap />
                <ContactForm />
            </div>
            <div className="w-[80%] mx-auto">
                <ContactBanner />
            </div>
            </div>
        </>
    )
}

const title = 'Contact Us'
const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1644509999/semms%20luxury/coll_ssarep.jpg'
const crumbmenus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Contact',
        link: '/contact'
    }
]
