import React from 'react';
import ReactDOM from 'react-dom';
import Welcome from './welcome';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {initAction,addAction} from './actions';
// this acts as a container component
class AppContainer extends React.Component {

  // constructor(props){
  //   super(props);
  //   this.init = this.init.bind(this);
  //   this.addDummy = this.addDummy.bind(this);
  // }

  // not needed since it's connected
  // init(list) {
  //   let {dispatch} = this.props;
  //   //actionCreator
  //   dispatch(initAction(list));
  //   // manually
  //   //dispatch({ type: 'INIT', names: list });
  // }

  // not needed since it's connected

  // addDummy(event) {
  //   event.preventDefault();
  //   let {dispatch} = this.props;
  //   // manual
  //   //dispatch({ type: 'ADD', user: {name:'dummy', email:'dummy@dummy.com'}});
  //   //action ceator
  //   dispatch(addAction({name:'dummy', email:'dummy@dummy.com'}));
  // }

  componentDidMount() {
    const jq = require('jquery');    
    //jq.getJSON('http://scottpreston.github.io/html/data.json', (data) => this.init(data.list));
    jq.getJSON('http://scottpreston.github.io/html/data.json', (data) => this.props.init(data.list));
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
       init: function(list) {
         dispatch(initAction(list));
       },
      addDummy : function(newName) {
          dispatch(addAction({name:'dummy', email:'dummy@dummy.com'}));
      }
  };
}

// connected both
export default connect(mapStateToProps,mapDispatchToProps)(AppContainer);
// old way
//export default connect(state => ({ names: state.names }))(AppContainer);
