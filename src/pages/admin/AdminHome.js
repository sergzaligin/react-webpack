import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';

// import Layout from '../../hoc/MainLayout';
import WithAuth  from '../../hoc';

const AdminHome = ({ route }) => {
  // debugger;

  return(
    <WithAuth>
      { renderRoutes(route.routes) }
    </WithAuth>
  );

};

export default { component: connect(null, {})(AdminHome) };
