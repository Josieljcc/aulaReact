import React, { Component } from "react";
import { connect } from "react-redux";
import Todo from "./Todo";

class TodoList extends Component {
  render() {
    const { todo } = this.props;
    return (
      <div className="todo-list">
        {todo.map((element) => (
          <Todo key={element.id} todo={element} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = ({ todo }) => ({
  todo,
});

export default connect(mapStateToProps)(TodoList);
