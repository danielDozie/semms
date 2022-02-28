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

export const DELETE_CUSTOMER_ACCESS_TOKEN = gql`
mutation customerAccessTokenDelete($customerAccessToken: String!) {
  customerAccessTokenDelete(customerAccessToken: $customerAccessToken) {
    deletedAccessToken
    deletedCustomerAccessTokenId
    userErrors {
      field
      message
    }
  }
}
`


export const CUSTOMER_ADDRESS_CREATE = gql`
mutation customerAddressCreate($address: MailingAddressInput!, $customerAccessToken: String!) {
  customerAddressCreate(address: $address, customerAccessToken: $customerAccessToken) {
    customerAddress {
      id
      firstName
      lastName
      company
      address1
      address2
      city
      country
      zip
      phone
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`;

export const CUSTOMER_ADDRESS_DELETE = gql`
mutation customerAddressDelete($customerAccessToken: String!, $id: ID!) {
  customerAddressDelete(customerAccessToken: $customerAccessToken, id: $id) {
    deletedCustomerAddressId
    customerUserErrors {
      code
      field
      message
    }
  }
}`;


export const CUSTOMER_DEFAULT_ADDRESS_UPDATE = gql`
mutation customerDefaultAddressUpdate($addressId: ID!, $customerAccessToken: String!) {
  customerDefaultAddressUpdate(addressId: $addressId, customerAccessToken: $customerAccessToken) {
    customer {
      id
    }
    customerUserErrors {
      code
      field
      message
    }
  }
}
`;

