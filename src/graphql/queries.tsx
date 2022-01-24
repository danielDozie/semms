import {gql} from '@apollo/client'

export const PRODUCTS = gql `
  query{
  SHOP:shop{
    name,
    description
  },
  PRODUCTS:products (first: 6){
    pageInfo{
      hasNextPage
      hasPreviousPage
    },
    edges{
      node{
        id
        title,
        description
        vendor,
        priceRange{
          minVariantPrice{
            amount
          },
          maxVariantPrice{
            amount
          }
        },
        images(first:10){
          edges{
            node{
            	src
            }
          }
        },
        media(first: 1){
          edges{
            node{
              previewImage{
                src
                altText
              }
            }
          }
        }
        tags
        handle
        variants(first: 5){
          edges{
            node{
              id
              title
              image{
                src
              }
              price
            }
          }
        },
        
      }
    }
  }


}
`