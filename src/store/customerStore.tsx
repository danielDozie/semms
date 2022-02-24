import create from 'zustand'
import { persist } from 'zustand/middleware'

interface Customer {
    accessToken: string
    expiresAt: string
    setAccessToken: (accessToken: string) => void
    setExpiresAt: (expiresAt: string) => void
}

interface CustomerDetails {
    customer: any,
    setCustomer: (customer: {}) => void
}

export const useCustomerStore = create<Customer>(persist(
    set => ({
        accessToken: '',
        expiresAt: '',
        setAccessToken: (accessToken: string) => set({
            accessToken: accessToken
        }),
        setExpiresAt: (expiresAt: string) => set({
            expiresAt: expiresAt
        })
    }),
    {
        name: 'customerAccessToken',
        getStorage: () => localStorage,
    }
))

export const useCustomerDetailsStore = create<CustomerDetails>(set => ({
    customer: {},
    setCustomer: (customer: any) => set({
        customer: customer
    })
}))