import { gql } from '@apollo/client'

export const CUSTOMER_DETAILS = gql`
    query($customerAccessToken: String!) {
        customer(customerAccessToken: $customerAccessToken){ 
          id
            email
            firstName
            lastName
            phone
						orders(first:10){
              edges{
                node{
                  id
                  lineItems{
                    edges{
                      node{
                        title
                        quantity
                        originalTotalPrice{
                          amount
                        }
                        
                      }
                    }
                  }
                }
              }
            }
        		addresses(first: 5){
              edges{
                node{
                  address1
                  address2
                  name
                  company
                  lastName
                  firstName
                  countryCodeV2
                  province
                  provinceCode
                  zip
                  id
                }
              }
            }
        }
    }
`;