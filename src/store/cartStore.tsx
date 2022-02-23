
import create from 'zustand'
import { persist, devtools } from "zustand/middleware"

interface CartStore {
    lineItems: {}[],
    addToCart: (lineItems: []) => void,
    productCount: number,
}

export const useCartStore = create<CartStore>(persist(devtools(
    set => ({
        lineItems: [],
        addToCart: (lineItem: []) => {
            set((state: { lineItems: {}[] }) => ({
                lineItems: [...state.lineItems, lineItem]
            }))
        },
        productCount: 0,
        setProductCount: (count: number) => {
            set((state: { productCount: number }) => ({
                productCount: state.productCount = count
            }))
        },
        
        removeItem: (id: any) => {
            set((state: { lineItems: any }) => ({
                lineItems: state.lineItems.filter((item: { id: any }) => item.id !== id)
            }))
        }
    })
),
    {
        name: "cart-storage", // name of item in the storage (must be unique)
        getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }

))