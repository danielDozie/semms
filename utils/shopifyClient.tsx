import Client from 'shopify-buy';


export const client = Client.buildClient({
  storefrontAccessToken: process.env.S_TOKEN,
  domain: process.env.S_DOMAIN,
});
