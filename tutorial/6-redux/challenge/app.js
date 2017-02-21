import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import AppContainer from './appContainer';
import reducer from './reducers';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, Link , IndexRoute} from 'react-router';
import MyForm from './myForm';


const store = createStore(reducer);

class Hello extends React.Component {
  render() {
    return <h1>Hello, {this.props.params.name}</h1>;
  }
}

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
          <Route path="/">
            <IndexRoute component={AppContainer} />
            <Route path="add" component={MyForm} />
            <Route path="hello" component={Hello} />
            <Route path="hello/:name" component={Hello} />
        </Route>
      </Router>
  </Provider>,
  document.getElementById('root')
);
