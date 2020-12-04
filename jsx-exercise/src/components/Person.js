import React, { Component } from "react";

class Person extends Component {
  render() {
    const truncateString = (str, num) => {
      if (str.length <= num) {
        return str;
      }
      // Return str truncated
      return str.slice(0, num - 2);
    };

    return (
      <div className="o-person__wrapper">
        <p>Learn some information about this person</p>
        <p>
          Name:{" "}
          {this.props.name.length > 8
            ? truncateString(this.props.name, 8)
            : this.props.name}
        </p>
        <p>Age: {this.props.age}</p>
        {this.props.age > 21 ? <h3>Have a drink</h3> : <h3>You must be 21</h3>}
        <h3>Hobbies</h3>
        {this.props.hobbies.length > 0 &&
          this.props.hobbies.map((hobbies) => {
            return <li>{hobbies}</li>;
          })}
      </div>
    );
  }
}

export default Person;
