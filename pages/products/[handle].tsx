import React from 'react'
import { GetStaticPaths } from 'next'
import { DATA as products } from '../../src/graphql/queries'
import { client } from '../../src/utils/apolloClient'
import {DesktopImages, MobileImages } from '../../src/components/products/ProductImages';
import {ProductDetails} from '../../src/components/products/ProductDetails';


export default function Index({ product }: any) {
    
    return (<>
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
        fallback: false
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
        }
    }
}