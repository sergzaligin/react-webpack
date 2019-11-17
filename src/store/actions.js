import { SET_HELLO } from './types';
import { SET_TODOS } from './types';

import { todoApi } from '../api/';

export const setHello = payload => ({
  type: SET_HELLO,
  payload,
});

const setTodos = payload => ({
  type: SET_TODOS,
  payload,
});

export const fetchTodos = () => {
  return async dispatch => {
    const res = await todoApi.getTodos();
    dispatch(setTodos(res.data));
  };
};
