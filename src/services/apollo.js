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
      authorization: 'Bearer bb939c837dfe3ea9da9cdd52a6f16693fd54d3a5',
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
