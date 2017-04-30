import Main from '../Container/main';
import Index from '../Container/Modal';
import React from 'react';
import ReactDOM from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
import { Router, Route, hashHistory ,IndexRoute } from 'react-router';

const RouterComponent = () => (
        <Router history={hashHistory}>
    <Route path="/" component={Main} />
    <Route path="modal" component={Index} />
  </Router>
    );

export default RouterComponent;
