import { GetStaticPaths, GetStaticProps } from 'next/types';
import React from 'react';
import { COLLECTIONS } from '../../src/graphql/collectionsQuery';
import { client } from '../../src/utils/apolloClient';

export default function Index({collection}:any) {
    
    console.log(collection)
  return <>
  <div className="">
  
  </div>
  </>;
}

// export const getStaticPaths: GetStaticPaths = async () => {
//     const { data } = await client.query({
//         query: DATA,
//         variables: {
//             collectionId: 'Z2lkOi8vc2hvcGlmeS9Db2xsZWN0aW9uLzMxNjI3MjI5MzI=',
//         },
//     });
//     const paths = () => {
//         params: ({
//            handle: data.COLLECTION_BY_ID.handle
//         })
//     }
//     return {
//         paths,
//         fallback: false,
//     };
// }

export const getStaticProps: GetStaticProps = async () => {
    const { data } = await client.query({
        query: COLLECTIONS,
    });
    return {
        props: {
            collection: data.COLLECTION_BY_ID.edges
        }
    };
}
