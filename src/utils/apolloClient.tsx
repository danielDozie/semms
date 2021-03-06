import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
  } from "@apollo/client";

import { setContext } from "@apollo/client/link/context";

const httpLink = createHttpLink({ uri: 'https://checkout.semmslux.com/api/graphql'});

const middlewareLink = setContext(() => ({
  headers: {
    'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_SHOPIFY_TOKEN,
    'Content-Type': 'application/json',
  }
}))

export const client = new ApolloClient({
  link: middlewareLink.concat(httpLink),
  cache: new InMemoryCache(),
})
