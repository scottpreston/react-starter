import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initAction,addAction,requestListOfNames, requestListOfNamesAsync} from './actions';
// this acts as a container component
class AppContainer extends React.Component {

  componentDidMount() {
    // this.props.init(); // old way
    this.props.initAsync(); // async no thunk

  }

  render() {
    console.log(this.props);
    const listofNames = this.props.names.map((user,idx) =>
    <Welcome user={user} key={idx}/>
    );
    return (
    <div>
      <ul>{listofNames}</ul>
      <button onClick={this.props.addDummy}>Add Dummy User</button>
    </div>);
  }
}

// all this does is map props.init -> state.init, props.hello -> state.hello
function mapStateToProps(state) {
  return { 
    names: state.names 
  };
}

function mapDispatchToProps(dispatch) {
  return {
      init: function() {
         // one way
        requestListOfNames().then(data => dispatch(initAction(data.list))); 
       },

      initAsync: function() {
          // now we just call our async action and pass in dispatch
         requestListOfNamesAsync(dispatch); // still passing around dispatch, state (maybe)
         // thunk might look like this, but you need to wire up everything in your app.js
         // requestListOfNamesAsync();
       },
      addDummy : function(newName) {
          dispatch(addAction({name:'dummy', email:'dummy@dummy.com'}));
      }
  };
}

// connected both
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);

