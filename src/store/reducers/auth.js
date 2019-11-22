import is from 'is_js';

import { SET_USER, LOGOUT } from '../types';

const initialState = {
  user: null,
  token: '',
  isAuth: false,
};

export default  (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: { ...action.payload.user },
        token: action.payload.token,
        isAuth: !is.empty(action.payload.user),
      }
      case LOGOUT:
      return {
        ...state,
        user: {},
        token: '',
        isAuth: false,
      }
    default:
      return state;
  }
};

