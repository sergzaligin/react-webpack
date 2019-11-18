import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';
import '@babel/polyfill';

import Routes from './Routes';
import store from './store';

import App from './App';

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
