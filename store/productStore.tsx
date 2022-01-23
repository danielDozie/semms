import create from 'zustand'
import { PRODUCTS } from '../graphql/queries';
import { client } from '../utils/apolloClient';


interface ProductStore {
    setProducts: () => void;
    products: any[]
}

export const useProductStore = create<ProductStore>(set => ({
    products: [],
    setProducts: async () => {
        const {data} = await client.query({
            query: PRODUCTS
          });
        set({products: data.products.edges})
    }
}))