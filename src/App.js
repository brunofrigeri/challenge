import React from 'react';
import {ApolloProvider} from 'react-apollo';
import {Provider} from 'react-redux';
import Routes from './routes';
import client from './services/apollo';
import store from './store';

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <Routes />
      </Provider>
    </ApolloProvider>
  );
};

export default App;
