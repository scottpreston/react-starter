import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.tick = this.tick.bind(this);
  }
  tick() {
    let count  = this.state.counter + 1;
    this.setState({counter:count});
    // Wrong
    //this.state.counter = count;
  }
  render() {
    return <h1 onClick={this.tick}>Hello, {this.props.name} - {this.state.counter}</h1>;
  }
}