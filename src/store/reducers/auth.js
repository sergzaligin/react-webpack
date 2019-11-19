
import { SET_USER } from '../types';

const initialState = {
  id: null,
  rememberMe: null,
  email: null,
  nickname: null,
  isAuth: false,
};

export default  (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        ...action.data,
        isAuth: true,
      }
    default:
      return state;
  }
};

