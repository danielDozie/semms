
import create from 'zustand'
import { persist, devtools } from "zustand/middleware"

interface CartStore {
    lineItems: any,
    addToCart:any
    productCount: any,
    setProductCount: any
    removeItem: any
    selectedOption: any
    setSelectedOption: any
}

export const useCartStore = create<CartStore>(persist(devtools(
    set => ({
        lineItems: [],
        addToCart: (lineItem: []) => {
            set((state: { lineItems: any}) => ({
                lineItems: [...state.lineItems, lineItem]
            }))
        },
        productCount: 0,
        setProductCount: (count: any) => {
            set((state: { productCount: any }) => ({
                productCount: state.productCount = count
            }))
        },
        
        removeItem: (id: any) => {
            set((state: { lineItems: any }) => ({
                lineItems: state.lineItems.filter((item: { id: any }) => item.id !== id)
            }))
        },
        selectedOption: [],
        setSelectedOption: (selectedOption: any) => {
            set((state: { selectedOption: any }) => ({
                selectedOption: state.selectedOption = selectedOption
            }))
        },
    })
),
    {
        name: "cart-storage", // name of item in the storage (must be unique)
        getStorage: () => localStorage, // (optional) by default the 'localStorage' is used
    }

))