import React from 'react'
import {AddressForm} from './AddressForm'

export default function Settings () {
    return (
        <>
            <div className="w-full shadow-md h-54 bg-myGray dark:bg-gray-900 rounded ">
                <div className="p-4 md:p-8">
                    <h1 className="text-xl font-semibold dark:text-myGray text-gray-800">
                        Account settings
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Manage your default address</p>
                </div>
                <AddressForm />
            </div>
        </>
    )
}