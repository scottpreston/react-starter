import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './component';
import reducer from './reducers';

const store = createStore(reducer);

const render = () => ReactDOM.render( // turns ReactDOM.render into executable function
  <Counter
    value={store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
    onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
  />,
  document.getElementById('root')
);

render();
store.subscribe(render);
