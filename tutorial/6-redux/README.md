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

