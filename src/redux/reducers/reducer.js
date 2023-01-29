import { ADD_TODO } from "../actions/actions";

const INITIAL_STATE = {
  todo: [],
};

const reducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      return { todo: [...state.todo, payload] };
    default:
      return state;
  }
};

export default reducer;
