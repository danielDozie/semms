import React from 'react'

export const Orders = () => {
  return (
    <>
    <div className="w-full drop-shadow-md h-54 bg-myGray dark:bg-gray-900 rounded" id="orders">
            <div className="p-4 md:p-8 ">
            <h1 className="text-xl font-semibold dark:text-myGray text-gray-800">
              Order history
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-400">You haven't placed any orders yet.</p>
            </div>
          </div>
    </>
  )
}

export default Orders
