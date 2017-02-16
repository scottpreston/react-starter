import React from 'react';
import ReactDOM from 'react-dom';
import Hello1 from './hello1';
import Hello2 from './hello2';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    <div>Hi This is App<br/>
      <Link to="/hello1">Hello 1</Link><br/>
      <Link to="/hello2">Hello 2</Link><br/>
      <Link to="/ajsdhkajshdkjashdkjahdkjahsjkdash">asdasjdhajsdghjasgdja</Link><br/>
      <hr/>
      {this.props.children}
    </div>
  );
  }
}

function Index() {
  return (
    <p>Select Hello1 or Hello2</p>
  );
}

ReactDOM.render(
    ( 
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="hello1" component={Hello1} />
        <Route path="hello2" component={Hello2} />
        <Route path="**" component={Index} />
    </Route>
  </Router>
    ),
  document.getElementById('test')
);
