import create from 'zustand'
import { persist, devtools } from "zustand/middleware"
import {CARTSTORE} from '../types/index'

export const useCartStore = create<CARTSTORE>(persist(devtools(
    set => ({
        lineItems: [],
        addToCart: (lineItem) => {
            set((state: { lineItems: Object[]}) => ({
                lineItems: [...state.lineItems, lineItem]
            }))
        },
        productCount: 0,
        setProductCount: (count) => {
            set((state: { productCount: number }) => ({
                productCount: state.productCount = count
            }))
        },
        removeItem: (id: string) => {
            set((state: { lineItems: any[]}) => ({
                lineItems: state.lineItems.filter((item: { id: string }) => item.id !== id)
            }))
        },
        selectedOption: [],
        setSelectedOption: (selectedOption) => {
            set((state: { selectedOption: Object[] }) => ({
                selectedOption: state.selectedOption = selectedOption
            }))
        },
    })
),
{
    name: "cart-storage", // name of item in the storage (must be unique)
    getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
}
)
)