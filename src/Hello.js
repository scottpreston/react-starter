import React from 'react'

export class Hello extends React.Component {

  constructor(props) {
   super(props);
   this.state = {message:''};
   this.render = this.render.bind(this);
  }

  render() {
    var self = this;
    var message = this.state.message;
    return (
            <div>{message}</div>
    );
  }
}
