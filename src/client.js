import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import '@babel/polyfill';

import jwtDecode from 'jwt-decode';
import Cookie from 'cookie';
import Cookies from 'js-cookie';

import setAuthorizationToken from './utils/setAuthorizationToken';

import Routes from './Routes';
import store from './store';

import App from './App';

const cookieStr = process.browser
? document.cookie
: this.app.context.req.headers.cookie;
const cookies = Cookie.parse(cookieStr || '') || {};
const token = cookies['jwt-token'];
console.log('token cookie', token);
setAuthorizationToken(localStorage.jwtToken);
console.log('localStorage.jwtToken', localStorage.jwtToken);
ReactDOM.render(
    <Provider store={ store } >
      <BrowserRouter>
        <>
          { renderRoutes(Routes) }
        </>
      </BrowserRouter>
    </Provider>,
    document.getElementById('root')
  );
