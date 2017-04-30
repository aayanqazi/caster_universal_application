import React from 'react';
import { Provider } from 'react-redux';
import Store from './src/Store';
import RouterComponent from './src/common/App';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={Store}>
        <RouterComponent />
      </Provider>
    )
  }
}

