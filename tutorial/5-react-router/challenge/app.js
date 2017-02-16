import React from 'react';
import ReactDOM from 'react-dom';
import Hello1 from './hello1';
import Hello2 from './hello2';
import { Router, Route, browserHistory, Link, IndexRoute } from 'react-router'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.foo = this.foo.bind(this);
  }
  foo() {
    console.log('foo foo');
  }
  render() {
    const child = React.cloneElement(this.props.children, {foo: this.foo});
    return (
    <div>Hi This is App<br/>
      <Link to="/hello1">Hello 1</Link><br/>
      <Link to="/hello2">Hello 2</Link><br/>
      <Link to="/ajsdhkajshdkjashdkjahdkjahsjkdash">asdasjdhajsdghjasgdja</Link><br/>
      <hr/>
      {child}
    </div>
  );
  }
}

function Index() {
  return (<div>
    <p>Select Hello1 or Hello2</p>
    </div>
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
