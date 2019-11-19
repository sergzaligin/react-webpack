import { SET_HELLO, SET_TODOS, SET_NEWTODOS, SET_USER } from './types';

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

const setNewTodos = payload => ({
  type: SET_NEWTODOS,
  payload,
});

export const fetchNewTodos = () => {
  return async dispatch => {
    const res = await todoApi.getNewTodos();
    dispatch(setNewTodos(res.data));
  };
};

const setUser = payload => ({
  type: SET_USER,
  payload,
});

export const fetchLogin = (email, password, nickname) => {
  return async dispatch => {
    const res = await authApi.login(email, password, nickname);
    console.log('AUTH', res);
    dispatch(setUser(res.data));
  };
};
