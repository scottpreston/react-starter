import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
// this acts as a container component
class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.init = this.init.bind(this);
    this.addDummy = this.addDummy.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;
    dispatch({ type: 'INIT', names: list });
  }

  addDummy() {
    let {dispatch} = this.props;
    dispatch({ type: 'ADD', user: {name:'dummy', email:'dummy@dummy.com'}});
  }

  componentDidMount() {
    const jq = require('jquery');    
    jq.getJSON('http://scottpreston.github.io/html/data.json', (data) => this.init(data.list));
  }

  render() {
    const listofNames = this.props.names.map((user,idx) =>
    <Welcome user={user} key={idx}/>
    );
    return (
    <div>
      <ul>{listofNames}</ul>
      <button onClick={this.addDummy}>Add Dummy User</button>
    </div>);
  }
}

export default connect(state => ({ names: state.names }))(AppContainer);
