import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { reduxForm } from 'redux-form';

import LoginForm from './LoginForm';

const LoginReduxForm = reduxForm({
  form: 'myposts',
})(LoginForm);

const Login = () => {

  useEffect(()=>{
    document.title = 'Login';
  }, []);

  const onSubmit = ({ post }) => {
    console.log('MyPostsForm', post);
  };

  return(
    <div>
      <h1>Админ панель - создать пост</h1>
      <Link to="/admin">Home</Link>
      <br />
      <LoginReduxForm onSubmit={ onSubmit } />
    </div>
  );
};

export default { component: Login, title: 'Login' };
