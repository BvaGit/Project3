import React, { Component } from "react";

class Users extends Component {
  componentDidMount() {
    this.props.getUsersFromApi();
  }
  render() {
    return (
      <div>
        {this.props.users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))}
      </div>
    );
  }
}

export default Users;
