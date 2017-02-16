import React from 'react';
import ReactDOM from 'react-dom';
import {connect} from 'react-redux';

class MyForm extends React.Component {

  constructor(props) {
    super(props);
    // parent child communication
    this.state = {name:'',email:''};
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    console.log(this.refs)
    this.setState({name: this.refs.name.value, email : this.refs.email.value});  
  }

  handleSubmit(event) {
    event.preventDefault();
    let {dispatch} = this.props;
    dispatch({ type: 'ADD', user: this.state});
    this.setState({name: '', email : ''});
    this.props.router.push('/');
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.props.title}</h1>
         <label>
           Name:
           <input type="text" value={this.state.name} ref="name" onChange={this.handleChange} />
         </label>
         <label>
           Email:
           <input type="text" value={this.state.email} ref="email" onChange={this.handleChange} />         
         </label>
         <input type="submit" value="Submit" />
       </form>
    );
  }
}

export default connect(state => ({ names: state.names }))(MyForm);