import create from 'zustand'
import { persist } from 'zustand/middleware'

interface AccessToken {
    accessToken: string
    expiresAt: string
    setAccessToken: (accessToken: string) => void
    setExpiresAt: (expiresAt: string) => void
}

export const useCustomerStore = create<AccessToken>(persist(
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