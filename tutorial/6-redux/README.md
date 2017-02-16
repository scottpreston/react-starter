# Redux Explained

For more information go [here](http://redux.js.org/).

## Basics Concepts

1. The state of your application is stored in an object tree within a single 'store'.
2. State is READ-ONLY, The only way to change the state is to emit an action, an object describing what happened.
3. To specify how the state tree is transformed by actions, you write 'reducers'.

![redux image](./redux-explained.png "redux explained")


## Why Redux?

Lets take a look at a simple app.

* App 
    * Nav
    * Header
    * Content
        * Contenttop
        * Content Widget
        * Content Area (content updates navigates to different part of site)
    * Body

### Sample Actions 

* Content Area --> Updates Content --> Updates App --> Passes State to Nav
* Nav Update --> Needs to Uppdate App --> Passes Props to Content --> Passes Props to Content Area
* Content Widget (Filters Content) --> Updates Content --> Passes Props to Content Area

When you add more and more components, you end up with more and more arrows. We don't like Arrows (except these =>)

### Simpler Way (Redux)

* Dispatch Actions
* Reduce (i.e. update parts of the state via a reducer)
* Subscribe to State Update, then just REACT.

### Presentation vs. Container components

How are they different?

#### Presentation

* Purpose - How things look (markup, styles)
* Aware of Redux - No
* To Read Data - Read From Props
* To Change Data - Invoke Callbacks From Props
* Are written by hand

### Container

* Purpose - How things work (data fetching, state updates)
* Aware of Redux - Yes
* To Read Data - Subscribe to Redux state
* To Change Data - Dispatch Redux actions
* Are written via connect()


## Example 4-connect

Connects a React component to a Redux store. connect is a facade around connectAdvanced, 
providing a convenient API for the most common use cases.

### Components

* Welcome (Presentation) --> Same
* App (Container) --> AppContainer

#### 1. Read Properties

Instead of this:

```javascript
// 1
const listofNames = this.props.store.getState().names.map((user,idx) =>

// 3
store.subscribe(render);
```

We Do This:

```javascript
// 1
const listofNames = this.props.names.map((user,idx) =>

// via
  <Provider store={store}>
  <AppContainer />
  </Provider>,

// and
export default connect(state => ({ names: state.names }))(AppContainer);
```

#### How can we map Dispatch?

Instead of this:

```javascript
let {dispatch} = this.props;
dispatch({ type: 'INIT', names: list });
```
We Do this:

```javascript

```
