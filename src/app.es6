import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, browserHistory, RouteHandler } from 'react-router'
import { createStore } from 'redux'

var userList = [];

var Home = React.createClass({
    render: function() {
        return (<div>
                <p>Welcome to the Home Page...</p>
              </div>);
    }
});

var Users = React.createClass({
    getInitialState: function () {
          // another option si this to set the state
          var tmpList = [{name:'Pam',email:'phaaser@icct.com'},{name:'Scott',email:'spreston@icct.com'},{name:'foo',email:'foo@foo.com'}];
          var tmpList = [];
           return {list: tmpList};
    },
    componentDidMount: function() {
      var self = this;
      $.getJSON('/data.json').done(function (data) {
        userList = data.list;
        self.setState({
            list : data.list
        });
      });
    },
    render: function() {
      // if you have some data can do this (option 1)
      //var list = [{name:'Pam',email:'phaaser@icct.com'},{name:'Scott',email:'spreston@icct.com'},{name:'foo',email:'foo@foo.com'}];
      var list = this.state.list;
        return (
                <div>
                  <ul>
                  {list.map(function(item, i) {
                      return <li><Link to={`/users/${i}`}>{item.name}</Link> - {item.email}</li>
                  })}
                  </ul>
                </div>
        );
    //}); // getJSON
  }
});

var UsersDetail = React.createClass({
    render: function() {
      var id = this.props.params.id;
      var userDetail = userList[id] || {name:'',email:''};
        return (
                <div>
                  <div>name: {userDetail.name}</div>
                  <div>email: {userDetail.email}</div>
                </div>
        );
  }
});

var MainLayout = React.createClass({
    render: function() {
        return (<div>
                  <span>Header:</span>
                  <Link to="/">Home</Link> |
                  <Link to="/users">Users</Link>
                  <hr/>
                  <div>
                    <h2>Body Content</h2>
                  {this.props.children}
                  </div>
                  <div><hr/>footer</div>
                </div>);
    }
});

ReactDOM.render((
  <Router>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />
      <Route path="/users" component={Users} />
      <Route path="/users/:id" component={UsersDetail} />
    </Route>
  </Router>
), document.getElementById('app'));
