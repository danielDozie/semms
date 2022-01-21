import Image from "next/image";
import { CgShoppingBag } from "react-icons/cg";
import { HiX } from "react-icons/hi";


//Cart
export default function Cart({isCart, toggleCart}:any) {
    return (
      <div className="w-full" >
        <div className={`${isCart ? 'flex' : 'hidden'} z-35 w-full h-screen fixed bg-black/40 overflow-hidden`} onClick={toggleCart}/>
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
            <div className="flex  flex-col md:flex-row justify-between mt-4">
                <div className="flex gap-x-4">
                    <Image src="/image/redBag.png" alt="product_image" className="rounded-md bg-gray-800 dark:bg-myGray" height="65px" width="65px" />
                    <div className="flex flex-col gap-y-1">
                        <h1 className="text-[18px] font-regular text-gray-800 dark:text-gray-300">Red Lux Luggage</h1>
                        <div className="flex">
                        <p className=" text-[14px] mr-2 font-semibold text-gray-800 dark:text-gray-300">Size</p>
                        <div className="badge badge-outline badge-sm mt-1 font-semibold text-gray-800 dark:text-gray-300">sm</div>
                        </div>
                    </div>
                </div>

                <div className="mt-2 md:mt-0">
                    <p className="text-[20px] ml-[70%] md:ml-0 md:text-[14px] font-semibold text-gray-800 dark:text-gray-300">$149.99</p>
                </div>
            </div>
            {/* <CartEmpty /> */}
        </div>
        </div>
        </div>
    )
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
  