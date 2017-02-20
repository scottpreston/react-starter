import React from 'react';
import ReactDOM from 'react-dom';

export default class MyForm extends React.Component {

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
    var state = this.state;
    this.props.updateNames(state);
    this.setState({name: '', email : ''});

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>My Form</h1>
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
