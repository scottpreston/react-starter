import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router'

function App() {
  return (
    <div>Hi This is App 1<br/>
      <Link to="/app2">Go to App 2</Link>
    </div>
  );
}

function App2() {
  return (
    <div>Hi This is App 2<br/>
      <Link to="/">Go to App 1</Link>
    </div>

  );
}

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/app2" component={App2}/>
  </Router>,
  document.getElementById('test')
);
