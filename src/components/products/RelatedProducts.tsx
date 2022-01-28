import _ from "lodash";
import { useEffect } from "react";
import { useCollectionStore } from "../../store/collectionStore";
import Image from 'next/image'
import {useRouter} from "next/router";


export function RelatedProducts({ product }: any) {
    const router = useRouter();
    const collection = useCollectionStore(state => state.collections);
    const setCollections = useCollectionStore(state => state.setCollections);

    useEffect(() => {
        setCollections();
    }, []);

    const getProductCollection = collection.filter((item: any) => { //filter through the collection and return the collection that matches the product id
        return item.node.products.edges.some((product: any) => {//using some to check if the product id matches the returned  product id
            return product.node.id === product.node.id
        })
    })
    const getProductsInsideCollection = getProductCollection[0]?.node.products.edges; //get the product inside the collection
    const randomProducts = _.shuffle(getProductsInsideCollection); //shuffle the products inside the collection
    const removeCurrentProduct = randomProducts.filter((item: any) => { //filter the products to remove the current product
        return item.node.id !== product.node.id
    })
    const relatedProducts = removeCurrentProduct.slice(0, 3); //slice the products to get the first 3 products
    return (<>
        <div className="">
            <div className="pt-12 pb-6 md:mx-8">
                <h1 className="text-xl text-gray-800 dark:text-myGray font-semibold">Related Products</h1>
            </div>
            <div className="">
                <div className="grid grid-flow-row grid-cols-2 md:flex md:flex-auto md:mx-8 md:mb-24 mb-8">
                    {relatedProducts.map((product: any) =>
                        <div className="w-full md:w-[300px] max-h-[150px] cursor-pointer mb-24" key={product.node.id} onClick={()=> router.push('/products/'+product.node.handle )}>
                            <div className="bg-myGray dark:bg-gray-900 rounded-lg shadow-lg mr-6">
                                <div className="px-6 py-4">
                                    <div className="font-regular text-center text-xs mb-2 text-gray-800 dark:text-myGray capitalize">{product.node.title}</div>

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
