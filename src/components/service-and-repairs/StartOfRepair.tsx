import React from 'react'

export const StartOfRepair = () => {
    return (
        <>
            <div className="pt-8 pb-4">
                <h1 className="text-gray-900 text-3xl font-bold dark:text-myGray">Start Your Repair</h1>
            </div>
            <div className="text-sm font-light text-gray-800 dark:text-myGray">
                <p>To initiate a repair, scroll above and log into your <b>semmslux.com</b> account. A “Request a Repair” button will appear above. It links to an online form for you to complete. After completion, you will receive an email confirmation along with detailed shipping instructions.
                
                </p>
                <p className="py-4">
                You can also bring your item into your local SEMMS retail store where our store associates will offer a preliminary assessment of the damage. Some repairs may be made in store, but anything extensive will require the item to be shipped to the SEMMS repair facility.
                </p>
            </div>
        </>
    )
}
