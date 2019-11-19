import { combineReducers } from 'redux';

import { reducer as formReducer } from 'redux-form';

import hello from './hello';
import todos from './todos';

export default combineReducers({
  aboutPage: hello,
  todosPage: todos,
  form: formReducer,
});
