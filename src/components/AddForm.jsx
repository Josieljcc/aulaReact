import React, { Component } from "react";
import { connect } from "react-redux";
import { actionEditTodo, addTodo } from "../redux/actions/actions";

class AddForm extends Component {
  state = {
    todoText: "",
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ todoText: value });
  };

  createId = () => {
    const { lastId } = this.props;
    return lastId + 1;
  };

  addTodo = () => {
    const { dispatch } = this.props;
    const { todoText } = this.state;
    const todo = {
      id: this.createId(),
      todoText,
      active: true,
    };
    dispatch(addTodo(todo));
  };

  editTodo = () => {
    const { dispatch, idToEdit } = this.props;
    const { todoText } = this.state;
    const editedText = todoText;
    dispatch(actionEditTodo(editedText));
  };

  handleTodo = () => {
    const { isEditing } = this.props;
    if (isEditing) {
      this.editTodo();
      return;
    }
    this.addTodo();
  };

  render() {
    const { todoText } = this.state;
    const { isEditing } = this.props;
    return (
      <div className="add-form">
        <input
          type="text"
          name="todoText"
          value={todoText}
          onChange={this.handleInput}
        />
        <button onClick={this.handleTodo}>{isEditing ? "editar" : "+"}</button>
      </div>
    );
  }
}

const mapStateToProps = ({ todo, lastId, isEditing, idToEdit }) => ({
  todo,
  lastId,
  isEditing,
  idToEdit,
});

export default connect(mapStateToProps)(AddForm);
