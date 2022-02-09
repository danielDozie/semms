import { gql } from '@apollo/client'

export const DATA = gql`
  query {
  SHOP:shop{
    name,
    description
  },
}
`