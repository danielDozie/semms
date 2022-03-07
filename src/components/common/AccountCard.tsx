import React from 'react'
import Link from 'next/link'
import { RiLogoutCircleRFill } from "react-icons/ri";
import { useAccountCardStore, useLoginOutStore } from '../../store/store';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import {useRouter} from 'next/router'


export const AccountCard = () => {
    const isAccountCard = useAccountCardStore((state) => state.isAccountCard);
    const router = useRouter()
    const setIsLoggedIn = useLoginOutStore((state) => state.setIsLoggedIn);
    const toggleAccountCard = useAccountCardStore((state) => state.toggleAccountCard);
    const [loading, setLoading] = React.useState(false);
    
    const logout = (e: { preventDefault: () => void; }) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            localStorage.removeItem("customerAccessToken");
            setIsLoggedIn(false);
            toggleAccountCard();
            toast.success("Logged out successfully",{
                duration: 3000,
            });
            setLoading(false);
            router.push("/");
        }, 2000);
      }

    return (
        <>
            <div className={`${isAccountCard ? 'flex' : 'hidden'} `} onMouseLeave={toggleAccountCard}> 
                <div className="inline-block w-[20%] right-10 h-[160px] fixed bg-white dark:bg-gray-900 rounded-b-md drop-shadow-md">
                    <div className="flex flex-col px-4 py-4">
                        <h1 className="font-bold text-gold text-sm pb-2">Account</h1>
                        <ul className="font-normal">
                            <li className="text-gray-800 dark:text-myGray text-[14px] my-2">
                                <Link href="/account#orders">
                                    Your orders
                                </Link>
                            </li>
                            <li className="text-gray-800 dark:text-myGray text-[14px]">
                                <Link href="/account#addressForm">
                                    Account settings
                                </Link>
                            </li>
                        </ul>
                        {/* Divider */}
                        <div className="border-b-2 pt-4" />
                        <div onClick={logout}>   
                        {loading ? (<>
                            <div className="flex">
                                <h1 className="font-bold text-gray-800 dark:text-myGray my-2 text-sm pb-2 italic">Logging out...</h1> <AiOutlineLoading3Quarters size={14} className="text-gray-800 dark:text-myGray mt-[11px] ml-1 animate-spin" />
                            </div>
                        </>) : (<>
                            <div className="flex">
                                <h1 className="font-bold text-gray-800 dark:text-myGray my-2 text-sm pb-2 cursor-pointer">Logout</h1> <RiLogoutCircleRFill size={15} className="text-gray-800 dark:text-myGray mt-[11px] ml-1" />
                            </div></>)}
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    )
}
