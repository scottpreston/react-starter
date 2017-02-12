import React from 'react';
import ReactDOM from 'react-dom';

export default class WelcomeLink extends React.Component {
  constructor(props) {
    super(props);
    this.showName = this.showName.bind(this);
  }

  showName(e) {
    e.preventDefault();
    var nameEvent = new CustomEvent('show-nameinfo', { 
    detail: {
      name: this.props.name
    },
    bubbles: true
  });
  document.getElementById('test').dispatchEvent(nameEvent);
  }

  render() {
    return (
    <h1>Welcome
      <a onClick={this.showName}>{this.props.name}</a>
    </h1>
    );
  }
}