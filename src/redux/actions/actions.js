export const ADD_TODO = "ADD_TODO";
export const DELETE_TODO = "DELETE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const START_EDIT = "START_EDIT";
export const EDIT_TODO = "EDIT_TODO";
export const REQUEST_STARTED = "REQUEST_STARTED";
export const REQUEST_OK = "REQUEST_OK";

export const addTodo = (todo) => ({
  type: ADD_TODO,
  payload: todo,
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id,
});

export const toggleTodo = (id, checked) => ({
  type: TOGGLE_TODO,
  payload: { id, checked },
});

export const startEdit = (id) => ({
  type: START_EDIT,
  payload: id,
});

export const actionEditTodo = (editedText) => ({
  type: EDIT_TODO,
  payload: editedText,
});

export const requestStarted = () => ({
  type: REQUEST_STARTED,
});

export const requestOk = (color) => ({
  type: REQUEST_OK,
  payload: color,
});

export const fetchColor = () => {
  return (dispatch) => {
    dispatch(requestStarted());
    fetch("http://localhost:3001/color")
      .then((response) => response.json())
      .then((data) => dispatch(requestOk(data.color)));
  };
};
