
import { Router, Route } from 'react-router';
import MainLayout from './components/MainLayout';
import Home from './components/Home';
import Users from './components/Users';
import UserDetails from './components/UserDetails';

export default (
      <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/users/:id" component={UserDetails} />
    </Route>
);
