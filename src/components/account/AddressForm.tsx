import { useMutation } from '@apollo/client';
import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { CUSTOMER_ADDRESS_CREATE, CUSTOMER_ADDRESS_DELETE } from '../../graphql/customerMutation';
import { useCustomerDetailsStore, useCustomerStore } from '../../store/customerStore';
import { AddressFormInput } from '../Types';
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector';
import { BsPlusCircleDotted } from 'react-icons/bs';
import toast from 'react-hot-toast';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import router from 'next/router';

export default function AddressForm() {
    const [formData, setFormData] = React.useState<AddressFormInput>()
    const accessToken = useCustomerStore((state) => state.accessToken)
    const customer = useCustomerDetailsStore((state) => state.customer)
    const [addAddress, setAddAddress] = React.useState(false)
    const { register, formState: { errors }, handleSubmit } = useForm<AddressFormInput>();
    const [isLoading, setIsLoading] = React.useState(false);
    const [country, setCountry] = React.useState('')
    const [region, setRegion] = React.useState('')

    const selectCountry = (val: string) => {
        setCountry(val)
    }

    const selectRegion = (val: string) => {
        setRegion(val)
    }
    const [id, setId] = React.useState('')
    
    const [customerAddressCreate, { loading, error, data }] = useMutation(CUSTOMER_ADDRESS_CREATE, {
        variables: {
            "address": {
                "address1": formData?.address1,
                "address2": formData?.address2,
                "city": formData?.city,
                "company": formData?.company,
                "country": formData?.country,
                "firstName": formData?.firstname,
                "lastName": formData?.lastname,
                "phone": formData?.phone,
                "zip": formData?.zip
            },
            "customerAccessToken": accessToken,
        }
    })
    const onSubmit: SubmitHandler<AddressFormInput> = inputdata => {
        setFormData(inputdata);
        setIsLoading(true);
        setTimeout(() => {
            customerAddressCreate();
            toast.success("Address created successfully", {
                position: "bottom-right",
                duration: 3000,
            })
            setAddAddress(!addAddress)
            setIsLoading(false);
            router.reload()
        }, 2000)
    };


    React.useEffect(() => {
        console.log("customer: ", customer)
    }, [formData, customer])

    const toggleAddress = () => {
        setAddAddress(!addAddress)
    }
    
    // const [customerAddressDelete, { loading, error, data }] = useMutation(CUSTOMER_ADDRESS_DELETE, {
    //     variables: {
    //         "customerAccessToken": accessToken,
    //         "id": id
    //     }
    // })

    const deleteAddess = (event: any) => {
        setId(event.target.id)

        // confirm("Are you sure you want to delete this address?")
        setTimeout(() => {
            console.log("IDD:", id)
        },2000)
        
        // customerAddressDelete()
        // router.reload()
    
    }

    return (
        <>
            <div className="flex flex-col w-full md:w-3/5 mx-auto" id="addressForm">
                <div className="mt-8">
                    <div
                        className={`
            } flex flex-col justify-center items-center h-full`}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2  gap-4">
                            {customer?.addresses?.edges?.map((address: any, index: any) =>
                                <>
                                    <div className="flex min-w-[300px] h-40 border border-gray-900 dark:border-myGray dark:text-myGray  rounded-md text-gray-800" key={index}>
                                        <div className="flex flex-col justify-center items-center w-full h-full">
                                            <div className="flex flex-col text-xs font-semibold justify-between text-center">
                                                <p className="text-sm text-gold">{address?.node?.name}</p>
                                                <p className="text-xs font-light">{address?.node?.address1}</p>
                                                <p className="text-xs font-light">{address?.node?.address2}</p>
                                                <p className="text-xs font-light">{address?.node?.company}</p>
                                                <p className="text-xs font-light">{address?.node?.zip}</p>
                                                <p className="text-xs font-light">{address?.node?.state}</p>
                                                <p className="text-xs font-light">{address?.node?.country}</p>
                                            </div>
                                        
                                        </div>
                                        <div className="flex flex-row text-[10px] absolute p-2 drop-shadow-md justify-end gap-x-2" id={address?.node?.id}>
                {/* <p className="bg-gray-400 text-myGray px-1 rounded-lg">Make Default</p> */}
                <p className="bg-gray-500 text-myGray px-1 rounded-lg cursor-pointer" onClick={deleteAddess}>Delete</p>
            </div>
                                    </div>
                                
                                </>
                            
                            )}
                            <div className="flex w-[300px] h-40 border border-gray-900 dark:border-myGray dark:text-myGray  rounded-md text-gray-800 cursor-pointer" onClick={toggleAddress}>
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
                        <div className="w-full max-w-full py-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className={`${addAddress ? "relative" : "hidden"} px-4 md:px-8 pb-8 mb-4 rounded`}>
                                    <h1 className="py-4 font-bold text-lg text-gray-800 dark:text-myGray">Address settings</h1>
                                    <div className="flex gap-x-4">
                                        <div className="w-1/2">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="firstname"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    First name
                                                </label>
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="First name"
                                                    {...register("firstname")}
                                                />
                                            </div>
                                        </div>


                                        <div className="w-1/2">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="lastname"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Last name
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="Last name"
                                                    {...register("lastname")}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex flex-col gap-y-4">
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="company"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Company
                                                </label>
                                            </div>
                                            <div className="mb-4">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="company"
                                                    {...register("company")}
                                                />

                                            </div>
                                        </div>
                                        {/* Address 1 */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="address1"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Address 1
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="Address 1"
                                                    {...register("address1")}
                                                />
                                            </div>
                                        </div>
                                        {/* Address 2 */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="address2"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Address 2
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="Address 2"
                                                    {...register("address2")}
                                                />

                                            </div>
                                        </div>
                                        {/* City */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="city"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    City
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="City"
                                                    {...register("city")}
                                                />

                                            </div>
                                        </div>

                                        {/* COuntry */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="country"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Country/region
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <CountryDropdown
                                                    value={country}
                                                    onChange={(val) => selectCountry(val)} classes="w-[60%] px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm" />
                                                <RegionDropdown
                                                    country={country}
                                                    value={region}
                                                    onChange={(val) => selectRegion(val)} classes="w-2/5 px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm" />
                                            </div>
                                        </div>
                                        {/* Postal Code */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="zip"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Postal code
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="Postal code"
                                                    {...register("zip")}
                                                />

                                            </div>
                                        </div>
                                        {/* Phone */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="phone"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Phone
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <input
                                                    className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm"
                                                    type="text"
                                                    placeholder="Phone"
                                                    {...register("zip")}
                                                />

                                            </div>
                                        </div>
                                        {/* ///// */}
                                    </div>
                                    <div className="flex items-center justify-start py-4">
                                        {!isLoading ? (
                                            <button
                                                type="submit"
                                                className="bg-gray-900 dark:bg-gold hover:bg-gold-dark text-white font-normal text-sm px-4 py-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-900 || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
                                            >
                                                Save settings
                                            </button>) : (<button
                                                className="flex bg-gray-400 dark:bg-gold hover:bg-gold-dark text-white font-normal text-sm px-4 py-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-900" disabled
                                            >
                                                Processing...  <AiOutlineLoading3Quarters size={12} className="animate-spin  mt-1 ml-3" />
                                            </button>)
                                        }
                                    </div>
                                </div>
                            
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


// export function DeleteButton({ accessToken, id }: any) {
    
//     const [customerAddressDelete, { loading, error, data }] = useMutation(CUSTOMER_ADDRESS_DELETE, {
//         variables: {
//             "customerAccessToken": accessToken,
//             "id": id
//         }
//     })

//     const deleteAddess = (event: any) => {
//         // confirm("Are you sure you want to delete this address?")
//         console.log("IDD:", id)
//         // customerAddressDelete()
//         // router.reload()
    
//     }

//     return (
//         <>
//             <div className="flex flex-row text-[10px] absolute p-2 drop-shadow-md justify-end gap-x-2" id={id}>
//                 {/* <p className="bg-gray-400 text-myGray px-1 rounded-lg">Make Default</p> */}
//                 <p className="bg-gray-500 text-myGray px-1 rounded-lg cursor-pointer" onClick={deleteAddess}>{id}</p>
//             </div>
//         </>
//     )
// }
