import { gql } from '@apollo/client'

export const CREATE_CUSTOMER = gql`
mutation customerCreate($input: CustomerCreateInput!) {
  customerCreate(input: $input) {
		customer{
      firstName
      lastName
      email
      phone
      password
    },
    customerUserErrors{
      message
    }
  }
}
`;