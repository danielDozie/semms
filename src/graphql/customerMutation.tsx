import { gql } from '@apollo/client'

export const CREATE_CUSTOMER = gql`
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
		customer{
      firstName
      lastName
      email
      phone
    },
    customerUserErrors{
      message
    }
  }
}
`;

export const CREATE_CUSTOMER_ACCESS_TOKEN = gql`
mutation customerAccessTokenCreate($input: CustomerAccessTokenCreateInput!) {
  customerAccessTokenCreate(input: $input) {
    customerAccessToken {
      email,
      password
    }
  }
}`;