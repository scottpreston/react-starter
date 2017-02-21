import React from 'react';
import ReactDOM from 'react-dom';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import MyForm from './myForm';
import {Link} from 'react-router';

// this acts as a container component
class AppContainer extends React.Component {

  constructor(props){
    super(props);
    this.init = this.init.bind(this);
    this.addUser = this.addUser.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
  }

  init(list) {
    let {dispatch} = this.props;
    dispatch({ type: 'INIT', names: list });
  }

  addUser(user) { 
    let {dispatch} = this.props;
    dispatch({ type: 'ADD', user: {name: user.name, email: user.email}});
  }

  deleteUser(event) {
    let id = event.target.className;
    let {dispatch} = this.props;
    dispatch({ type: 'DELETE', id: id});
  }

  componentDidMount() {
    const jq = require('jquery');    
    if (this.props.names.length===0) {
      jq.getJSON('http://scottpreston.github.io/html/data.json', (data) => this.init(data.list));
    }
  }

  render() {
    const listofNames = this.props.names.map((user,idx) => 
      <li key={idx}>{user.name} -- {user.email} <a onClick={this.deleteUser} className={idx}>remove</a> , 
      <Link to={`/hello/${user.name}`}> Hello </Link></li>
    );
    return (
    <div>
  
      <Link to="add">Add User</Link>
      <ul>{listofNames}</ul>
    </div>);
  }
}

export default connect(state => ({ names: state.names }))(AppContainer);
