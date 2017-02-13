import React from 'react';
import ReactDOM from 'react-dom';
import NameInfo from './nameinfo';
import WelcomeLink from './welcomelink';

class App extends React.Component {

  constructor() {
    super();
    this.state = {activeName:''};
    this.showName = this.showName.bind(this);
     document.getElementById('test').addEventListener("show-nameinfo", this.showName);
  }

  showName(event) {
    this.setState({activeName:event.detail.name});
  }

  render() {

    let activeName = this.state.activeName;

    return (
    <div>
      <h1>Names</h1>
    <div>
      <WelcomeLink name="Scott" />
      <WelcomeLink name="Tim" />
      <WelcomeLink name="Josh" />
    </div>
    <div>
      <NameInfo name="Scott" email="scott@scott.com" activeName={this.state.activeName}/>
      <NameInfo name="Tim" email="tim@tim.com"  activeName={this.state.activeName}/>
      <NameInfo name="Josh" email="josh@josh.com"  activeName={this.state.activeName}/>
  </div>
  </div>
    );
  }
}




ReactDOM.render(
  <App />,
  document.getElementById('test')
);
