import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';

// this acts as a container component
class App extends React.Component {
  constructor() {
    super();  
    this.state = {names:[]};
  }

  componentDidMount() {
    var self = this;
    const jq = require('jquery');
    // jq.getJSON('./data.json', function(data) {
    //   self.setState({names:data.list});
    // });
    jq.getJSON('./data.json', ((data) => this.setState({names:data.list})));
  }

  render() {
    const listofNames = this.state.names.map((user) =>
    <Welcome name={user.name}/>
    );
    return (<div>{listofNames}</div>);
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('test')
);
