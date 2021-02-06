import React, { Component } from 'react';
import './../css/App.css';

class UserScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // [ USER SCREEN USER  ======================================== ♛ ]

  render() {
    return (
      <div id="userDataDisplay">
        <div id="Thumbnail">
          <img src={this.props.thumbnail} />
          <div id="authorName">
            <h3>{this.props.authorPost}</h3>
          </div>
        </div>
        <div id="TitleWindow">
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
}

export default UserScreen;
