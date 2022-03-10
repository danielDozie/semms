import React from 'react'
import { useCustomerDetailsStore } from '../../store/customerStore'
import Moment from 'react-moment';
import _ from 'lodash';


export const Orders = () => {
  const getCustomer = useCustomerDetailsStore((state) => state.customer)
  //get the array of orders
  const new_customer = getCustomer?.orders?.edges
  //ordering the array of orders in descending order by newest first
  const customer = _.orderBy(new_customer, [function (item) { return item.node.name; }], ['desc']);
  
  const [hidden, setHidden] = React.useState(false);

  return (
    <>
      <div className="w-full shadow-md h-54 bg-myGray dark:bg-gray-900 rounded" id="orders">
        <div className="p-4 md:p-8 ">
          <h1 className="text-xl font-semibold dark:text-myGray text-gray-800">
            Order history
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">View and manage your orders</p>
        </div>

        <div className="w-[90%] mx-auto my-8">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 no-scrollbar">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 table-auto">
                    <thead className="bg-gold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                          Order
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                          Payment status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                          Fulfillment Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium uppercase"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {customer?.map((order: any) => (<>
                        <tr key={order.node.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div className="border rounded-xl px-4 shadow-sm py-1 cursor-pointer border-gray-400 dark:border-myGray" id={order.node.id}>
                                <div className="text-sm font-bold text-gray-800 dark:text-myGray">{order.node.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-normal text-gray-800 dark:text-myGray"><Moment format="MMM DD, YYYY" withTitle={true}>{order.node.processedAt}</Moment></div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm"><div className="text-sm font-normal text-myGray">{order.node.financialStatus === "PAID" ? <p className="bg-green-700 text-center rounded-full text-xs italic">Paid</p> : <p className="bg-gold text-center rounded-full text-xs italic">Pending</p>}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm"><div className="text-sm font-normal dark:text-myGray ">{order.node.fulfillmentStatus}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-normal text-gray-800 dark:text-myGray">${order.node.totalPriceV2.amount}</div>
                          </td>
                        </tr>

                        <tr className={`${hidden ? "hidden" : "relative"}`}>
                          <th colSpan={5} className="text-gray-800 dark:text-myGray bg-white dark:bg-gray-800 rounded-lg">
                            <div className="flex flex-col">
                              <div className="flex  w-full justify-start mx-auto py-4 px-8">
                                <div className="flex-col">
                                  <h1 className="text-sm text-left text-gray-800 dark:text-myGray font-semibold">
                                    Order {order.node.name}
                                  </h1>
                                  <div className="flex gap-x-1">
                                  <p className="text-xs text-gray-600 dark:text-gray-400 py-2 font-light">Placed ::</p> 
                                  <Moment format="MMM DD, YYYY hh:mm A" className="text-xs text-gray-600 dark:text-gray-400 py-2 font-light">{ order.node.processedAt}</Moment>
                                  </div>
                                </div>
                              </div>

                              <div className="mb-8 px-8">
                                <table className="w-full border divide-y divide-gray-200 table-auto">
                                  <thead>
                                    <tr className={`px-8`}>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray w-1/2">Product</th>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray">Size</th>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray">Price</th>
                                      <th className=" text-xs font-light text-gray-800 dark:text-myGray">Quantity</th>
                                      <th className=" text-xs font-light text-gray-800 dark:text-myGray">Total</th>
                                    </tr>
                                  </thead>
                                  <tbody className="w-full">
                                    {order?.node.lineItems.edges.map((item: any, index: any) => <>
                                      <tr className="" key={index}>
                                        <td className="px-2 py-3 text-[12px] italic font-normal text-gray-800 dark:text-myGray" >{item.node.title}</td>
                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">{item.node.variant.selectedOptions[0].value}</td>

                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">${item.node.variant.priceV2.amount}</td>

                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">{item.node.quantity}</td>

                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">${order.node.totalPriceV2 ? item.node.variant.priceV2.amount : ""}</td>
                                      </tr>
                                      
                                    </>)}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </th>
                        </tr>
                      </>))}
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