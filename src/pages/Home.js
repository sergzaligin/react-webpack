import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {

  useEffect(()=>{
    document.title = 'Главная страница';
  }, []);

  return(
    <div>
      <h1>Home page</h1>
      <Link to="/about">About</Link>
      <br />
      <Link to="/todo">Todo</Link>
    </div>
  );
};

export default { component: Home, title: 'Главная страница' };
