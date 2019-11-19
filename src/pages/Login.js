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

  const onSubmit = ({ nickname, email, password }) => {

    const User = {
      nickname,
      email,
      password,
    };

    console.log('Login', User);

  };

  return(
    <div>
      <h1>Login</h1>
      <Link to="/admin">Home</Link>
      <br />
      <LoginReduxForm onSubmit={ onSubmit } />
    </div>
  );
};

export default { component: Login, title: 'Login' };
