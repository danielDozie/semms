import Image from "next/image";
import { CgShoppingBag } from "react-icons/cg";
import { HiX } from "react-icons/hi";
import { MdClose } from "react-icons/md";
import { FiPlus } from "react-icons/fi";
import { AiOutlineLoading3Quarters, AiOutlineMinus } from "react-icons/ai";
import { motion, AnimatePresence } from "framer-motion";
import { cartAnimation } from "./commonAnimation";
import { useCartStore } from "../../store/cartStore";
import { useEffect, useState } from "react";
import _ from "lodash";
import toast from "react-hot-toast";
import { CHECKOUT, CUSTOMER_ASSOCIATE_CHECKOUT } from "../../graphql/checkoutMutation";
import { useMutation } from "@apollo/client";
import { useCustomerStore } from "../../store/customerStore";
import React from "react";
import router from "next/router";
import { useLoginOutStore, useLoginStore } from "../../store/store";

//Cart
export default function Cart({ isCart, cartToggle }: any) {
  const lineItems = useCartStore((state) => state.lineItems);
  return (
    <>
      <div className="w-full">
        <AnimatePresence>
          {isCart && (
            <>
              <motion.div
                initial="hide"
                animate="overlay"
                exit="exitOverlay"
                variants={cartAnimation}
                className={`${isCart ? "flex" : "hidden"
                  } z-35 w-full h-screen fixed bg-gray-900/80 overflow-hidden cursor-crosshair bottom-0`}
                onClick={cartToggle}
              />
              <motion.div
                initial="hide"
                animate="show"
                exit="exit"
                variants={cartAnimation}
                className={`${isCart ? "flex" : "hidden"
                  } z-20 block w-[80%] md:w-[37%] justify-end right-0 h-full fixed bg-white dark:bg-black mt-[3.5em] md:mt-[6em] bottom-0`}
              >
                <div className="w-full h-[100vh] mt-10 md:mt-[1em] mx-8 overflow-auto">
                  <div className="flex justify-between">
                    <div className="flex pb-4 gap-x-2">
                      <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-300">
                        My Cart
                      </h1>
                    </div>
                    <div
                      className="flex flex-row mt-3 text-black dark:text-gray-300"
                      onClick={cartToggle}
                    >
                      <span className="text-sm font-light leading-none cursor-pointer ">
                        Close
                      </span>
                      <HiX size={15} className="cursor-pointer" />
                    </div>
                  </div>
                  {lineItems.length > 0 ? <CartContent /> : <CartEmpty cartToggle={cartToggle} />}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

//Cart Content
export function CartContent() {
  const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
  const toggleLoginForm = useLoginStore((state) => state.toggleLoginForm);
  const accessToken = useCustomerStore((state) => state.accessToken)
  const lineItems = useCartStore((state) => state.lineItems);
  const total = lineItems.map((item: any) => {
    return parseFloat(item.totalPrice);
  });
  const sum = _.sum(total);
  const totalPrice = (sum).toFixed(2);
  const [checkout, { data, error }]: any = useMutation(CHECKOUT, {
    variables: {
      "input": {
        "lineItems": lineItems.map((item: any) => {
          return {
            "variantId": item.id,
            "quantity": parseInt(item.quantity)
          }
        }),
      }
    }
  });
  error;
  data;

  //scroll instructions
  const [scrollToView, setScrollToView] = useState(false);
  useEffect(() => {
    if (lineItems.length >= 3) {
      setScrollToView(true);
    }
  }, [])
  const scrollView = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    setScrollToView(false);
  }

  //Associate checkout with customer
  const [checkoutCustomerAssociateV2, { data: checkoutCustomerAssociateV2Data, error: checkoutCustomerAssociateV2Error }] = useMutation(CUSTOMER_ASSOCIATE_CHECKOUT, {
    variables: {
      "checkoutId": data?.checkoutCreate.checkout.id,
      "customerAccessToken": accessToken
    }
  });
  checkoutCustomerAssociateV2Error;
  checkoutCustomerAssociateV2Data;

  const proceedToCheckout = () => {
    // if (isLoggedIn) {
    //   checkout();
    //   setProcessing(true);
    // }else{
    //   toast.error("Oops! You need to be logged in to checkout");
    //   setTimeout(() => {
    //     toggleLoginForm();
    //   }, 300)
    // }
    checkout();
    setProcessing(true);
    
  }
  const [processing, setProcessing] = React.useState(false);
  
  
  React.useEffect(() => {
    let mounted = true;
    if (mounted && data) {
      if (data?.checkoutCreate.checkout.id) {
        setTimeout(() => {
          checkoutCustomerAssociateV2();
          router.push(data?.checkoutCreate.checkout?.webUrl)
        }, 2000)
      }
      else {
        setProcessing(false);
        toast.error("Checkout Failed!");
      }
    }
    return () => {
      mounted = false;
    };
  }, [data, checkoutCustomerAssociateV2]);





  return (
    <>
      {/* item section */}
      <div className="flex flex-col min-h-[50%] max-h-[50%] overflow-y-scroll no-scrollbar" onScroll={scrollView}>
        <ItemSection />
      </div>

      <p className={`${scrollToView ? "flex" : "hidden"} absolute bg-gold dark:bg-white dark:text-black text-gray-900 mx-auto text-[10px] right-0 mr-[30%] md:mr-[35%] font-light rounded-full px-2 py-1 text-center top-[54%] md:top-[55%] drop-shadow-xl || motion-safe:animate-bounce `}> Scroll to view more items</p>
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

        <div className="mt-2 border-b border-gray-800 dark:border-myGray" />
        <div className="flex justify-between text-gold font-light text-[15px] mt-2">
          <p className="font-bold">Total</p>
          <p className="font-bold">${totalPrice}</p>
        </div>

        <div className="text-center font-semibold uppercase mt-4 text-sm ?|| transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-101 duration-300" onClick={proceedToCheckout}>
          {processing ? <div className="w-full px-4 py-4 font-light text-white bg-gray-500 rounded-sm "><div className="flex items-center justify-center italic gap-x-2">Processing... <AiOutlineLoading3Quarters size="20" className="animate-spin" /></div> </div> : <div className="w-full px-4 py-4 font-light text-white bg-black rounded-sm cursor-pointer text-md hover:text-myGray hover:bg-gray-800 dark:text-black dark:bg-white hover:dark:bg-myGray">Proceed to checkout</div>}
        </div>
      </div>
      {/* Bottom Section End */}
    </>
  );
}

export function ItemSection() {
  const lineItems = useCartStore((state) => state.lineItems);
  const removeItem = useCartStore((state) => state.removeItem);
  const productCount = useCartStore((state) => state.productCount);
  const setProductCount = useCartStore((state) => state.setProductCount);
  const [isDisabled, setIsDisabled] = useState(false);
  const totalCount = lineItems.map((item: any) => {
    return parseFloat(item.quantity);
  });
  const count = _.sum(totalCount);

  const removeCartItem = (e: any) => {
    const id = e.currentTarget.id;
    e.preventDefault();
    const itemCount: any = lineItems.find((item: any) => item.id === id);
    const removedCount = parseInt(itemCount.quantity);

    if (lineItems.length === 0) {
      setProductCount(0);
    } else {
      setProductCount(productCount - removedCount);
      removeItem(id);
      toast.error(`Item removed from cart`);
    }
  };

  const increaseQuantity = (e: any) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const item: any = lineItems.find((item: any) => item.id === id);
    const newQuantity = parseFloat(item?.quantity) + 1;
    setProductCount(newQuantity);
    item.quantity = newQuantity.toString();
    item.totalPrice = item?.price * newQuantity;

    (item?.id === e.currentTarget.id && newQuantity > 1) ? setIsDisabled(false) : setIsDisabled(true);
  };

  const decreaseQuantity = (e: any) => {
    e.preventDefault();
    const id = e.currentTarget.id;
    const item: any = lineItems.find((item: any) => item.id == id);
    const newQuantity = parseFloat(item.quantity) - 1;
    setProductCount(newQuantity);
    item.quantity = newQuantity.toString();
    item.totalPrice = item?.price * newQuantity;
    if (newQuantity === 0) {
      removeCartItem(e);
      setProductCount(0);
    }
  };

  useEffect(() => {
    setProductCount(count);
  }, [count, productCount]);



  return (
    <>
      {lineItems.map((product: any) => (
        <div key={product.id} id={product.id}>
          <div className="flex flex-col justify-between mt-8 md:flex-row">
            <div className="flex gap-x-4">
              <div className="min-w-[65px] min-h-[65px] fit">
                <Image
                  src={product.image.src}
                  alt="product_image"
                  className="bg-gray-800 rounded-md dark:bg-myGray"
                  height="65px"
                  width="65px"
                />
              </div>
              <div className="flex flex-col gap-y-1">
                <div className="w-[80%]">
                  <h1 className="text-[10px] md:text-[12px] font-semibold text-gray-800 dark:text-gray-300">
                    {product.name}
                  </h1>
                </div>
                <div className="flex">
                  <p className="text-[12px] md:text-[14px] mr-2 font-light text-gray-800 dark:text-gray-300">
                    Size
                  </p>
                  <div className="mt-1  font-regular dark:text-gray-800 text-[10px] bg-gray-900 dark:bg-myGray text-myGray rounded-full px-1">
                    {product.title}
                  </div>
                </div>
              </div>
            </div>
            <div className="-mt-2 md:mt-0">
              <p className="text-[12px] ml-[70%] md:ml-0 md:text-[14px] font-semibold text-gold">
                ${product.totalPrice}
              </p>
            </div>
          </div>

          <div className="flex flex-row justify-between my-4">
            <div className="flex">
              <button
                className="flex items-center justify-center w-10 h-8 mx-auto mr-4 text-sm text-center border border-gray-300 rounded-sm"
                id={product.id}
                onClick={removeCartItem}
              >
                <MdClose className="text-gray-900 dark:text-myGray" size="14" />
              </button>
            </div>

            <div className="flex flex-row">
              <div className="flex items-center justify-center h-8 mx-auto mr-2 text-sm text-center text-gray-800 border border-gray-300 rounded-sm">
                <input
                  type="text"
                  className="w-full p-1 text-gray-800 bg-white dark:text-myGray dark:bg-black "
                  value={product.quantity}
                  placeholder=""
                  disabled
                />
              </div>

              <button
                className={`${isDisabled ? "opacity-50" : ""
                  } flex h-8 w-10 border border-gray-300 mx-auto items-center text-center justify-center text-sm rounded-sm mr-1`}
                id={product.id}
                onClick={decreaseQuantity}
                disabled={isDisabled}
              >
                <AiOutlineMinus
                  className="text-gray-900 dark:text-myGray"
                  size="14"
                />
              </button>

              <button
                className="flex items-center justify-center w-10 h-8 mx-auto text-sm text-center border border-gray-300 rounded-sm"
                id={product.id}
                onClick={increaseQuantity}
              >
                <FiPlus className="text-gray-900 dark:text-myGray" size="14" />
              </button>
            </div>
          </div>
          <div className="pt-4 border-b border-gray-300 dark:border-gray-600" />
        </div>
      ))}
    </>
  );
}

export function CartEmpty({ cartToggle }: any) {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex mt-32 font-semibold bg-black rounded-full text-md gap-x-4 dark:bg-white h-28 w-28">
        <CgShoppingBag
          size="30"
          className="mx-auto my-10 text-myGray dark:text-gray-800 dark:bg-myGray"
        />
      </div>
      <h1 className="mt-8 text-2xl font-semibold text-gray-800 dark:text-myGray">
        Your cart is empty
      </h1>
      <p className="mt-2 text-sm font-light text-center text-gray-500 dark:text-gray-300 text-md">
        Continue shopping to add items to your cart
      </p>
      <p className={`mt-12 text-md text-sm font-bold rounded-sm py-1 px-4 cursor-pointer dark:text-myGray hover:underline underline-offset-4`} onClick={cartToggle}>Continue Shopping</p>
    </div>
  );
}
