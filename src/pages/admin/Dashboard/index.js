import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';



const Dashboard = () => {
// debugger;
  useEffect(()=>{
    document.title = 'Админ панель - главная страница';
  }, []);

  return(

        <div>
          <h1>Админ панель - главная страница</h1>
          <Link to="/">Home</Link>
          <br />
          <Link to="/admin/post/create">Post create</Link>
          <br />
          <Link to="/admin/post/list">Post list</Link>
        </div>

  );



};

export default { component: connect(null, {})(Dashboard), title: 'Админ панель - главная страница' };


