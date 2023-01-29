import React, { Component } from "react";
import { connect } from "react-redux";
import { addTodo, ADD_TODO } from "../redux/actions/actions";

class AddForm extends Component {
  state = {
    todoText: "",
  };

  handleInput = ({ target: { value } }) => {
    this.setState({ todoText: value });
  };

  handleaddTodo = () => {
    const { dispatch } = this.props;
    const { todoText } = this.state;
    const todo = {
      id: 0,
      todoText,
      active: true,
    };
    dispatch(addTodo(todo));
  };

  render() {
    const { todoText } = this.state;
    return (
      <div className="add-form">
        <input
          type="text"
          name="todoText"
          value={todoText}
          onChange={this.handleInput}
        />
        <button onClick={this.handleaddTodo}>+</button>
      </div>
    );
  }
}

export default connect()(AddForm);
