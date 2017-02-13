import React from 'react';
import ReactDOM from 'react-dom';
import style from './styles.css';

export default class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {counter: 0};
    this.tick = this.tick.bind(this);
  }
  tick() {
    let count  = this.state.counter + 1;
    this.setState({counter:count});
  }
  render() {
    const count = this.state.counter;
    let hello = null;
    if (count % 2) {
      hello = <h1 onClick={this.tick}>Hello, {this.props.name} - <span className={style.cool}>{count}</span></h1>
    } else {
      hello = <h1 onClick={this.tick}>Hello, {this.props.name} - <span className={style.hot}>{count}</span></h1>
    }
    return hello;
    }
  }
