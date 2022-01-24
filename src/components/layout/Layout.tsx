import React from 'react'
import Footer from '../common/Footer'
import Header from '../common/Header'

export default function Layout({ children }: any) {
    return (
    <div className="bg-white dark:bg-black transition-all">
        <Header />
        <main>
            {children}
        </main>
        <Footer />
    </div>)
}