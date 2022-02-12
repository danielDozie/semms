import Head from 'next/head'
import { useRouter } from 'next/router'
import { GetStaticPaths, GetStaticProps } from 'next/types'
import React, { useRef, useState } from 'react'
import { CollectionPage } from '../../src/components/collections/CollectionPage'
import { CollectionNotFoundPage } from '../../src/components/collections/CollectionNotFoundPage'
import { COLLECTIONS } from '../../src/graphql/collectionsQuery'
import { client } from '../../src/utils/apolloClient'
import { Collections } from '../../src/components/Types'

export default function Index({ collection }: any) {
    const router = useRouter()
    const products = collection.node.products.edges
    const start = 0, end = 6
    const [productsToShow, setProductsToShow] = useState<any[]>(products.slice(start, end))
    const buttonRef = useRef<any>(null)
    
    const productPage = (e: { preventDefault: () => void; currentTarget: { id: any } }) => {
        e.preventDefault();
        const slug = `/products/${e.currentTarget.id}`;
        router.push(slug);
    }
    
    const loadMore = (e: { preventDefault: () => void }) => {
        e.preventDefault();
        const newEnd = end + 6
        setProductsToShow(products.slice(start, newEnd))
        if (products.length < newEnd) {
                buttonRef.current.style.display = 'none'
        }
    }
    return (
        <>
            <Head>
                <title>{collection.node.title} - {process.env.storename}</title>
                <meta name="description" content={collection.node.description} />
                <meta name="keywords" content={collection.node.title} />
            </Head>
            {productsToShow.length > 0 ? 
            <CollectionPage collection={collection} productsToShow={productsToShow} loadMore={loadMore} productPage={productPage} buttonRef={buttonRef} />
            : <CollectionNotFoundPage collection={collection} />} 
        </>
    )
}

export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: COLLECTIONS
    })
    const paths = data.COLLECTIONS.edges.map(({ node }: any) => ({
        params: {
            handle: node.handle
        }
    }))
    return {
        paths,
        fallback: false
    }
}

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
    const { data } = await client.query({
        query: COLLECTIONS
    })
    const allCollections = data.COLLECTIONS.edges
    const collection = allCollections.find(({ node }: any) => node.handle === params.handle)
    return {
        props: {
            collection: collection,

        }
    }
}
