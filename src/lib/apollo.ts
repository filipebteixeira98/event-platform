import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4uf8w3p0thf01unc9ox5v47/master',
  cache: new InMemoryCache(),
})
