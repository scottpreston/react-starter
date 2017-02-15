import React from 'react';

export default class Counter extends React.Component {

  render() {
    return (
      <div>
        <p>Clicked: {this.props.value} times.</p>
        <p><button onClick={this.props.onIncrement}> + </button></p>
        <p><button onClick={this.props.onDecrement}> - </button></p>
      </div>
    )
  }
}