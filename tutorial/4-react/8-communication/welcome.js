import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.updateCount = this.updateCount.bind(this);
  }
  updateCount() {
    this.props.updateWelcomeCount();
  }
  render() {
    return <h1 onClick={this.updateCount}>Hello, {this.props.name}</h1>;
  }
}