import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  REQUEST_OK,
  REQUEST_STARTED,
  START_EDIT,
  TOGGLE_TODO,
} from "../actions/actions";

const INITIAL_STATE = {
  todo: [],
  lastId: 0,
  isEditing: false,
  idToEdit: 0,
  isFetching: false,
  color: "#276382",
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case REQUEST_OK:
      return {
        ...state,
        color: `#${payload}`,
      };
    case REQUEST_STARTED:
      return {
        ...state,
        isFetching: true,
      };
    case EDIT_TODO:
      return {
        ...state,
        todo: state.todo.reduce((editedTodo, currentTodo) => {
          if (currentTodo.id === state.idToEdit) {
            return [...editedTodo, { ...currentTodo, todoText: payload }];
          } else {
            return [...editedTodo, currentTodo];
          }
        }, []),
        isEditing: false,
      };
    case START_EDIT:
      return {
        ...state,
        isEditing: true,
        idToEdit: payload,
      };
    case TOGGLE_TODO:
      return {
        ...state,
        todo: state.todo.reduce((newtodo, currentTodo) => {
          if (currentTodo.id === payload.id) {
            return [...newtodo, { ...currentTodo, active: !payload.checked }];
          } else {
            return [...newtodo, currentTodo];
          }
        }, []),
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter((element) => element.id !== payload),
      };
    case ADD_TODO:
      return {
        ...state,
        todo: [...state.todo, payload],
        lastId: state.lastId + 1,
      };
    default:
      return state;
  }
};

export default reducer;
