import React, { Component } from "react";

class Tweet extends Component {
  render() {
    return (
      <div className="o-tweet__wrapper">
        <p>Message: {this.props.message}</p>
        <p>Username: {this.props.username}</p>
        <p>Name: {this.props.name}</p>
        <p>Date: {this.props.date}</p>
      </div>
    );
  }
}

export default Tweet;
