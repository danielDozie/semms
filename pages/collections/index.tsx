import Head from 'next/head';
import React from 'react';
import Collections from '../../src/components/collections/Collections';
import Breadcrumbs from '../../src/components/common/Breadcrumbs';

export default function index() {
  return (
      <>
      <Head>
        <title>Collections - {process.env.storename}</title>
        <meta name="description" content="Collections" />
        <meta name="keywords" content="Collections" />
      </Head>
      <div className="max-w-7xl mx-auto justify-center items-center h-full pt-24">
          <Breadcrumbs title={title} crumbmenus={crumbmenus} />
          <Collections banner={banner}/>
        </div>
      
      </>
  )
}

const title = 'Collections'

const crumbmenus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: '/',
        link: ''
    },
    {
        name: 'Collections',
        link: '/collections'
    }
]

const banner = [
    {
        image: 'https://images.unsplash.com/photo-1630148130165-003a3960d70e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80',
        title: 'Bags & Luggages',
        description: 'Explore Collection',
        link: '/discover'
    },
    {
        image: 'https://images.unsplash.com/photo-1529776292731-c2246c65df5a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fGtpZHMlMjBmYXNoaW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Kids Collection',
        description: 'Coming soon',
        link: '',
    },
    {
        image: 'https://images.unsplash.com/photo-1496180727794-817822f65950?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE4fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
        title: 'Home Essentials',
        description: 'Coming soon',
        link: '',
    },

]