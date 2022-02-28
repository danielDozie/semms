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

export const CUSTOMER_ASSOCIATE_CHECKOUT = gql`
mutation checkoutCustomerAssociateV2($checkoutId: ID!, $customerAccessToken: String!) {
  checkoutCustomerAssociateV2(checkoutId: $checkoutId, customerAccessToken: $customerAccessToken) {
    checkout {
      id
    }
    checkoutUserErrors {
      code
      message
      field
    }
    customer {
      id
    }
  }
}
`;