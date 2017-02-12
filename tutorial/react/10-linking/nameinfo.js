import React from 'react';
import ReactDOM from 'react-dom';

export default class NameInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let show = (this.props.name !== this.props.activeName);
    return (
    <p hidden={show}>Name: {this.props.name}<br/>
    Email: {this.props.email}</p>
    );
  }
}