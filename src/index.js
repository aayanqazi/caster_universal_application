'use strict';

import App from './common/App';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Store from './Store';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();
var content = document.getElementById('content');

ReactDOM.render((
  <Provider store={Store}>
    <MuiThemeProvider>
  <App />
  </MuiThemeProvider>
  </Provider>
), content);


