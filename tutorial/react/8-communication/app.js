import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

class App extends React.Component {
  constructor() {
    super();
    this.state = {welcomes:0};
    this.updateWelcomeCount = this.updateWelcomeCount.bind(this);
  }

  updateWelcomeCount() {
    let w = this.state.welcomes + 1;
    this.setState({welcomes: w}) 
  }

  render() {
    return (
      <div>
        <h1>Welcome {this.state.welcomes}</h1>
        <Welcome name="Scott" updateWelcomeCount={this.updateWelcomeCount.bind(this)}/>
        <Welcome name="Tim" updateWelcomeCount={this.updateWelcomeCount.bind(this)}/>
        <Welcome name="Josh" updateWelcomeCount={this.updateWelcomeCount.bind(this)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('test')
);
