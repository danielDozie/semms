import { gql } from '@apollo/client'

export const COLLECTIONS = gql`
query {
  COLLECTIONS: collections(first: 20){
    edges{
      node{
        id
        title
        handle
        description
        image{
          src
        }
        products(first:20){
          edges{
            node{
              id
              title
              handle
              createdAt
              ratings:metafield(namespace: "my_fields", key: "ratings" ){
          value
        },
              priceRange{
                maxVariantPrice{
                  amount
                },
                minVariantPrice{
                  amount
                }
              },
              media(first:1){
                edges{
                  node{
                    previewImage{
                      src,
                      altText,
                      width
                      height
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  }`