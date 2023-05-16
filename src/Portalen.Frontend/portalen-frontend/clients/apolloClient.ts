import { ApolloClient, InMemoryCache } from '@apollo/client';

const { CONTENTFUL_SPACE_ID: SPACE_ID, CONTENTFUL_DELIVERY_API_TOKEN: API_KEY} = process.env;
const apolloClient = new ApolloClient({
    uri: `https://graphql.contentful.com/content/v1/spaces/${process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID}` as string,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_CONTENTFUL_DELIVERY_API_TOKEN}`,
    },
    cache: new InMemoryCache(),
  });   

  export default apolloClient;