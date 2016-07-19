import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';

export default class Users extends React.Component {
 constructor(props) {
   super(props);
   this.renderUser = this.renderUser.bind(this);
   this.reduxDispatch = this.reduxDispatch.bind(this);
 }
 render() {
   return (
      <div>
      <ul> {this.props.users.map(this.renderUser)} </ul>
      <button onClick={this.reduxDispatch}>Dispatch</button>
      </div>);
 }

 renderUser({name, email}, i) {
   return (<li key={i}><Link to={`/users/${i}`}>{name}</Link> - {email}</li>);
 }

 reduxDispatch() {
      var dummyUser = {name:"dummy dummy", email:'dummy@icct.com'};
      this.props.addUser(dummyUser);
 }

}
