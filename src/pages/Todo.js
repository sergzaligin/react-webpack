import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { compose } from 'redux';

import { fetchTodos } from '../store/actions';

const Todo = ({ todos, fetchTodos }) => {

  useEffect(()=>{
    fetchTodos();
  }, []);

  return(
    <div>
      <h1>Todo page</h1>
      <Link to="/">Home</Link>
      <br />
      <button onClick={ () => fetchTodos() } >Click</button>
      <br />
      { todos.map(todo => <p key={ todo.id } >{ todo.id }. { todo.title }</p>) }
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todosPage.todos
  };
};

const loadData = (store, param) => {
  return store.dispatch(fetchTodos(param));
};

export default {
  component: connect(mapStateToProps, {
    fetchTodos,
  })(Todo),
  loadData,
};
