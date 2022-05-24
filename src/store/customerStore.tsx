import create from 'zustand'
import { persist } from 'zustand/middleware'
import {CUSTOMER, CUSTOMER_DETAILS} from '../types/index'

export const useCustomerStore = create<CUSTOMER>(persist(
    set => ({
        accessToken: '',
        expiresAt: '',
        setAccessToken: (accessToken) => set({
            accessToken: accessToken
        }),
        setExpiresAt: (expiresAt) => set({
            expiresAt: expiresAt
        })
    }),
    {
        name: 'customerAccessToken',
        getStorage: () => localStorage,
    }
))

export const useCustomerDetailsStore = create<CUSTOMER_DETAILS>(set => ({
    customer: {
        defaultAddress: {
            id: '',
        },
        addresses:{
            edges:[]
        },
        orders: {
            edges: [
                {
                    node: {
                    name: '',
                }
            }
            ]
        },
    },
    setCustomer: (customer:any) => set({
        customer: customer
    })
}))