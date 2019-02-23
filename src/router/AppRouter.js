import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import  Landing from '../containers/landing.container';
import Api from '../containers/api.container';

const AppRouter = () => (
  <BrowserRouter>
    <div>

      <Switch>
      <Route path="/" component={Landing} exact={true} />
      <Route path="/Api" component={Api} exact={true} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
