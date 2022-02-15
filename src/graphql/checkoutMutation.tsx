import { gql } from '@apollo/client'


export const CHECKOUT = gql`
  mutation checkout($input: CheckoutCreateInput!) {
      checkoutCreate(input: $input) {
          checkout {
              id
              webUrl
              lineItems(first: 50) {
              edges {
                node {
                  title
                  quantity
                }
              }
            }
          }
        }
      }`