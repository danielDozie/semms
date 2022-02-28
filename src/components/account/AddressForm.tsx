import { useMutation } from '@apollo/client';
import React from 'react'
import { CUSTOMER_ADDRESS_DELETE, CUSTOMER_DEFAULT_ADDRESS_UPDATE } from '../../graphql/customerMutation';
import { useCustomerDetailsStore, useCustomerStore } from '../../store/customerStore';
import { BsPlusCircleDotted } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { FormElements } from './FormElements';
import { IADDRESS } from '../Types';
import router from 'next/router';
import { motion } from 'framer-motion';

export const AddressForm = () => {

    const accessToken = useCustomerStore((state) => state.accessToken)
    const customer = useCustomerDetailsStore((state) => state.customer)
    const [addAddress, setAddAddress] = React.useState(false)
    const [customerAddress, setCustomerAddress] = React.useState<[]>()
    const [addressID, setAddressID] = React.useState('')
    const toggleAddress = () => {
        setAddAddress(!addAddress)
    }
    const [updating, setUpdating] = React.useState(false)
    const [deleting, setDeleting] = React.useState(false)

    //address update mutation
    const [customerDefaultAddressUpdate, { error, data }] = useMutation(CUSTOMER_DEFAULT_ADDRESS_UPDATE, {
        variables: {
            "addressId": addressID,
            "customerAccessToken": accessToken
        }
    })

    const updateDefaultAddress = (e: { preventDefault: () => void; currentTarget: { id: string; }; }) => {
        e.preventDefault();
        const id = e.currentTarget.id
        setUpdating(true)
        setAddressID(id)
        const confirmation = window.confirm('Confirm default address change')
        if (confirmation == true) {
            setTimeout(() => {
                customerDefaultAddressUpdate()
                toast.success("Default address change successful", {
                    position: "bottom-right",
                    duration: 3000,
                })
                setUpdating(false)
                router.reload()
            }, 3000)
        }
    }

    //address delete mutation
    const [customerAddressDelete] = useMutation(CUSTOMER_ADDRESS_DELETE, {
        variables: {
            "customerAccessToken": accessToken,
            "id": addressID,
        }
    })
    const deleteAddess = (e: { preventDefault: () => void; currentTarget: { id: string; }; }) => {
        e.preventDefault();
        const id = e.currentTarget.id
        setDeleting(true)
        setAddressID(id)
        const confirmation = window.confirm("Confirm you want to delete this address.");
        if (confirmation == true) {
            setTimeout(() => {
                customerAddressDelete()
                toast.success("Address deleted successfully", {
                    position: "bottom-right",
                    duration: 3000,
                })
                setDeleting(false)
                router.reload()
            }, 3000)
        }
    }
    const defaultAddress = customer?.defaultAddress?.id


    React.useEffect(() => {
        setCustomerAddress(customer?.addresses?.edges)
    }, [customerAddress, defaultAddress])

    return (
        <>
            <div className="flex flex-col w-full md:w-3/5 mx-auto" id="addressForm">
                <div className="mt-8">
                    <div
                        className={`flex flex-col justify-center items-center h-full`}
                    >
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4">
                            {customerAddress?.map((address: IADDRESS) =>
                                <div className="flex w-[270px] mx-auto md:min-w-[300px] h-40 border border-gray-900 dark:border-myGray dark:text-myGray  rounded-md text-gray-800" key={address?.node?.id}>
                                    <div className="flex flex-col justify-center items-center w-full h-full">
                                        <div className="flex flex-col text-xs font-semibold justify-between text-center">
                                            <p className="text-sm text-gold">{address?.node?.name}</p>
                                            <p className="text-xs font-light">{address?.node?.address1}</p>
                                            <p className="text-xs font-light">{address?.node?.city}</p>
                                            <p className="text-xs font-light">{address?.node?.company}</p>
                                            <p className="text-xs font-light">{address?.node?.zip}</p>
                                            <p className="text-xs font-light">{address?.node?.province}</p>
                                            <p className="text-xs font-light">{address?.node?.country}</p>
                                            <p className="text-xs font-bold">{address?.node?.phone}</p>
                                        </div>
                                    </div>
                                    <div className="flex flex-row text-[10px] absolute p-2 drop-shadow-md justify-end gap-x-2">
                                        {address?.node?.id === defaultAddress ? <p className="relative italic font-semibold text-gold">Default</p> : <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} whileHover={{ scale: 1.05 }} className="relative italic font-normal text-myGray px-1 rounded-full bg-gold cursor-pointer" onClick={updateDefaultAddress} id={address?.node?.id}>{updating ? "Updating" : "Make Default"}</motion.p>}
                                        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1.05 }} whileHover={{ scale: 1.1 }} className="bg-gray-500 text-myGray px-1 rounded-lg cursor-pointer" id={address?.node?.id} onClick={deleteAddess}>{address.node.id && deleting ? "Deleting" : "Delete"}</motion.p>
                                    </div>
                                </div>
                            )}
                            <div className="flex w-[270px] md:min-w-[300px] mx-auto h-40 border border-gray-900 dark:border-myGray dark:text-myGray  rounded-md text-gray-800 cursor-pointer" onClick={toggleAddress}>
                                <div className="flex flex-col justify-center items-center w-full h-full">
                                    <div className="flex flex-col text-xs font-semibold text-center py-4">
                                        <BsPlusCircleDotted size="34" className="text-center justify-center item " />
                                    </div>
                                    <div className="flex flex-col text-md font-semibold text-center">
                                        <p className="text-center justify-center item text-gray-600 ">Add Address</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <FormElements addAddress={addAddress} setAddAddress={setAddAddress} />
                    </div>
                </div>
            </div>
        </>
    )
}
