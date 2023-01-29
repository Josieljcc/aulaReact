import React, { Component } from "react";

class Todo extends Component {
  render() {
    const {
      todo: { todoText },
    } = this.props;
    return (
      <div className="todo">
        <p>{todoText}</p>
      </div>
    );
  }
}

export default Todo;
