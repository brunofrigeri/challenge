import {ApolloClient} from 'apollo-client';
import {HttpLink} from 'apollo-link-http';
import {InMemoryCache} from 'apollo-cache-inmemory';
import {ApolloLink} from 'apollo-link';

const httpLink = new HttpLink({
  uri: 'https://api.github.com/graphql',
});

let middlewareLink = new ApolloLink((operation, forward) => {
  operation.setContext({
    headers: {
      authorization: 'Bearer 6a4d72588c8675b4448fac278e6e5948d6d03265',
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
