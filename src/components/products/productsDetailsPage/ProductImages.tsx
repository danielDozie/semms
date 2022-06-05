import React from 'react';
import Image from 'next/image';
import _ from 'lodash';
import { RelatedProducts } from './RelatedProducts';
import { useCartStore } from '../../../store/cartStore';

export const DesktopImages = ({ product }: any) => {
    const selectedOption = useCartStore(state => state.selectedOption)
    const sortedProductImages = _.sortBy(product.node.images.edges, function (item){
        if(selectedOption[0]?.node?.image.src === item.node.src) {
            return item.node.src
        }
    } )
    
    React.useEffect(() => {
        //console.log(selectedOption)
    })
    
    return (
        <>
            <div className="hidden flex-col max-w-[100%] md:w-3/5 md:flex h-full mr-8 bg-myGray dark:bg-gray-900">
                <div className="h-[full] overflow-auto no-scrollbar">
                    <div className="items-center justify-center min-w-full">
                        {sortedProductImages.map((image: any) =>
                            <div className="" key={image.node.id}>
                                <div className="static p-24 overflow-auto">
                                    <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} priority={true} placeholder="blur" blurDataURL={process.env.blurDataURL}/>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                {/* desktop position */}
                <RelatedProducts product={product} /> 
            </div>
        </>
    )
};


export const MobileImages = ({ product }: any) => {
    const selectedOption = useCartStore(state => state.selectedOption)
    const sortedProductImages = _.sortBy(product.node.images.edges, function (item){
        if(selectedOption[0]?.node?.image.src === item.node.src ) {
            return item.node.src
        }
    } )
    
    return (
        <div className="relative h-[400px] md:hidden overflow-y-auto mt-12 bg-myGray dark:bg-gray-900">
            <div className="flex flex-col items-center justify-center overflow-y-auto">
                {sortedProductImages.map((image: any) =>
                    <div className="" key={image.node.id}>
                        <div className="p-8 overflow-auto ">
                            <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} priority={true} placeholder="blur" blurDataURL={process.env.blurDataURL} />
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
};

