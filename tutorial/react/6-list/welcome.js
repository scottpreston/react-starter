import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0, names: props.names};
    this.tick = this.tick.bind(this);
  }
  tick() {
    let count  = this.state.counter + 1;
    this.setState({counter:count});
  }
  render() {
    const count = this.state.counter;
    const listofNames = this.state.names.map((name) =>
    <h1 onClick={this.tick}>Hello, {name} - {count}</h1> 
    );
    return (<div>{listofNames}</div>);
    }
}
