import { FiSearch, FiUser } from 'react-icons/fi'
import { CgShoppingBag } from 'react-icons/cg'
import { HiMenuAlt2, HiX } from 'react-icons/hi'
import Link from 'next/link'
import useMobileNav, { useLoginStore } from '../../store/store';
import { useCart } from '../../store/store';
import Cart from './Cart';
import { useEffect, useState } from 'react';
import Head from 'next/head';
import { useCartStore } from '../../store/cartStore';
import _ from 'lodash';
import { motion, AnimatePresence } from "framer-motion";
import { mobileMenuAnimation } from "./commonAnimation";
/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {

  const productCount = useCartStore(state => state.productCount)
  const [hasProducts, setHasProducts] = useState(false)
  const isMobileMenu = useMobileNav(state => state.isMobileMenu);
  const toggleMobileMenu = useMobileNav(state => state.toggleMobileMenu);
  const isCart = useCart((state: { isCart: any; }) => state.isCart);
  const toggleCart = useCart((state: { toggleCart: any; }) => state.toggleCart);
  const isLoginForm = useLoginStore(state => state.isLoginForm);
  const toggleLoginForm = useLoginStore(state => state.toggleLoginForm);

  
  //hide the cart icon if there are no products in the cart
  useEffect(() => {
    if (productCount === 0) {
      setHasProducts(false)
    } else {
      setHasProducts(true)
    }
  }, [productCount])

  //Disable scroll when menu is open
  useEffect(() => {
    if (isMobileMenu) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isMobileMenu]);

  //Disable scroll when cart is open
  useEffect(() => {
    if (isCart) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'visible';
    }
  }, [isCart]);

  const toggleMenu = () => {
    if (isCart) {
      toggleCart()
    }
    toggleMobileMenu()
  }

  const cartToggle = () => {
    if (isMobileMenu) {
      toggleMobileMenu()
    }
    toggleCart()
  }

  useEffect(() => {
    if(isLoginForm){
      document.body.style.overflow = 'hidden';
    }else{
      document.body.style.overflow = 'visible';
    }
  },[isLoginForm])
          
  
  return (
    <>
      <Head>
        <title>{process.env.SiteTitle}</title>
      </Head>
      {/* desktop header */}
      <div className="container max-w-7xl fixed z-20 hidden  bg-white dark:bg-black md:block mx-auto">
        <div className="flex justify-between h-10 px-16 py-12 mx-auto">
          <div className="-mt-1">
            {/* logo */}
            <Link href={`/`}>
              <img src="/image/semmsluxuries.svg" alt="logo" className="ml-2 -mt-2 cursor-pointer" width="125" />
            </Link>
          </div>
          {/* menu */}
          <div className="mx-auto">
            <div>
              <ul className="flex uppercase">
                {menuItem.map(menu =>
                  <li className="mr-6" key={menu.id}>
                    <div className="text-sm font-normal leading-none text-gold">
                      <Link href={menu.link}>
                        {menu.title}
                      </Link>
                    </div>
                  </li>
                )}
              </ul>
            </div>
          </div>
          {/* cart elements */}
          <div className="-mt-1">
            <span className="text-sm font-normal leading-none cursor-pointer text-gold">
              <FiSearch size={23} className="inline-block mr-6" />
            </span>
            <span className="text-sm font-normal leading-none cursor-pointer text-gold" onClick={toggleLoginForm}>
              <FiUser size={23} className="inline-block mr-6" />
            </span>
            <span className="text-sm font-normal leading-none cursor-pointer text-gold">
              <CgShoppingBag size={23} className="inline-block mr-2" onClick={cartToggle} />
              <span className={`${hasProducts ? '' : 'hidden'} h-4 w-4 bg-gold absolute rounded-full text-center -ml-4`}>
                <span className="font-light text-[10px] text-myGray dark:text-black">{productCount}</span>
              </span>
            </span>
          </div>
        </div>
        <Cart isCart={isCart} cartToggle={cartToggle} />
      </div>


      {/* mobile header */}
      <AnimatePresence>
        {isMobileMenu && (
          <motion.div initial="hide" animate="overlay" exit="exitOverlay" variants={mobileMenuAnimation} className={`${isMobileMenu ? 'flex' : 'hidden'} z-35 w-full h-screen fixed bg-gray-900/80 md:hidden overflow-hidden`} onClick={toggleMenu} />
        )}
      </AnimatePresence>
      <div className="z-20 flex flex-auto mx-auto px-4 pt-4 pb-8 fixed h-[4em] w-full bg-white dark:bg-black justify-between md:hidden">
        <div className="cursor-pointer text-gold" onClick={toggleMenu}>
          {isMobileMenu ? <HiX size={25} /> : <HiMenuAlt2 size={25} />}
        </div>
        <div>
          <Link href="/" passHref>
              <img src="/image/semmsluxuries.svg" alt="logo" className="cursor-pointer" width="120" />
          </Link>
        </div>
        <div>
          <div className="text-sm font-normal leading-none cursor-pointer text-gold">
            <CgShoppingBag size={24} className="inline-block" onClick={cartToggle} />
            <span className={`${hasProducts ? '' : 'hidden'} h-4 w-4 bg-gold absolute rounded-full text-center -ml-2 mt-3`}>
              <span className="font-light text-[10px] text-myGray dark:text-black">{productCount}</span>
            </span>
          </div>
        </div>
      </div>
      <MobileMenu isMobileMenu={isMobileMenu} />
      <Cart isCart={isCart} cartToggle={cartToggle} />
    </>
  );
}


//Mobile menu
export function MobileMenu({ isMobileMenu }: any) {
  const toggleMobileMenu = useMobileNav(state => state.toggleMobileMenu);
  const toggleLoginForm = useLoginStore(state => state.toggleLoginForm)

  return (
    <div>
      <AnimatePresence>
        {isMobileMenu && (<>
          <motion.div initial="hide" animate="show" exit="exit" variants={mobileMenuAnimation} className={`${isMobileMenu ? 'flex' : 'hidden'} z-20 flex-wrap w-[80%] h-screen fixed bg-white dark:bg-black mt-[3.8em] md:hidden`}>
            <div className="mt-[4em] mx-8 overflow-auto">
              <div className="py-4">
                <div className="flex pb-4 gap-x-2">
                  <h1 className="my-4 text-lg font-normal text-gray-800 dark:text-gray-300">Hello Guest</h1>
                  <div >
                    <div className="h-5 w-5 mt-5 rounded-full bg-gradient-to-r from-yellow-800 to-gold" />
                  </div>
                </div>
                <p className="text-sm font-normal leading-none text-gray-800 dark:text-gray-300">Let&apos;s get you started already</p>
              </div>
              <div className="my-4">
                {/* <input type="text" className="w-full p-2 text-gray-800 border-2 rounded-md border-gold text-sm font-light" id="search" placeholder="Search for products" /> */}
                <div className="relative text-myGray dark:text-gray-900 focus-within:text-gray-400">
                  <input type="search" name="search" className="py-2 text-sm text-white bg-gray-900 dark:bg-myGray rounded-md pl-4 focus:outline-none dark:focus:bg-white dark:focus:text-gray-900 focus:text-myGray w-full" placeholder="Search products" />
                  <span className="absolute inset-y-0 right-0 flex items-center pr-2">
                    <button type="submit" className="p-1 focus:outline-none focus:shadow-outline">
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" className="w-6 h-6"><path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </button>
                  </span>
                </div>
              </div>
              <div className="my-4">
                <ul className="flex flex-col">
                  {menuItem.map(menu =>
                    <li className="my-4" key={menu.id} onClick={toggleMobileMenu}>
                      <div className="text-md font-light leading-none text-gray-800 dark:text-gray-300 hover:underline underline-offset-4 decoration-2 decoration-gold">
                        <Link href={menu.link}>
                          {menu.title}
                        </Link>
                      </div>
                    </li>
                  )}
                </ul>
              </div>

              <div className="flex mt-12 font-semibold text-gray-800 uppercase text-sm gap-x-4 dark:text-gray-300">
                <div onClick={toggleLoginForm}>
                  <Link href="#">
                    Login
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    Register
                  </Link>

                </div>
              </div>
            </div>
          </motion.div>
        </>)}
      </AnimatePresence>
    </div>
  )
}



//Menu items
const menuItem = [
  {
    id: 1,
    title: 'Home',
    link: '/',
  },
  {
    id: 2,
    title: 'Collections',
    link: '/collections',
  },
  {
    id: 3,
    title: 'Discover',
    link: '/discover',
  },
  {
    id: 4,
    title: 'Story',
    link: '/story',
  },
  {
    id: 6,
    title: 'Contact',
    link: '/contact',
  },
];
