import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import PostPrev from '../components/Post/PostPrev/PostPrev';

const Home = () => {

  useEffect(()=>{
    document.title = 'Главная страница';
  }, []);

  return(
    <div>
      <h1>Home page</h1>
      <Link to="/admin">Admin</Link>
      <br />
      <Link to="/about">About</Link>
      <br />
      <Link to="/login">Login</Link>
      <br />
      <Link to="/todo">Todo</Link>
      <div>
        <h1>Список постов</h1>
        <div>
          <PostPrev />
        </div>
      </div>
    </div>
  );
};

export default { component: Home, title: 'Главная страница' };
