import React from 'react';
import {ApolloProvider} from 'react-apollo';

import Routes from './routes';
import client from './services/apollo';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Routes />
    </ApolloProvider>
  );
};

export default App;
