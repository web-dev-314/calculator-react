import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from './components/App.jsx';
import Error from './Error';

import './style/components.module.scss';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} exact />
      <Route component={Error} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
