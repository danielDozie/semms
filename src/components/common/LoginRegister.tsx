import React from 'react';
import { BiLogInCircle } from 'react-icons/bi';
import { FiUserPlus } from 'react-icons/fi';
import Image from 'next/image'
import { motion } from 'framer-motion';
import { useLoginStore } from '../../store/store';
import { HiX } from 'react-icons/hi';


export default function LoginRegister() {
    const isLoginForm = useLoginStore(state => state.isLoginForm)
    return <>
        <div className={`${isLoginForm ? '' : 'hidden'} container w-full h-screen fixed bg-gray-900/95 z-20`}>
            <LoginForm isLoginForm={isLoginForm} />
        </div>
    </>;
}

export const LoginForm = ({ isLoginForm }: any) => {
    const toggleLoginForm = useLoginStore(state => state.toggleLoginForm)
    return <>
        <motion.div className={`${isLoginForm ? '' : 'hidden'} flex flex-col justify-center items-center h-full`}>
            <div className="w-full max-w-sm">
                <div className="bg-white dark:bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="flex justify-end mb-4 cursor-pointer" onClick={toggleLoginForm}>
                        <span className="text-gray-900 dark:text-myGray"><HiX/></span>
                    </div> 
                    <div className="mb-4 text-center">
                        {/* <h1 className="text-center text-2xl font-bold">Login</h1> */}
                        <Image src="/image/semmsluxuries.svg" width="150px" height="40px" alt="login logo" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-900 dark:text-myGray text-sm font-semibold mb-2">
                            Email
                        </label>
                    </div>
                    <div className="mb-6">
                        <input className="shadow appearance-none border dark:border-gray-600 rounded w-full py-2 px-3 text-gray-700 dark:text-myGray font-light dark:bg-black leading-tight focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900" type="text" placeholder="Email" />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-900 dark:text-myGray  text-sm font-semibold mb-2">
                            Password
                        </label>
                    </div>
                    <div className="mb-6">
                        <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline dark:bg-black dark:focus-within:bg-gray-900 dark:border-gray-600 dark:text-myGray" type="password" placeholder="Password" />
                    </div>
                    <div className="flex items-center justify-between">
                        <h3 className="text-gray-700 text-sm font-light">
                            <a href="#" className="text-gold no-underline hover:underline">
                                Forgot Password?
                            </a>
                        </h3>
                        <button className="bg-gold hover:bg-gold-dark text-white font-normal text-sm py-[6px] px-4 rounded focus:outline-none focus:shadow-outline dark:text-gray-900">
                            Login
                            <BiLogInCircle className="inline-block w-4 h-4 ml-2" />
                        </button>
                    </div>

                </div>
                <div className="bg-gray-900 dark:bg-black text-white text-center py-4 rounded">
                    <div className="flex items-center justify-between mx-4">
                        <h3 className="text-gray-700 text-xs font-light">
                            <a href="#" className="text-gold no-underline hover:underline">
                                Don't have an account?
                            </a>
                        </h3>
                        <button className="bg-gold hover:bg-gold-dark text-gray-900 font-light py-1 px-2 rounded focus:outline-none focus:shadow-outline text-xs">
                            Register
                            <FiUserPlus className="inline-block w-3 h-3 ml-2" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    </>;
};
