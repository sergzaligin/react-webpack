import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import express from 'express';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import '@babel/polyfill';

import Routes from './Routes';
import { store } from './store';
import { assetsByChunkName } from '../dist/stats.json';

const app = express();

app.use(express.static('dist'));
