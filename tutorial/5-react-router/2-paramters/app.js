import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './welcome';
import { Router, Route, hashHistory } from 'react-router'
import { Link } from 'react-router'

function App() {
  return (
    <div>Hi This is App 1<br/>
      <Link to="/hello/scott">Hello Scott</Link>
      <Link to="/hello/josh">Hello Josh</Link>
      <Link to="/hello/tim">Hello Tim</Link>
    </div>
  );
}

ReactDOM.render(
    <Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/hello/:name" component={Hello}/>
  </Router>,
  document.getElementById('test')
);
