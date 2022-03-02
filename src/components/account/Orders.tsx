import React from 'react'
import { useCustomerDetailsStore } from '../../store/customerStore'
import Moment from 'react-moment';

export const Orders = () => {
  const customer = useCustomerDetailsStore((state) => state.customer)
  console.log("customer:::", customer)
  return (
    <>
      <div className="w-full shadow-md h-54 bg-myGray dark:bg-gray-900 rounded" id="orders">
        <div className="p-4 md:p-8 ">
          <h1 className="text-xl font-semibold dark:text-myGray text-gray-800">
            Order history
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">You haven't placed any orders yet.</p>
        </div>

        <div className="w-[90%] mx-auto my-8">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 no-scrollbar">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Order
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Total
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Payment status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Items
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Delivery option
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium"
                        >
                          Order Status
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200">
                      {customer?.orders?.edges.map((order:any) => (
                        <tr key={order.node.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              {/* <div className="flex-shrink-0 h-10 w-10">
                                <img className="h-10 w-10 rounded-full" src={``} alt="" />
                              </div> */}
                              <div className="">
                                <div className="text-sm font-bold text-gray-800 dark:text-myGray">{order.node.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-normal text-gray-800 dark:text-myGray"><Moment format="MM-DD-YYYY \at HH:mm A" >{order.node.processedAt}</Moment></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-normal text-gray-800 dark:text-myGray">${order.node.totalPriceV2.amount}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm"><div className="text-sm font-normal text-myGray">{order.node.financialStatus === "PAID" ? <p className="bg-green-700 text-center rounded-full text-xs italic">Paid</p> : <p className="bg-gold text-center rounded-full text-xs italic">Pending</p>}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-normal text-gray-800 dark:text-myGray">{order.node.lineItems.edges.map((item: any) => console.log(item.quantity, ) )} Item(s)</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm"><div className="text-sm font-normal text-gray-800 dark:text-myGray">-----</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm"><div className="text-sm font-normal text-myGray ">{order.node.fulfillmentStatus === "UNFULFILLED" ? <p className="px-1 bg-gray-500 text-center rounded-full text-xs italic">Processing</p> : "Fulfilled"}</div>
                          </td>
                          
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Orders


const people = [
  {
    name: 'Jane Cooper',
    title: 'Regional',
    department: 'Optimization',
    role: 'Admin',
    email: 'jane.cooper@example.com',
    image:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60',
  },
  // More people...
]