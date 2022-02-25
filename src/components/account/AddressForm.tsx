import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { FaPaperPlane } from 'react-icons/fa'
import { AddressFormInput } from '../Types';
import { COUNTRIES } from './CountryList'

export default function AddressForm() {
    const { register, formState: { errors }, handleSubmit } = useForm<AddressFormInput>();
    const onSubmit: SubmitHandler<AddressFormInput> = data => alert(JSON.stringify(data));

    return (
        <>
            <div className="flex flex-col w-full md:w-3/5 mx-auto" id="addressForm">
                <div className="mt-8">
                    <div
                        className={`
            } flex flex-col justify-center items-center h-full`}
                    >
                        <div className="w-full max-w-full">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="px-4 md:px-8 pb-8 mb-4 rounded">
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
                                                    type="email"
                                                    placeholder="Last name"
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

                                                />

                                            </div>
                                        </div>

                                        {/* COuntry */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="city"
                                                    className="block mb-2 text-xs font-light text-gray-900 dark:text-myGray"
                                                >
                                                    Country/region
                                                </label>
                                            </div>
                                            <div className="mb-6">
                                                <select className="w-full px-3 py-2 font-light leading-tight text-gray-700 border rounded shadow appearance-none dark:border-gray-600 dark:text-myGray dark:bg-black focus:outline-none focus:shadow-outline dark:focus-within:bg-gray-900 text-sm">
                                                    <option value="">---</option>
                                                    {
                                                        COUNTRIES.map((country) =>
                                                            <option value={country.name} key={country.code}>{country.name}</option>
                                                        )
                                                    }

                                                </select>

                                            </div>
                                        </div>
                                        {/* Postal Code */}
                                        <div className="w-full">
                                            <div className="mb-2">
                                                <label
                                                    htmlFor="postalCode"
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

                                                />

                                            </div>
                                        </div>
                                        {/* ///// */}
                                    </div>
                                    <div className="flex items-center justify-start py-4">
                                        <button
                                            type="submit"
                                            className="bg-gray-900 dark:bg-gold hover:bg-gold-dark text-white font-normal text-sm px-4 py-2 rounded focus:outline-none focus:shadow-outline dark:text-gray-900 || transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-105 duration-300"
                                        >
                                            Save settings
                                        </button>
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
