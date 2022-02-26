import Link from 'next/link';
import React from 'react'
import useMobileNav, { useAccountCardStoreMobile, useLoginOutStore } from '../../store/store';

export const AccountCardMobile = () => {
  const isMobileMenu = useMobileNav((state) => state.isMobileMenu);
  const toggleMobileMenu = useMobileNav((state) => state.toggleMobileMenu);

  const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
  const isAccountCardMobile = useAccountCardStoreMobile((state) => state.isAccountCardMobile);
  return (
    <>{
      isMobileMenu && <div className={`w-full ${isAccountCardMobile && isLoggedIn ? "flex" : "hidden"} border -mt-4 my-4 rounded-md  mx-auto gap-x-8 px-2 py-2  text-sm font-semibold text-gray-800 dark:text-gold bg-myGray dark:bg-gray-900`}>
      <Link href={'/account#orders'}>
      <h1 onClick={toggleMobileMenu}>Your orders</h1>
      </Link>
      <Link href={'/account#addressForm'}>
      <h1 onClick={toggleMobileMenu}>Account</h1>
      </Link>
    </div>
    }
      
    </>
  )
}
