import React from 'react'
import {Link} from 'react-router'

export default class MainLayout extends React.Component {

  render() {
    var myChild = React.cloneElement(this.props.children, {store: this.props.route.store});

    return (<div>
              <span>Header:</span>
              <Link to="/">Home</Link> |
              <Link to="/users">Users</Link>
              <hr/>
              <div>
                <h2>Body Content</h2>
                {myChild}
              </div>
              <div><hr/>footer</div>
            </div>);
  }

}
