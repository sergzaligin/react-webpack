
import { SET_USER } from '../types';

const initialState = {
  token: null,
  isAuth: false,
};

export default  (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        token: action.payload.token,
        isAuth: true,
      }
    default:
      return state;
  }
};

