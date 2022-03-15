import _ from "lodash";
import Image from 'next/image'
import {useRouter} from "next/router";
import { useEffect } from "react";
import { useCollectionStore } from "../../../store/collectionStore";

export function RelatedProducts({ product }: any) {
    const router = useRouter();
    const collection = useCollectionStore(state => state.collections);
    const setCollections = useCollectionStore(state => state.setCollections);

    useEffect(() => {
        setCollections();
    }, []);

    const getProductCollection = collection?.filter((item: any) => { //filter through all the collections and return the collection that matches the product id
        return item.node.products.edges.some((product: any) => {//using some to check if the product id matches the returned  product id
            return product.node.id === product.node.id
        })
    })
    const getProductsInsideCollection = getProductCollection[0]?.node.products.edges; //get the product inside the collection

    
    const removeCurrentProduct = getProductsInsideCollection?.filter((item: any) => { //filter the products to remove the current product
        return item.node.id !== product.node.id
    })
    const relatedProducts = removeCurrentProduct?.slice(0, 3); //slice the products to get the first 3 products
    
    return (<>
        <div className="">
            <div className="pt-12 pb-6 md:mx-8">
                <h1 className="text-xl font-semibold text-gray-800 dark:text-myGray">Related Products</h1>
            </div>
            <div className="">
                <div className="grid grid-flow-row grid-cols-2 gap-4 mb-8 md:gap-0 md:flex md:flex-auto md:mx-8 md:mb-24">
                    {relatedProducts?.map((product: any) =>
                        <div className="w-full md:w-[300px] min-h-full cursor-pointer" key={product.node.id} onClick={() => window.location.href = '/products/' + product.node.handle}>
                            <div className="rounded-lg shadow-lg bg-myGray md:bg-white dark:bg-gray-900 md:dark:bg-black md:mr-6">
                                <div className="px-6 py-4">
                                    <div className="font-light text-center text-sm md:text-[10px] mb-2 text-gray-500 dark:text-myGray">{product.node.title}</div>
                                    <Image className="p-8" src={product.node.media.edges[0]?.node.previewImage.src} width={product.node.media.edges[0]?.node.previewImage.width} height={product.node.media.edges[0]?.node.previewImage.height} alt={product.node.media.edges[0]?.node.previewImage.altText} />
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </>);
}
