import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Welcome from './welcome';
import reducer from './reducers';

const store = createStore(reducer);

// this acts as a container component
class App extends React.Component {
  constructor() {
    super();  
  }

  init(list) {
    this.props.store.dispatch({ type: 'INIT', names: list });
  }

  componentDidMount() {
    var self = this;
    const jq = require('jquery');
    jq.getJSON('http://scottpreston.github.io/html/data.json', ((data) => this.init(data.list)));
  }

  render() {
    const listofNames = this.props.store.getState().names.map((user,idx) =>
    <Welcome user={user} key={idx}/>
    );
    return (<div>{listofNames}</div>);
  }
}

const render = () => ReactDOM.render(
  <App store={store} />,
  document.getElementById('root')
);

render();
store.subscribe(render);
