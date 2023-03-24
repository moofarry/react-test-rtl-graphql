
import './App.css';
import { Provider } from 'react-redux';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { store } from './redux/store/store';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Characters } from './Characters';

function App() {
  const client = new ApolloClient({
    uri: 'https://rickandmortyapi.com/graphql',
    cache: new InMemoryCache(),
  });
  return (

<Provider store={store}>
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="*" component={Characters} />
      </Switch>
    </Router>
  </ApolloProvider>
</Provider>

  );
}

export default App;
