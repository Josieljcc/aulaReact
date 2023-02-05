import React, { Component } from "react";
import { connect } from "react-redux";
import { deleteTodo, startEdit, toggleTodo } from "../redux/actions/actions";
import "./Todo.css";

class Todo extends Component {
  state = {
    checked: false,
  };
  handleDelete = () => {
    const {
      dispatch,
      todo: { id },
    } = this.props;
    dispatch(deleteTodo(id));
  };

  handleStartEdit = () => {
    const {
      dispatch,
      todo: { id },
    } = this.props;
    dispatch(startEdit(id));
  };

  handleActive = () => {
    const { checked } = this.state;
    const {
      dispatch,
      todo: { id },
    } = this.props;
    this.setState({ checked: !checked }, () => {
      const { checked } = this.state;
      dispatch(toggleTodo(id, checked));
    });
  };
  render() {
    const {
      todo: { todoText, active },
    } = this.props;
    const { checked } = this.state;
    return (
      <div className="todo">
        <input type="checkbox" checked={checked} onChange={this.handleActive} />
        <p className={active ? "" : "checked"}>{todoText}</p>
        <button onClick={this.handleDelete}>-</button>
        <button onClick={this.handleStartEdit}>editar</button>
      </div>
    );
  }
}

export default connect()(Todo);
