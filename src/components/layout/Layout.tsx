import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'
import { Toaster } from 'react-hot-toast';
import LoginRegister from '../common/LoginRegister';

export default function Layout({ children }: any) {
    return (
        <div className="bg-white dark:bg-black transition-all">
            <Header />
            <LoginRegister/>
            <Toaster position="top-right" toastOptions={{
                success: {
                    className: "text-xs font-semibold text-green-500 dark:text-green-300 dark:bg-gray-900 bg-myGray",
                },
                error: {
                    className: "text-xs font-semibold text-red-500 dark:text-red-300 dark:bg-gray-900 bg-myGray",
                },
            }} />
            <main>
                {children}
            </main>
            <Footer />
        </div>)
}
