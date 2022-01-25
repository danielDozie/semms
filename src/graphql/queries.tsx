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
            currencyCode
          },
          maxVariantPrice{
            amount
            currencyCode
          }
        },
        images(first:10){
          edges{
            node{
              id
            	src
              width
              height
              altText
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
        variants(first: 5, reverse:true){
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