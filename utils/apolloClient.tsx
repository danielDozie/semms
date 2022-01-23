import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
  } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({ uri: 'https://semmslux.myshopify.com/api/graphql'})

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': '412eafb22aea4bcba33ab917051e5be7',
    //'Content-Type': 'application/graphql', // <-- THIS IS AN ISSUE FOR ME: RESOLVED https://stackoverflow.com/questions/57795321/apollo-graphql-client-formatting-requests-improperly?answertab=votes#tab-top
    'Content-Type': 'application/json',
  }
}))

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})