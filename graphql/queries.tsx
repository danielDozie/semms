import {gql} from '@apollo/client'

export const PRODUCTS = gql `
query getProducts{
  products(first: 4) {
    edges {
      node {
        id
        title,
        # media (first: 1){
        #   edges {
        #     node {
        #       previewImage {
        #         url
        #       }
        #       alt
        #     }
        #   }
        # },
        vendor,
        priceRange{
          minVariantPrice{
            amount
          },
          maxVariantPrice{
            amount
          }
        },
      }
    }
  }
}
`