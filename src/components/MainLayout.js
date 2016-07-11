import React from 'react'
import {Link} from 'react-router'

export default class MainLayout extends React.Component {

  render() {
    return (<div>
              <span>Header:</span>
              <Link to="/">Home</Link> |
              <Link to="/users">Users</Link>
              <hr/>
              <div>
                <h2>Body Content</h2>
                {this.props.children}
              </div>
              <div><hr/>footer</div>
            </div>);
  }

}
