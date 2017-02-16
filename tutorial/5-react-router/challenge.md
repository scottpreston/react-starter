# React-Router Challenge / Lab

Do the following steps to test your React-Router Knowledge.

1. Open your React-Router Challenge.
2. Modify your react project to use the following routes below.
3. Add a master detail component so that when you click on /user/:userId, it goes to this detail.

```javascript
render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
        <IndexRoute component={Index} />
        <Route path="about" component={About}/>
        <Route path="users" component={Users}>
        <Route path="/user/:userId" component={UserDetail}/>
      </Route>
    </Route>
  </Router>
), document.getElementById('myApp'))
```
