import create from 'zustand'
import { DATA } from '../graphql/queries';
import { client } from '../utils/apolloClient';


interface ProductStore {
    increaseQuantity: any;
    decreaseQuantity: any;
    setProducts: () => void;
    products: any[]
    quantity: number
}

export const useProductStore = create<ProductStore>(set => ({
    products: [],
    setProducts: async () => {
        const {data} = await client.query({
            query: DATA
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
