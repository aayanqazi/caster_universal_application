'use strict';

import Render from './AppRender';

import React , { Component } from 'react';

export default class App extends Component {
  render () {
    return Render.call(this, this.props, this.state);
  }
}
