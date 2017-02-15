import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
  render() {
    let i = Math.PI;
    return <h1>Hello, {this.props.name}, {this.props.email}, {i}</h1>;
  }
}