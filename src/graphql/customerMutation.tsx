import { gql } from '@apollo/client'

export const CREATE_CUSTOMER = gql`
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
    customerUserErrors {
      code
      field
      message
    },
		customer{
      firstName
      lastName
      email
      phone
    },
  }
}
`;



export const CREATE_CUSTOMER_ACCESS_TOKEN = gql`
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken {
      accessToken
      expiresAt
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}`;
