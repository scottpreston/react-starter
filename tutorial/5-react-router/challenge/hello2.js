import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello2 extends React.Component {
  render() {
    return<div> 
    <h1>I am the Hello2 Component.</h1>
    <button onClick={this.props.foo}>foo</button>
    </div>;
  }
}