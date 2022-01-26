import { GetStaticPaths } from 'next'
import React, { useEffect } from 'react'
import Image from "next/image";
import { PRODUCTS as products } from '../../src/graphql/queries'
import { client } from '../../src/utils/apolloClient'


export default function Index({ product }: any) {
    
    return (
        <div className="flex w-full">
            <div className="relative flex flex-col py-16 mx-auto md:flex-row">

                <div className="w-[100%] md:w-3/5 md:block flex-col h-full mr-8 hidden">
                    <div className="relative items-center justify-center min-w-full overflow-auto no-scrollbar">
                        {product.node.images.edges.map((image: any) =>
                        <div className="" key={image.node.id}>
                            <div className="static p-8 overflow-auto">
                                <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} />
                            </div>
                        </div>
                        )}
                    </div>
                </div>

                {/* Mobile Only Image*/}
                <div className="relative h-[400px] md:hidden overflow-y-auto">
                    <div className="flex flex-col items-center justify-center overflow-y-auto">

                        {product.node.images.edges.map((image: any) =>
                        <div className="" key={image.node.id}>
                            <div className="p-8 overflow-auto ">
                                <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} />
                            </div>
                        </div>
                        )}
                    </div>
                </div>
                {/* Mobile Only Image end*/}

                <div className="flex flex-col mx-auto md:w-2/5">
                    <div className="relative mx-4 bg-white md:fixed dark:bg-black">
                        <div className="mt-16">
                            <h1 className="pt-1 pb-2 text-sm font-light text-gray-400 uppercase">{product.node.vendor}<span className="text-xl font-bold text-gold">.</span> </h1>
                            <h1 className="text-2xl text-gray-800 font-regular dark:text-myGray">{product.node.title}</h1>
                            <p className="text-[15px] font-light text-gray-800 dark:text-myGray py-2">${product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.maxVariantPrice.currencyCode}</p>

                            <div>
                                <p className="text-gray-800 dark:text-myGray text-[12px] pt-2">Size</p>
                                <div className="flex flex-row ">
                                    {product.node.variants.edges.map((variant: any) => <div className="badge badge-outline badge-xs md:badge-sm mt-1 font-regular text-gray-800 dark:text-myGray text-[12px] p-3 mr-4 cursor-pointer">{variant.node.title}</div>
                                    )}
                                </div>
                            </div>

                            <div className="my-4 text-gray-800 dark:text-myGray">
                                <h1 className="text-[12px] pt-2">Description</h1>
                                <p className="font-light text-[15px] pt-1">{product.node.description}</p>
                            </div>

                            <div className="my-4 mr-4">
                                <button className="w-full h-10 px-4 py-2 mt-4 text-sm text-white bg-black dark:text-gray-800 dark:bg-myGray font-regular">Add to Cart</button>
                            </div>
                            <div className="my-4 mr-4">
                                <h1 className="text-gray-800 dark:text-myGray text-[12px] pt-2">Tags</h1>
                                <div className="flex flex-row">
                                    {product.node.tags.map((tag: any) => <div className="badge badge-xs md:badge-sm mt-1 font-regular text-myGray text-[10px] md:text-[12px] p-3 mr-4" key={tag}>{tag}</div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
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