import Image from "next/image";
import { CgShoppingBag } from "react-icons/cg";
import { HiX } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { cartAnimation } from "./commonAnimation";
import Button from "./Button";
import { useCartStore } from "../../store/cartStore";
import { useEffect } from "react";
import _ from "lodash";
import toast from "react-hot-toast";

//Cart
export default function Cart({ isCart, toggleCart }: any) {
    const lineItems = useCartStore(state => state.lineItems);

    return (
        <>
            <div className="w-full" >
                <AnimatePresence>
                    {
                        isCart && (<>
                            <motion.div initial="hide" animate="overlay" exit="exitOverlay" variants={cartAnimation} className={`${isCart ? 'flex' : 'hidden'} z-35 w-full h-screen fixed bg-gray-900/80 overflow-hidden cursor-crosshair bottom-0`} onClick={toggleCart} />
                            <motion.div initial="hide" animate="show" exit="exit" variants={cartAnimation} className={`${isCart ? 'flex' : 'hidden'} z-20 block w-[80%] md:w-[37%] justify-end right-0 h-full fixed bg-white dark:bg-black mt-[3.5em] md:mt-[6em] bottom-0`}>
                                <div className="w-full h-[100vh] mt-10 md:mt-[1em] mx-8 overflow-auto">
                                    <div className="flex justify-between">
                                        <div className="flex gap-x-2 pb-4">
                                            <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">My Cart</h1>
                                        </div>
                                        <div className="flex flex-row mt-3 text-black dark:text-gray-300" onClick={toggleCart} >
                                            <span className=" text-sm font-light leading-none cursor-pointer">Close</span><HiX size={15} className="cursor-pointer" />
                                        </div>
                                    </div>
                                    {lineItems.length > 0 ? <CartContent /> : <CartEmpty />}
                                </div>
                            </motion.div>
                        </>)
                    }
                </AnimatePresence>
            </div>
        </>)
}




export function CartContent() {
    const lineItems = useCartStore(state => state.lineItems);
    const total = lineItems.map((item:any) => {
        return parseFloat(item.totalPrice)
    })
    const totalPrice = _.sum(total);
    
    return (<>
        {/* item section */}
        <div className="flex flex-col min-h-[50%] max-h-[50%] overflow-y-scroll no-scrollbar">
            <ItemSection />
        </div>
        {/* item section end */}
        <div className="border-b-4 border-black dark:border-myGray" />

        {/* Bottom Section */}
        <div className="pt-8 bottom">
            <div className="flex justify-between text-gray-800 dark:text-myGray font-light text-[15px] mt-2">
                <p>Subtotal</p>
                <p>${totalPrice}</p>
            </div>
            <div className="flex justify-between text-gray-800 dark:text-myGray font-light text-[15px] mt-2">
                <p>Taxes</p>
                <p>Calculated at checkout</p>
            </div>
            <div className="flex justify-between text-gray-800 dark:text-myGray font-light text-[15px] mt-2">
                <p>Shipping</p>
                <p className="font-bold">Options at checkout</p>
            </div>

            <div className="border-b border-gray-800 mt-2 dark:border-myGray" />
            <div className="flex justify-between text-gold font-light text-[15px] mt-2">
                <p className="font-bold">Total</p>
                <p className="font-bold">${totalPrice}</p>
            </div>

            <div className="text-center font-semibold uppercase mt-4 text-sm">
                <Button buttonText="Proceed to Checkout" />
            </div>
        </div>
        {/* Bottom Section End */}
    </>);
}


export function ItemSection() {
    const lineItems = useCartStore(state => state.lineItems);
    const removeItem = useCartStore(state => state.removeItem);
    //const productCount = useCartStore(state => state.productCount);
    const setProductCount = useCartStore(state => state.setProductCount);

    const totalCount = lineItems.map((item:any) => {
        return parseFloat(item.quantity)
    })
    const count = _.sum(totalCount)


    const removeCartItem = (e:any) => {
        e.preventDefault();
        const id =  e.currentTarget.id
        removeItem(id);
        toast.success(`Item removed from cart.`) 
 
        lineItems.length === 0 < 1 ? setProductCount(0) : setProductCount(count)

    }    
    useEffect(() =>{
        setProductCount(count);
        },[lineItems, count])
    
    
    return (<>
        {lineItems.map((product: any) =>
            <>
                <div className="flex flex-col md:flex-row justify-between mt-8" key={product.id} id={product.id}>
                    <div className="flex gap-x-4">
                        <div className="min-w-[65px] min-h-[65px] fit">
                        <Image src={product.image.src} alt="product_image" className="rounded-md bg-gray-800 dark:bg-myGray" height="65px" width="65px" />
                        </div>
                        <div className="flex flex-col gap-y-1">
                            <div className="w-[80%]">
                            <h1 className="text-[10px] md:text-[12px] font-semibold text-gray-800 dark:text-gray-300">{product.name}</h1>
                            </div>
                            <div className="flex">
                                <p className="text-[12px] md:text-[14px] mr-2 font-light text-gray-800 dark:text-gray-300">Size</p>
                                <div className="mt-1  font-regular dark:text-gray-800 text-[10px] bg-gray-900 dark:bg-myGray text-myGray rounded-full px-1">{product.title}</div>
                            </div>
                        </div>
                    </div>
                    <div className="-mt-2 md:mt-0">
                        <p className="text-[12px] ml-[70%] md:ml-0 md:text-[14px] font-semibold text-gold">${product.totalPrice}</p>
                    </div>
                </div>

                <div className="flex flex-row justify-between my-4">
                    <div className="flex">
                        <button className="flex h-8 w-10 mx-auto items-center text-center justify-center text-sm mr-4 border border-gray-300 rounded-sm" id={product.id} onClick={removeCartItem}>
                            <MdClose className="text-gray-900 dark:text-myGray" size="14" />
                        </button>
                    </div>

                    <div className="flex flex-row">
                        <div className="flex h-8 border border-gray-300 mx-auto items-center text-center justify-center text-sm text-gray-800 rounded-sm mr-2">
                            <input type="text" className="w-full text-gray-800 dark:text-myGray p-1 bg-white dark:bg-black " value={product.quantity} placeholder="" disabled />
                        </div>
                        <button className="flex h-8 w-10 border border-gray-300 mx-auto items-center text-center justify-center text-sm rounded-sm mr-1" onClick={()=> product.quantity--}>
                            <AiOutlineMinus className="text-gray-900 dark:text-myGray" size="14" />
                        </button>
                        <button className="flex h-8 w-10 border border-gray-300 mx-auto items-center text-center justify-center text-sm rounded-sm" onClick={()=> product.quantity + 1}>
                            <FiPlus className="text-gray-900 dark:text-myGray" size="14" />
                        </button>
                    </div>
                </div>
                <div className="border-b border-gray-300 pt-4 dark:border-gray-600" />
            </>)}</>)
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

