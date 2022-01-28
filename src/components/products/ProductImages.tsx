import React, { useEffect } from 'react';
import Image from 'next/image';
import _ from 'lodash';
import { RelatedProducts } from './RelatedProducts';

export const DesktopImages = ({ product }: any) => {
    return (
        <>
            <div className="hidden flex-col max-w-[100%] md:w-3/5 md:flex h-full mr-8 bg-myGray dark:bg-gray-900">
                <div className="h-[full] overflow-auto no-scrollbar">
                    <div className="items-center justify-center min-w-full">
                        {product.node.images.edges.map((image: any) =>
                            <div className="" key={image.node.id}>
                                <div className="static p-24 overflow-auto">
                                    <Image src={image.node.src} alt={product.node.title} width={image.node.width} height={image.node.height} />
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
    return (
        <div className="relative h-[400px] md:hidden overflow-y-auto mt-12 bg-myGray dark:bg-gray-900">
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
    )
};

