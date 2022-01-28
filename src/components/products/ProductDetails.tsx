import React from 'react'
import { BsPlus, BsPlusSquare } from 'react-icons/bs'
import {motion} from 'framer-motion'
import { AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import Button from '../common/Button';
import { RelatedProducts } from './RelatedProducts';


export function ProductDetails({ product }: any) {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggler = (e:any) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }
const togglerVariants = {
    close: {
        opacity: 0,
        transition: {
            duration: .5,
            ease: "easeInOut",
        }
    },
    open: {
        opacity: 1,
        
        transition: {
            duration: .5,
            ease: "easeInOut",
        }
    },
}

    return (
          <div className="mx-4 md:mx-auto max-w-[100%] md:w-[35%] h-full bg-white md:sticky top-0 dark:bg-black ">
                <div className="mt-16">
                    <h1 className="pt-8 pb-2 text-sm font-light text-gray-400 uppercase">{product.node.vendor}<span className="text-xl font-bold text-gold">.</span> </h1>
                    <h1 className="text-2xl text-gray-800 font-regular dark:text-myGray">{product.node.title}</h1>
                    <p className="text-[15px] font-bold text-gray-800 dark:text-myGray py-4">${product.node.priceRange.minVariantPrice.amount} {product.node.priceRange.maxVariantPrice.currencyCode}</p>

                    <div>
                        <p className="text-gray-800 dark:text-myGray text-[12px] pt-3 font-semibold">Size</p>
                        <div className="flex flex-row ">
                            {product.node.variants.edges.map((variant: any) => <button className="border border-gray-800 dark:border-myGray hover:bg-gray-700 hover:text-myGray hover:dark:bg-myGray py-1 px-4 rounded mt-1 font-light text-gray-800 dark:text-myGray hover:dark:text-gray-800 text-[12px] mr-4">{variant.node.title}</button>
                            )}
                        </div>
                    </div>
                    <div className="my-8 text-center">
                        <Button buttonText="Add to Cart" />
                    </div>
                    <div className="my-4 text-gray-800 dark:text-myGray">
                        <h1 className="text-[12px] pt-4 font-semibold">Description</h1>
                        <p className="font-light text-[12px] pt-1">{product.node.description}</p>
                    </div>
                    <div className="my-4 mr-4">
                        <h1 className="text-gray-800 dark:text-myGray text-[12px] pt-2">Tags</h1>
                        <div className="flex flex-row">
                            {product.node.tags.map((tag: any) => <div className="bg-gray-800 mt-1 font-regular text-myGray text-[10px] md:text-[10px] px-4 py-1 rounded-full mr-4" key={tag}>{tag}</div>
                            )}
                        </div>
                    </div>
                    <div className="my-4 rounded-md border" onClick={toggler}>
                        <div className="flex flex-col">
                            <div className="flex flex-row justify-between cursor-pointer p-2">
                            <h1 className="text-gray-800 font-bold dark:text-myGray text-[11px] ">CARE</h1>
                            <h1 className="text-gray-800 font-bold dark:text-myGray text-[12px]">{isOpen ? <AiOutlineMinusCircle className="text-gray-500 dark:text-myGray" size={15} />: <AiOutlinePlusCircle className="text-gray-500 dark:text-myGray" size={15} />}</h1>
                            </div>
                        <motion.div initial="close" animate={isOpen ? "open" : "close"} variants={togglerVariants} className={`${isOpen ? 'block' : 'hidden'} `}>
                            <p className="text-gray-800 dark:text-myGray text-[12px] pt-1 p-2 my-2">
                            Clean all washable exterior parts (including wheels) with a cleaning rag, soap, and water. Dry everything well. Use a damp cloth to wipe out the inside. Leave the suitcase open for a few hours, to make sure it's completely dry.
                            
                            </p>
                            <p className="text-gray-800 dark:text-myGray text-[12px] pt-1 px-2 mt-2 font-bold">Need Help?</p>
                            <p className="text-gray-800 dark:text-myGray text-[12px] p-2 mb-4 ">
                            If you have any questions, please contact us at <a href="mailto:sales@semmslux.com" className="text-gold">
                                sales@semmslux.com </a>
                            </p>
                            
                        </motion.div>
                        </div>
                    </div>
                </div>
                {/* for mobile position */}
                <RelatedProducts product={product} />
            </div>
    
    )
}