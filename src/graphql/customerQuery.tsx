import { gql } from "@apollo/client";

export const CUSTOMER_DETAILS = gql`
  query ($customerAccessToken: String!) {
    customer(customerAccessToken: $customerAccessToken) {
      id,
      email,
      firstName,
      lastName,
      phone,
      orders(first: 20) {
        edges {
          node {
            id,
            name,
            totalPriceV2{
            amount,
            currencyCode}
            fulfillmentStatus,
            financialStatus,
            processedAt,
            lineItems(first: 20) {
              edges {
                node {
                  title,
                  quantity,
                }
              }
            }
        }
      }
    },
      addresses(first: 15) {
        edges {
          node {
            address1
            address2
            name
            company
            lastName
            firstName
            country
            province
            city
            zip
            phone
            id
          }
        }
      }
      defaultAddress {
        address1
        address2
        name
        company
        lastName
        firstName
        country
        province
        phone
        city
        zip
        id
      }
    }
  }
`;
