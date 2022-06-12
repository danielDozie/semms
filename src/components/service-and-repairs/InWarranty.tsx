import React from 'react'

export const InWarranty = () => {
    return (
        <>
            <div className="pt-8 pb-4">
                <h1 className="text-gray-900 text-3xl font-bold dark:text-myGray">In Warranty Products</h1>
            </div>
            <div className="text-sm font-light text-gray-800 dark:text-myGray">
                <p>SEMMS products deemed to be in warranty are eligible for complimentary repairs.
If the product is more than one year old and in warranty, you are only responsible for the cost of shipping the product to the SEMMS repair facility. If the product is less than a year old, you will be reimbursed for the cost of shipping the item to our repair facility. Return shipping costs are complimentary for in warranty repairs.

                </p>
                <p className="py-4">
                Some items cannot be repaired, and in those rare instances we are happy to offer you a replacement. Should that product no longer be available, you can choose a similar style. If that style is more than the cost of the original bag, you will be responsible for the remaining balance. If the style costs less, you will receive a gift card for the difference.
                </p>
            </div>
        </>
    )
}
