import React from 'react';
import ReactDOM from 'react-dom';
import MyForm from './myForm';

// this acts as a container component
class App extends React.Component {
  constructor() {
    super();  
    this.state = {names:[]};
    this.updateNames = this.updateNames.bind(this);
  }

    updateNames(userObject) {
        let names = this.state.names;
        names.push(userObject);
        this.setState({names:names});
    } 
  
    componentDidMount() {
        var self = this;
        const jq = require('jquery');
        jq.getJSON('http://scottpreston.github.io/html/data.json', ((data) => this.setState({names:data.list})));
    }

  render() {
    const listofNames = this.state.names.map((user,idx) =>
        <li key={idx}>{user.name} - {user.email}</li>
    );
    return (
        <div>
            <ul>{listofNames}</ul>
            <hr/>
            <MyForm updateNames={this.updateNames} />
        </div>
        );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('main')
);
