import React from 'react'
import {AddressForm} from './AddressForm'

export default function Settings():JSX.Element {
    return (
        <>
            <div className="w-full rounded shadow-md h-54 bg-myGray dark:bg-gray-900 ">
                <div className="p-4 md:p-8">
                    <h1 className="text-xl font-semibold text-gray-800 dark:text-myGray">
                        Account settings
                    </h1>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Manage your default address</p>
                </div>
                <AddressForm />
            </div>
        </>
    )
}
