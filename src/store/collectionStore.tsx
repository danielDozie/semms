import create from 'zustand'
import { COLLECTIONS } from '../graphql/collectionsQuery';
import { client } from '../utils/apolloClient';


interface CollectionStore {
    setCollections: () => void;
    collections: any[]
}

export const useCollectionStore = create<CollectionStore>(set => ({
    collections: [],
    setCollections: async () => {
        const {data} = await client.query({
            query: COLLECTIONS
          });
        set({collections: data.COLLECTIONS.edges})
    }
}))