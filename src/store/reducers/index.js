import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import hello from './hello';
import todos from './todos';
import auth from './auth';

export default combineReducers({
  auth,
  aboutPage: hello,
  todosPage: todos,
  form: formReducer,
});
