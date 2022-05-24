import create from 'zustand'
import { PRODUCTS } from '../graphql/productsQuery';
import { client } from '../utils/apolloClient';
import {PRODUCT_DATA} from '../types/index'

export const useProductStore = create<PRODUCT_DATA>(set => ({
    products: [],
    setProducts: async () => {
        const {data} = await client.query({
            query: PRODUCTS
          });
        set({products: data.PRODUCTS.edges})
    },
    //Quantity management
    quantity: 1,
    increaseQuantity: () => {
        set(state => ({quantity: state.quantity + 1}))
       
    },
    decreaseQuantity: () => {
        set(state => ({quantity: state.quantity - 1}));
        
    }
}))
