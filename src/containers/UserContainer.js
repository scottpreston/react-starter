import React from 'react'
import {Link} from 'react-router'
import {connect} from 'react-redux';
import * as actions from '../actions/';
import {bindActionCreators} from 'redux';
import * as types from '../constants/actionTypes';
import Users from '../components/Users';

export default class UserContainer extends React.Component {

 constructor() {
   super();
   this.state = { users: [] }
   this.addUser = this.addUser.bind(this);
 }

 componentDidMount() {

   var self = this;
   var store = this.props.store;
   $.getJSON('/data.json').done(function (data) {
      store.dispatch({type:'GET_LIST', users: data.list});
   });

   store.subscribe(function() {
     var state = store.getState();
      self.setState({
          users : state.users
      });
    });
 }

 addUser() {
   var store = this.props.store;
   store.dispatch({
         type: 'ADD_USER',
         user: {name:"dummy dummy", email:'dummy@icct.com'}
       });
 }

 render() {
   return (<Users
   users={this.state.users}
   addUser={this.addUser}
   />);
 }

}
