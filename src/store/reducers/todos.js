import { SET_TODOS } from '../types';

const initialState = {
  todos: [],
};

export default (state = initialState, action) => {

  switch (action.type) {
    case SET_TODOS:
      return {
        ...state,
        todos: action.payload,
      }
    default:
      return state;
  }

};
