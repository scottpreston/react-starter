import React from 'react';
import {render} from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
import configureStore from './store/configureStore';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import UserContainer from './containers/UserContainer';
import UserDetails from './components/UserDetails';

const store = configureStore();

render(
    <Router history={browserHistory}>
      <Route component={MainLayout} store={store}>
      <Route path="/" component={Home} />
      <Route path="/users" component={UserContainer} />
      <Route path="/users/:id" component={UserDetails} />
    </Route>
  </Router>
  , document.getElementById('app')
);
