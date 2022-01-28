import create from 'zustand'
import { DATA } from '../graphql/queries';
import { client } from '../utils/apolloClient';


interface CollectionStore {
    setCollections: () => void;
    collections: any[]
}

export const useCollectionStore = create<CollectionStore>(set => ({
    collections: [],
    setCollections: async () => {
        const {data} = await client.query({
            query: DATA
          });
        set({collections: data.COLLECTIONS.edges})
    }
}))