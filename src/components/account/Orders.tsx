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
  
  const [itemToShow, setItemToShow] = React.useState(customer);
  
  const toggleShowOrderDetails = (id:string) => {
    //using the useState hook to create an object that will keep all the result ids as keys and a boolean value indicating if the content should be shown or not.
    setItemToShow((prevItemToShow: any) => ({ 
      ...prevItemToShow, 
      [id]: !prevItemToShow[id] 
    })
    );
  }
  
  return (
    <>
      <div className="w-full rounded shadow-md h-54 bg-myGray dark:bg-gray-900" id="orders">
        <div className="p-4 md:p-8 ">
          <h1 className="text-xl font-semibold text-gray-800 dark:text-myGray">
            Order history
          </h1>
          <p className="text-sm text-gray-600 dark:text-gray-400">View and manage your orders</p>
        </div>
        <div className="w-[90%] mx-auto my-8">
          <div className="flex flex-col">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8 no-scrollbar">
              <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <div className="overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200 table-auto">
                    <thead className="bg-gold">
                      <tr>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left uppercase"
                        >
                          Order
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left uppercase"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left uppercase"
                        >
                          Payment status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left uppercase"
                        >
                          Fulfillment Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-xs font-medium text-left uppercase"
                        >
                          Total
                        </th>
                      </tr>
                    </thead>
                    <tbody className="">
                      {customer?.map((order: any) => (<>
                        <tr key={order.node.id}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center" onClick={() => toggleShowOrderDetails(order.node.id)} id={order.node.name}>
                              <div className="px-4 py-1 border border-gray-400 shadow-sm cursor-pointer rounded-xl dark:border-myGray">
                                <div className="text-sm font-bold text-gray-800 dark:text-myGray">{order.node.name}</div>
                              </div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-normal text-gray-800 dark:text-myGray"><Moment format="MMM DD, YYYY" withTitle={true}>{order.node.processedAt}</Moment></div>
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap"><div className="text-sm font-normal text-myGray">{order.node.financialStatus === "PAID" ? <p className="text-xs italic text-center bg-green-700 rounded-full">Paid</p> : <p className="text-xs italic text-center rounded-full bg-gold">Pending</p>}</div>
                          </td>
                          <td className="px-6 py-4 text-sm whitespace-nowrap"><div className="text-sm font-normal dark:text-myGray ">{order.node.fulfillmentStatus}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm font-normal text-gray-800 dark:text-myGray">${order.node.totalPriceV2.amount}</div>
                          </td>
                        </tr>
                        {itemToShow[order.node.id] ? 
                        <tr className={`relative`} id={order.node.name}>
                          <th colSpan={5} className="text-gray-800 bg-white rounded-lg dark:text-myGray dark:bg-gray-800">
                            <div className="flex flex-col">
                              <div className="flex justify-start w-full px-8 py-4 mx-auto">
                                <div className="flex-col">
                                  <h1 className="text-sm font-semibold text-left text-gray-800 dark:text-myGray">
                                    Order {order.node.name}
                                  </h1>
                                  <div className="flex gap-x-1">
                                  <p className="py-2 text-xs font-light text-gray-600 dark:text-gray-400">Placed ::</p> 
                                  <Moment format="MMM DD, YYYY hh:mm A" className="py-2 text-xs font-light text-gray-600 dark:text-gray-400">{ order.node.processedAt}</Moment>
                                  </div>
                                </div>
                              </div>

                              <div className="px-8 mb-8">
                                <table className="w-full border divide-y divide-gray-200 table-auto">
                                  <thead>
                                    <tr className={`px-8`}>
                                      <th className="w-1/2 text-xs font-light text-gray-800 dark:text-myGray">Product</th>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray">Size</th>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray">Price</th>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray">Quantity</th>
                                      <th className="text-xs font-light text-gray-800 dark:text-myGray">Total</th>
                                    </tr>
                                  </thead>
                                  <tbody className="w-full">
                                    {order?.node?.lineItems?.edges?.map((item: any) => <>
                                      <tr className="">
                                        <td className="px-2 py-3 text-[12px] italic font-medium text-gray-800 dark:text-myGray" >{item.node.title}</td>
                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">{item?.node?.variant?.selectedOptions[0]?.value}</td>

                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">${item?.node.variant?.priceV2?.amount}</td>

                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">{item?.node?.quantity}</td>

                                        <td className="text-[12px] italic font-normal text-gray-800 dark:text-myGray">${order?.node?.totalPriceV2 ? item?.node?.variant?.priceV2?.amount : ""}</td>
                                      </tr>
                                    </>)}
                                  </tbody>
                                </table>
                              </div>
                            </div>
                          </th>
                        </tr> : null}
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
