import Image from "next/image";
import { CgShoppingBag } from "react-icons/cg";
import { HiX } from "react-icons/hi";
import {MdClose} from "react-icons/md";
import { FiMinus, FiPlus } from "react-icons/fi";
import {AiOutlineMinus} from "react-icons/ai";
import {motion} from "framer-motion";
import { cartAnimation } from "./commonAnimation";

//Cart
export default function Cart({ isCart, toggleCart }: any) {
    return (
        <>
        <motion.div className="w-full" >
            <div className={`${isCart ? 'flex' : 'hidden'} z-35 w-full h-screen fixed bg-black/40 overflow-hidden`} onClick={toggleCart} />
            <div className={`${isCart ? 'flex' : 'hidden'} z-20 block w-[80%] md:w-[35%] justify-end right-0 h-screen fixed bg-white dark:bg-black mt-[3.5em] md:mt-[6em]`}>
                <div className="w-full h-[100vh] mt-10 md:mt-[1em] mx-8 overflow-auto">
                    <div className="flex justify-between">
                        <div className="flex gap-x-2 pb-4">
                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">My Cart</h1>
                        </div>
                        <div className="flex flex-row mt-3 text-black dark:text-gray-300" onClick={toggleCart} >
                            <span className=" text-sm font-light leading-none cursor-pointer">Close</span><HiX size={15} className="cursor-pointer" />
                        </div>
                    </div>
                    
                    {/* item section */}
                        <div className="flex flex-col max-h-[45%] overflow-y-scroll no-scrollbar">
                        <ItemSection />
                        <ItemSection />
                        <ItemSection />
                        </div>
                    {/* item section end */}
                        <div className="border-b-4 border-black dark:border-myGray"/>
                    
                    {/* Bottom Section */}
                        <div className="pt-1">
                            <div className="flex justify-between text-gray-800 dark:text-myGray font-light text-[15px] mt-2">
                                <p>Subtotal</p>
                                <p>${`289.80`}</p>
                            </div>
                            <div className="flex justify-between text-gray-800 dark:text-myGray font-light text-[15px] mt-2">
                                <p>Taxes</p>
                                <p>Calculated at checkout</p>
                            </div>
                            <div className="flex justify-between text-gray-800 dark:text-myGray font-light text-[15px] mt-2">
                                <p>Shipping</p>
                                <p className="font-bold">Free</p>
                            </div>
                            
                            <div className="border-b border-gray-800 mt-2 dark:border-myGray"/>
                            <div className="flex justify-between text-gold font-light text-[15px] mt-2">
                                <p className="font-bold">Total</p>
                                <p className="font-bold">${`289.80`}</p>
                            </div>
                            
                            <div>
                                <button className="w-full h-10 bg-black dark:bg-myGray text-white dark:text-gray-900 font-semibold text-sm py-2 px-4 mt-4 uppercase">Proceed to Checkout</button>
                            </div>
                        </div>
                    {/* Bottom Section End */}
                    
                    {/* <CartEmpty /> */}
                </div>
            </div>
        </motion.div>
    </>)
}





export function ItemSection(){
    return (<>
    <div className="flex flex-col md:flex-row justify-between mt-8">
                        <div className="flex gap-x-4">
                            <Image src="https://semmslux.com/wp-content/uploads/2021/07/2027-21-RED-20inch-PNG-600x606.png" alt="product_image" className="rounded-md bg-gray-800 dark:bg-myGray" height="65px" width="65px" />
                            <div className="flex flex-col gap-y-1">
                                <h1 className="text-[15px] md:text-[16px] font-regular text-gray-800 dark:text-gray-300">Red Lux Luggage</h1>
                                <div className="flex">
                                    <p className="text-[12px] md:text-[14px] mr-2 font-light text-gray-800 dark:text-gray-300">Size</p>
                                    <div className="badge badge-outline badge-xs md:badge-sm mt-1 font-regular text-gray-800 dark:text-gray-300">sm</div>
                                </div>
                            </div>
                        </div>
                        <div className="-mt-2 md:mt-0">
                            <p className="text-[12px] ml-[70%] md:ml-0 md:text-[14px] font-semibold text-gold">$149.99</p>
                        </div>
                    </div>
                    
                    <div className="flex flex-row justify-between my-4">
                        <div className="flex">
                            <button className="flex h-8 w-10 mx-auto items-center text-center justify-center text-sm mr-4 border border-gray-300 rounded-sm">
                                <MdClose className="text-gray-900 dark:text-myGray" size="14" />
                            </button>
                        </div>
                        
                        <div className="flex flex-row">
                            <div className="flex h-8 border border-gray-300 mx-auto items-center text-center justify-center text-sm text-gray-800 rounded-sm mr-2">
                                <input type="text" className="w-full text-gray-800 dark:text-myGray p-1 bg-white dark:bg-black " value={1} disabled />
                            </div>
                            <button className="flex h-8 w-10 border border-gray-300 mx-auto items-center text-center justify-center text-sm rounded-sm mr-1">
                                <AiOutlineMinus className="text-gray-900 dark:text-myGray" size="14" />
                            </button>
                            <button className="flex h-8 w-10 border border-gray-300 mx-auto items-center text-center justify-center text-sm rounded-sm">
                                <FiPlus className="text-gray-900 dark:text-myGray" size="14" />
                            </button>
                        </div>
                    </div>
                    <div className="border-b border-gray-300 pt-4 dark:border-gray-600" />
    </>)
}

export function CartEmpty() {
    return (
        <div className="flex flex-col justify-center items-center">
            <div className="mt-32 font-semibold text-md gap-x-4 flex bg-black dark:bg-white h-28 w-28 rounded-full">
                <CgShoppingBag size="30" className="my-10 mx-auto text-myGray dark:text-gray-800 dark:bg-myGray" />
            </div>
            <h1 className="mt-8 font-semibold text-2xl text-gray-800 dark:text-myGray">Your cart is empty</h1>
            <p className="text-gray-500 dark:text-gray-300  text-md font-light text-sm mt-2 text-center">Continue shopping to add items to your cart</p>
        </div>
    )
}
