import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

import WithAuth  from '../../hoc';

const AdminHome = ({ route }) => {
// debugger;
  useEffect(()=>{
    document.title = 'Админ панель - главная страница';
  }, []);


  return(
      <WithAuth>
        { renderRoutes(route.routes) }
        <div>

          <h1>Админ панель - главная страница</h1>
          <Link to="/">Home</Link>
          <br />
          <Link to="/admin/post/create">Post create</Link>
          <br />
          <Link to="/admin/post/list">Post list</Link>
        </div>
      </WithAuth>
  );



};

export default { component: connect(null, {})(AdminHome), title: 'Админ панель - главная страница' };
