import React from 'react';
import ReactDOM from 'react-dom';

export default class Welcome extends React.Component {
  render() {
    return <li>Hello, {this.props.user.name} - {this.props.user.email}</li>;
  }
}