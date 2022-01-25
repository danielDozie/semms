import { GetStaticPaths } from 'next'
import React, { useEffect } from 'react'
import Image from "next/image";
import { PRODUCTS as products } from '../../src/graphql/queries'
import { client } from '../../src/utils/apolloClient'


export default function Index({ product }: any) {
    console.log(product.node.variants.edges[0].node.title)

    return (
        <div className="w-full flex">
            <div className="flex flex-col-reverse md:flex-row mx-auto py-16 relative">
                
                <div className="w-[100%] md:w-3/5 md:block flex-col h-full mr-8 hidden">
                    <div className="min-w-full justify-center items-center overflow-auto no-scrollbar relative">
                        {product.node.images.edges.map((image: any) =>
                            <div className="overflow-auto static p-8" key={image.node.id}>
                                <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} />
                            </div>
                        )}
                    </div>
                </div>
                <div className="md:w-2/5 flex flex-col mx-auto">
                    <div className="mx-4 relative md:fixed bg-white dark:bg-black">
                        <div className="mt-16">
                            <h1 className="text-sm font-light text-gray-400 uppercase pt-1 pb-2">{product.node.vendor}<span className="text-gold text-xl font-bold">.</span> </h1>
                            <h1 className="text-2xl font-regular dark:text-myGray text-gray-800">{product.node.title}</h1>
                            <p className="text-[15px] font-light text-gray-800 dark:text-myGray py-2">${product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.maxVariantPrice.currencyCode}</p>

                            <div className="w-full max-h-36 md:hidden">
                                {product.node.images.edges.map((image: any) =>
                                    <div className="overflow-auto static p-8" key={image.node.id}>
                                        <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} />
                                    </div>
                                )}
                            </div>
                            <div>
                                <p className="text-gray-800 dark:text-myGray text-[12px] pt-2">Size</p>
                                <div className="flex flex-row ">
                                    {product.node.variants.edges.map((variant: any) => <div className="badge badge-outline badge-xs md:badge-sm mt-1 font-regular text-gray-800 dark:text-myGray text-[12px] p-3 mr-4 cursor-pointer">{variant.node.title}</div>
                                    )}
                                </div>
                            </div>

                            <div className="my-4">
                                <h1 className="text-gray-800 dark:text-myGray text-[12px] pt-2">Description</h1>
                                <p className="text-gray-800 dark:text-myGray font-light text-[15px] pt-1">{product.node.description}</p>
                            </div>

                            <div className="my-4 mr-4">
                                <button className="w-full h-10 border border-gray-800 dark:border-myGray text-gray-900 dark:text-myGray font-regular text-sm py-2 px-4 mt-4">Add to Cart</button>
                            </div>



                            <div className="my-4 mr-4">
                                <h1 className="text-gray-800 dark:text-myGray text-[12px] pt-2">Tags</h1>
                                <div className="flex flex-row">
                                    {product.node.tags.map((tag: any) => <div className="badge badge-xs md:badge-sm mt-1 font-regular text-myGray text-[10px] md:text-[12px] p-3 mr-4">{tag}</div>
                                    )}
                                </div>
                            </div>



                            <div className="collapse w-96 border rounded-box border-base-300 collapse-arrow">
                                <input type="checkbox" />
                                <div className="collapse-title text-xl font-medium">
                                    I open/close with click
                                </div>
                                <div className="collapse-content">
                                    <p>Collapse content reveals with focus. If you add a checkbox, you can control it using checkbox instead of focus. Or you can force-open/force-close using
                                        <span className="badge badge-outline">collapse-open</span> and
                                        <span className="badge badge-outline">collapse-close</span> classes.
                                    </p>
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