import Head  from 'next/head'
import React from 'react'
import Breadcrumbs from '../../src/components/common/Breadcrumbs'
import { AboutRepairs } from '../../src/components/service-and-repairs/AboutRepairs'
import { InWarranty } from '../../src/components/service-and-repairs/InWarranty'
import { OutOfWarranty } from '../../src/components/service-and-repairs/OutOfWarranty'
import { StartOfRepair } from '../../src/components/service-and-repairs/StartOfRepair'

export default function index() {
  return (
    <>
      <Head>
        <title>{title} - {process.env.storename}</title>
        <meta name="description" content="Collections" />
        <meta name="keywords" content="Collections" />
      </Head>
      <div className="items-center justify-center h-full pt-24 mx-auto w-full">
        <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
      </div>
      <div className="w-full">
        <div className="w-4/5 mx-auto justify-center mb-12">
          <AboutRepairs />
          <InWarranty />
          <OutOfWarranty />
          <StartOfRepair />
        </div>
      </div>
    </>
  )
}
const title = 'Service & Repairs'
const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1655064672/semms%20luxury/repairs_pczzox.jpg'
const crumbmenus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Service & Repairs',
        link: '/service-and-repairs'
    }
]