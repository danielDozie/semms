import { useState } from 'react';
import { FiSearch } from 'react-icons/fi'
import { CgShoppingBag } from 'react-icons/cg'
import { HiMenuAlt2 , HiX} from 'react-icons/hi'
import Link from 'next/link'
import { FaUserCircle } from 'react-icons/fa';
import useMobileNav from '../../store/store';

/**
 * A client component that specifies the content of the header on the website
 */
export default function Header() {
    const isOpen = useMobileNav(state => state.isOpen);
    const toggle = useMobileNav(state => state.toggle);
  
  return (
    <>
      {/* desktop header */}
      <div className="z-20 fixed w-full backdrop-blur-md hidden md:block">
        <div className="flex justify-between mx-auto px-16 h-10 py-12">
          <div>
            {/* logo */}
            <img src="/image/semmsluxuries.svg" alt="logo" className="-mt-2 ml-2" width="125" />
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
          <div>
            <a href="#" className="text-gold text-sm font-normal leading-none">
              <FiSearch size={20} className="inline-block mr-6" />
            </a>
            <a href="#" className="text-gold text-sm font-normal leading-none">
              <CgShoppingBag size={20} className="inline-block mr-2" />
            </a>
          </div>
        </div>
      </div>
      

      {/* mobilel header */}
      <div className="z-20 flex flex-auto mx-auto px-4 pt-8 pb-8 fixed h-[6em] w-full bg-white dark:bg-black justify-between md:hidden">
        <div className="text-gold cursor-pointer" onClick={toggle}>
          {isOpen ? <HiX size={30} /> : <HiMenuAlt2 size={30} />}
        </div>
        <div>
          <img src="/image/semmsluxuries.svg" alt="logo" className="" width="150" />
        </div>
        <div>
          <a href="#" className="text-gold text-sm font-normal leading-none">
            <CgShoppingBag size={29} className="inline-block" />
          </a>
        </div>
      </div>
      <MobileMenu isOpen={isOpen} />
    </>
  );
}


//Mobile menu
export function MobileMenu({isOpen}:any) {
  const toggle = useMobileNav(state => state.toggle);
  return (
    <div>
      <div className={`${isOpen ? 'flex' : 'hidden'} z-20 flex-wrap w-[90%] h-screen fixed bg-white dark:bg-black mt-[5.5em] md:hidden`}>
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
                <li className="my-4" key={menu.id} onClick={toggle}>
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
