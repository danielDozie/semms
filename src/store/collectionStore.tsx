import create from 'zustand'
import { COLLECTIONS } from '../graphql/collectionsQuery';
import { client } from '../utils/apolloClient';
import {COLLECTION_STORE} from '../types/index'



export const useCollectionStore = create<COLLECTION_STORE>(set => ({
    collections: [],
    setCollections: async () => {
        const {data} = await client.query({
            query: COLLECTIONS
          });
        set({collections: data.COLLECTIONS.edges})
    }
}))