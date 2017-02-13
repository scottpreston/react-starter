import React from 'react';
import ReactDOM from 'react-dom';

export default class ScottsForm extends React.Component {

  constructor(props) {
    super(props);
    // parent child communication
    this.state = {value: '', formName: props.title};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    let val = event.target.value;
    this.setState({value: val, formName : val});  
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>{this.state.formName}</h1>
         <label>
           Name:
           <input type="text" value={this.state.value} onChange={this.handleChange} />
         </label>
         <input type="submit" value="Submit" />
       </form>
    );
  }
}
