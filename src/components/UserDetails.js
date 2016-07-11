import React from 'react'

export default class UserDetails extends React.Component {

  render() {
    var id = this.props.params.id;
    var userDetail = userList[id] || {name:'',email:''};
      return (
              <div>
                <div>name: {userDetail.name}</div>
                <div>email: {userDetail.email}</div>
              </div>
      );
  }

}
