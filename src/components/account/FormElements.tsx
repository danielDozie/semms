import { useMutation } from '@apollo/client'
import router from 'next/router'
import React from 'react'
import { CountryDropdown, RegionDropdown } from 'react-country-region-selector'
import { useForm, SubmitHandler } from 'react-hook-form'
import toast from 'react-hot-toast'
import { AiOutlineLoading3Quarters } from 'react-icons/ai'
import { CUSTOMER_ADDRESS_CREATE } from '../../graphql/customerMutation'
import { useCustomerStore } from '../../store/customerStore'
import { FORM_ADDRESS_INPUT } from '../../types'

export const FormElements = ({addAddress, setAddAddress}: any) => {

    const [formData, setFormData] = React.useState<FORM_ADDRESS_INPUT>()
    const accessToken = useCustomerStore((state) => state.accessToken)
    const { register, formState: { errors }, handleSubmit } = useForm<FORM_ADDRESS_INPUT>();
    const [isLoading, setIsLoading] = React.useState(false);
    const [country, setCountry] = React.useState('')
    const [region, setRegion] = React.useState('')
    
    const selectCountry = (val: string) => {
        setCountry(val)
    }
    const selectRegion = (val: string) => {
        setRegion(val)
    }
    const [customerAddressCreate, { loading, error, data }] = useMutation(CUSTOMER_ADDRESS_CREATE, {
        variables: {
            "address": {
                "address1": formData?.address1,
                "address2": formData?.address2,
                "city": formData?.city,
                "company": formData?.company,
                "country": country,
                "province": region,
                "firstName": formData?.firstname,
                "lastName": formData?.lastname,
                "phone": formData?.phone,
                "zip": formData?.zip
            },
            "customerAccessToken": accessToken,
        }
    })
    const onSubmit: SubmitHandler<FORM_ADDRESS_INPUT> = inputdata => {
        setFormData(inputdata);
        setIsLoading(true);
        setTimeout(() => {
            customerAddressCreate();
            toast.success("Address created successfully", {
                duration: 3000,
            })
            setAddAddress(!addAddress)
            setIsLoading(false);
        }, 3000)

        setTimeout(() => {
            router.reload()
        },4500)
    };
    React.useEffect(() => {
    
    }, [formData]) 
    return (
        <>
            <div className="w-full max-w-full py-8">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={`${addAddress ? "relative" : "hidden"} px-4 md:px-8 pb-8 mb-4 rounded`}>
                        <h1 className="py-4 text-lg font-bold text-gray-800 dark:text-myGray">Address settings</h1>
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                                        type="text"
                                        placeholder="First name"
                                        {...register("firstname")}
                                        required
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                                        type="text"
                                        placeholder="Last name"
                                        {...register("lastname")}
                                        required
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                                        type="text"
                                        placeholder="Address 1"
                                        {...register("address1")}
                                        required
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
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
                                        className="w-full px-3 py-2 text-sm font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900"
                                        type="text"
                                        placeholder="Phone"
                                        {...register("phone")}
                                        required
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
                                    className="flex px-4 py-2 text-sm font-normal text-white bg-gray-400 rounded hover:bg-gold-dark focus:outline-none focus:shadow-outline dark:text-gray-900" disabled
                                >
                                    Processing...  <AiOutlineLoading3Quarters size={12} className="mt-1 ml-3 animate-spin" />
                                </button>)
                            }
                        </div>
                    </div>

                </form>
            </div>
        </>
    )
}
