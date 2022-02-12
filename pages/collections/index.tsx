import Head from 'next/head';
import { GetStaticProps } from 'next/types';
import React from 'react';
import Collections from '../../src/components/collections/Collections';
import Breadcrumbs from '../../src/components/common/Breadcrumbs';
import { COLLECTIONS } from '../../src/graphql/collectionsQuery';
import { client } from '../../src/utils/apolloClient';

export default function index({ collections }: any) {

    const title = 'Collections';
    const bg_url = 'https://res.cloudinary.com/semms-luxury/image/upload/v1644438545/semms%20luxury/collection_hg83qk.jpg';

    return (
        <>
            <Head>
                <title>Collections - {process.env.storename}</title>
                <meta name="description" content="Collections" />
                <meta name="keywords" content="Collections" />
            </Head>
            <div className="max-w-7xl mx-auto justify-center items-center h-full pt-24">
                <Breadcrumbs title={title} crumbmenus={crumbmenus} bg_url={bg_url} />
                <Collections collections={collections} />
            </div>
        </>
    )
}

const crumbmenus = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'Collections',
        link: '/collections'
    }
]

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await client.query({
        query: COLLECTIONS
    })
    return {
        props: {
            collections: data.COLLECTIONS.edges
        }
    }
}