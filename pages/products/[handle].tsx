import React from 'react'
import { GetStaticPaths } from 'next'
import { PRODUCTS as products } from '../../src/graphql/productsQuery'
import { client } from '../../src/utils/apolloClient'
import { DesktopImages, MobileImages } from '../../src/components/products/ProductImages';
import { ProductDetails } from '../../src/components/products/ProductDetails';
import Head from 'next/head';


export default function Index({ product }: any) {   
    return (<>
        <Head>
            <title>{product.node.title} - {process.env.storename}</title>
        </Head>
        <div className="container flex flex-col md:flex-row w-full h-full mx-auto">
            <DesktopImages product={product} />
            <MobileImages product={product} />
            <ProductDetails product={product} />
        </div>
    </>
    )
}


export const getStaticPaths: GetStaticPaths = async () => {
    const { data } = await client.query({
        query: products
    })
    const allProducts = data.PRODUCTS.edges
    const paths = allProducts.map((product: { node: { handle: string } }) => ({
        params: {
            handle: product.node.handle
        }
    }))
    return {
        paths,
        fallback: 'blocking'
    }
}

export const getStaticProps = async ({ params }: any) => {
    const { data } = await client.query({
        query: products
    })
    const allProducts = data.PRODUCTS.edges
    const product = allProducts.find((product: { node: { handle: string } }) => product.node.handle === params.handle)
    return {
        props: {
            product: product
        },
        revalidate: 60
    }
}