import React from 'react'
import { useAccountCardStoreMobile, useLoginOutStore } from '../../store/store';

export const AccountCardMobile = () => {
    const isLoggedIn = useLoginOutStore((state) => state.isLoggedIn);
    const isAccountCardMobile = useAccountCardStoreMobile((state) => state.isAccountCardMobile);
  return (
    <>
    <div className={`w-full ${isAccountCardMobile && isLoggedIn ? "flex" : "hidden"} border -mt-4 my-4 rounded-md  mx-auto gap-x-8 px-2 py-2  text-sm font-semibold text-gray-800 dark:text-gold bg-myGray dark:bg-gray-900`}>
                      <h1>My orders</h1>
                      <h1>Account</h1>
                  </div>
    </>
  )
}
