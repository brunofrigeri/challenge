import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';
import {PRIVATE_KEY} from 'react-native-dotenv';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

let middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: `Bearer ${PRIVATE_KEY}`,
    },
  });
  return forward(operation);
});
const link = middlewareLink.concat(httpLink);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

export default client;
