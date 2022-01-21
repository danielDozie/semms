import { FiSearch } from 'react-icons/fi'
import { CgShoppingBag } from 'react-icons/cg'
import { HiMenuAlt2 , HiX} from 'react-icons/hi'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa';
import useMobileNav from '../../store/store';
import {useCart} from '../../store/store';
import Cart from './Cart';
import { useEffect, useState } from 'react';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {
    const isMobileMenu = useMobileNav(state => state.isMobileMenu);
    const toggleMobileMenu = useMobileNav(state => state.toggleMobileMenu);
    const isCart = useCart((state: { isCart: any; }) => state.isCart);
    const toggleCart = useCart((state: { toggleCart: any; }) => state.toggleCart);
    
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
  
  return (
    <>
      {/* desktop header */}
      <div className="z-20 fixed w-full bg-white dark:bg-black hidden md:block">
        <div className="flex justify-between mx-auto px-16 h-10 py-12">
          <div className="-mt-1">
            {/* logo */}
            <Link href={`/`}>
            <img src="/image/semmsluxuries.svg" alt="logo" className="-mt-2 ml-2" width="125" />
            </Link>
          </div>
          {/* menu */}
          <div className="mx-auto">
            <div>
              <ul className="flex uppercase">
                {menuItem.map(menu =>
                  <li className="mr-6" key={menu.id}>
                    <div className="text-gold text-sm font-normal leading-none">
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
            <span className="text-gold text-sm font-normal leading-none cursor-pointer">
              <FiSearch size={23} className="inline-block mr-6" />
            </span>
            <span className="text-gold text-sm font-normal leading-none cursor-pointer">
              <CgShoppingBag size={23} className="inline-block mr-2" onClick={toggleCart}/>
            </span>
          </div>
        </div>
          <Cart isCart={isCart} toggleCart={toggleCart} />
      </div>
      
      
      {/* mobilel header */}
      <div className={`${isMobileMenu ? 'flex' : 'hidden'} z-35 w-full h-screen fixed bg-black/40 md:hidden overflow-hidden`} onClick={toggleMobileMenu}/>
      <div className="z-20 flex flex-auto mx-auto px-4 pt-4 pb-8 fixed h-[4em] w-full bg-white dark:bg-black justify-between md:hidden">
        <div className="text-gold cursor-pointer" onClick={toggleMobileMenu}>
          {isMobileMenu ? <HiX size={25} /> : <HiMenuAlt2 size={25} />}
        </div>
        <div>
          <img src="/image/semmsluxuries.svg" alt="logo" className="" width="120" />
        </div>
        <div>
          <div className="text-gold text-sm font-normal leading-none cursor-pointer">
            <CgShoppingBag size={24} className="inline-block" onClick={toggleCart} />
          </div>
        </div>
        
      </div>
      <MobileMenu isMobileMenu={isMobileMenu} />
      <Cart isCart={isCart} toggleCart={toggleCart} />
    </>
  );
}


//Mobile menu
export function MobileMenu({isMobileMenu}:any) {
  const toggleMobileMenu = useMobileNav(state => state.toggleMobileMenu);
  return (
    <div>
      <div className={`${isMobileMenu ? 'flex' : 'hidden'} z-20 flex-wrap w-[80%] h-screen fixed bg-white dark:bg-black mt-[3.8em] md:hidden`}>
        <div className="mt-[4em] mx-8 overflow-auto">
          <div className="py-4">
            <div className="flex gap-x-2 pb-4">
              <h1 className="text-2xl font-light text-gray-800 dark:text-gray-300 my-4">Hello Guest</h1>
              <div >
                <FaUserCircle className="btn btn-circle btn-sm mt-4 bg-gradient-to-r from-gray-800 to-gray-400 hover:text-black" />
              </div>
            </div>
            <p className="dark:text-gray-300 text-gray-800 text-sm font-normal leading-none">Let&apos;s get you started already</p>
          </div>
          <div className="my-4">
            <input type="text" className="w-full py-2 px-4 border-2 border-gold text-gray-800 rounded-lg" placeholder="Search for products" />
          </div>
          <div className="my-4">
            <ul className="flex flex-col">
              {menuItem.map(menu =>
                <li className="my-4" key={menu.id} onClick={toggleMobileMenu}>
                  <div className="dark:text-gray-300 text-gray-800 text-lg font-light leading-none">
                    <Link href={menu.link}>
                      {menu.title}
                    </Link> 
                  </div>
                </li>
              )}
            </ul>
          </div>

          <div className="mt-12 font-semibold text-md gap-x-4 flex uppercase text-gray-800 dark:text-gray-300">
            <div>
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
      </div>
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
