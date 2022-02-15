import React, { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { AiOutlineMinus, AiOutlineMinusCircle, AiOutlinePlusCircle } from 'react-icons/ai';
import Button from '../common/Button';
import { RelatedProducts } from './RelatedProducts';
import { togglerVariants } from '../common/commonAnimation'
import { FiPlus } from 'react-icons/fi';
import { useProductStore } from '../../store/productStore';
import { useCart } from '../../store/store';
import { useCartStore } from '../../store/cartStore';
import toast from 'react-hot-toast';
import _ from 'lodash';


export function ProductDetails({ product }: any) {
    const [isCare, setIsCare] = useState(false);
    const [isDisabled, setIsDisabled] = useState(false)
    const quantity = useProductStore(state => state.quantity)
    const increaseQuantity = useProductStore(state => state.increaseQuantity)
    const decreaseQuantity = useProductStore(state => state.decreaseQuantity)

    const [variants] = useState(product.node.variants.edges)
    const [variantPrice] = useState(variants[0].node.price)
    const [selectedOption, setSelectedOption] = useState<any[]>([])
    const addToCart = useCartStore(state => state.addToCart)
    const lineItems = useCartStore(state => state.lineItems)
    const isCart = useCart(state => state.isCart)
    const toggleCart = useCart(state => state.toggleCart)

    //adding class to the size option, referencing the id of the button
    const [isActive, setIsActive] = useState({
        id: null,
        isActive: false
    });

    const variantHandler = (e: any) => {
        e.preventDefault();
        const selected = e.currentTarget.innerText

        const options = variants.map((variant: any) => variant)
        const data = options.filter((option: any) => {
            return selected === option.node.title
        },
        )
        const clickedButtonId = e.currentTarget.id
        setSelectedOption(data)
        setIsActive({ id: clickedButtonId, isActive: true })
    }

    //Disable the minus button on the product details page if the quantity is 1
    useEffect(() => {
        if (quantity === 1) {
            setIsDisabled(true)
        } else {
            setIsDisabled(false)
        }
    }, [quantity])

    //Trigger the care section on the product details page
    const careToggler = (e: any) => {
        e.preventDefault();
        setIsCare(!isCare);
    }


    //get cart item & price
    const selectedProduct = selectedOption[0]?.node
    const q = quantity //.toString    //convert to string due to graphql strict type
    const totalPrice = (selectedProduct?.price * quantity).toString() // convert to string due to graphql strict type incase of floating point numbers

    const lineItem = { ...selectedProduct, name: product.node.title, quantity: q, totalPrice: totalPrice }

    const addtoCart = (e: any) => {
        e.preventDefault()

        if (isActive.isActive === false) {
            toast.error('Please select a size');
        }
        else if (lineItems.find((item: { id: any; title: string }) => item.id === lineItem?.id && item.title === lineItem?.title)) {
            toast.error(`Item already in cart`)
        }
        else {
            addToCart(lineItem)
            toast.success(`Item added to your cart`);
            isCart ? toggleCart() : toggleCart()
        }
    }

    const defaultPrice = 149.99 //used as a placeholder for the price of the product before size is selected. 
    //Because price is dependent on the size of the product, the price is set to a default value of 149.99 being the minimum price of the products.
    return (<>
        <div className="mx-4 md:mx-auto max-w-[100%] md:w-[40%] w-full h-full bg-white md:sticky top-0 dark:bg-black px-8">
            <div className="mt-16">
                <h1 className="pt-8 pb-2 text-sm font-light text-gray-400 uppercase">{product.node.vendor}<span className="text-xl font-bold text-gold">.</span> </h1>
                <h1 className="text-2xl text-gray-800 font-regular dark:text-myGray">{product.node.title}</h1>
                <p className="text-[15px] font-bold text-gray-800 dark:text-myGray py-4">${selectedOption[0]?.node.price * quantity ? _.ceil(selectedOption[0]?.node.price * quantity, 2) : defaultPrice * quantity} {product.node.priceRange.maxVariantPrice.currencyCode}</p>

                <div>
                    <p className="text-gray-800 dark:text-myGray text-[12px] pt-3 font-semibold">Size</p>
                    <div className="flex flex-row ">
                        {variants.map((variant: any) => <button className={`${isActive.isActive && isActive.id === variant.node.id ? "bg-gray-900 text-myGray dark:bg-myGray dark:text-gray-900" : ""} border border-gray-800 dark:border-myGray hover:bg-gray-900 hover:text-myGray hover:dark:bg-myGray py-1 px-4 rounded mt-1 font-light text-gray-800 dark:text-myGray hover:dark:text-gray-800 text-[12px] mr-4`} key={variant.node.id} id={variant.node.id} onClick={variantHandler}>{variant.node.title}</button>
                        )}
                    </div>
                </div>

                <div>
                    <p className="text-gray-800 dark:text-myGray text-[12px] pt-6 font-semibold">Quantity</p>
                    <div className="flex flex-row justify-between my-2">
                        <div className="flex flex-row">

                            <button className={` ${isDisabled ? 'opacity-50' : ''} flex h-8 w-10 border border-gray-300 mx-auto items-center text-center justify-center text-sm rounded-sm mr-2`} onClick={decreaseQuantity} disabled={isDisabled}>
                                <AiOutlineMinus className="text-gray-900 dark:text-myGray" size="14" />
                            </button>
                            <div className="flex items-center justify-center h-8 mx-auto mr-2 text-sm text-center text-gray-800 border border-gray-300 rounded-sm">
                                <input type="text" className="w-16 p-1 text-gray-800 bg-white dark:text-myGray dark:bg-black " value={quantity} disabled />
                            </div>
                            <button className="flex items-center justify-center w-10 h-8 mx-auto text-sm text-center border border-gray-300 rounded-sm" onClick={increaseQuantity}>
                                <FiPlus className="text-gray-900 dark:text-myGray" size="14" />
                            </button>
                        </div>
                    </div>
                </div>


                <div className="my-8 text-center" onClick={addtoCart} >
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
                <div className="my-4 border rounded-md" onClick={careToggler}>
                    <div className="flex flex-col">
                        <div className="flex flex-row justify-between p-2 cursor-pointer">
                            <h1 className="text-gray-800 font-bold dark:text-myGray text-[11px] ">CARE</h1>
                            <h1 className="text-gray-800 font-bold dark:text-myGray text-[12px]">{isCare ? <AiOutlineMinusCircle className="text-gray-500 dark:text-myGray" size={15} /> : <AiOutlinePlusCircle className="text-gray-500 dark:text-myGray" size={15} />}</h1>
                        </div>
                        <motion.div initial="close" animate={isCare ? "open" : "close"} variants={togglerVariants} className={`${isCare ? 'block' : 'hidden'} `}>
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
            <div className="md:hidden">
                <RelatedProducts product={product} />
            </div>
        </div>

    </>)
}