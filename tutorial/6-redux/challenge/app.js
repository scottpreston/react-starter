import React from 'react';
import ReactDOM from 'react-dom';
import { createStore} from 'redux';
import AppContainer from './appContainer';
import reducer from './reducers';
import {Provider} from 'react-redux';
import { Router, Route, browserHistory, Link , IndexRoute} from 'react-router';
import MyForm from './myForm';


const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
      <Router history={browserHistory} >
        <Route path="/">
          <IndexRoute component={AppContainer} />
          <Route path="add" component={MyForm} />
      </Route>
  </Router>
  </Provider>,
  document.getElementById('root')
);
