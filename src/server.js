import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { matchRoutes, renderRoutes } from 'react-router-config';
import express from 'express';
import { Provider } from 'react-redux';
import serialize from 'serialize-javascript';
import '@babel/polyfill';
import cors from 'cors';

import Routes from './routes';
import store from './store';
import { assetsByChunkName } from '../dist/public/stats.json';

const app = express();

app.use(express.static('dist'));
app.use(cors());
// eslint-disable-next-line no-shadow
const renderer = (req, store, context) => {

  const routes = matchRoutes(Routes, req.path);
  const c = routes.map((el) => el);
  console.log('routes', c[1].route.title);

  const content = renderToString(
    <Provider store={ store }>
      <StaticRouter location={ req.path } context={ context }>
        <div>{renderRoutes(Routes)}</div>
      </StaticRouter>
    </Provider>
  );

  return `<!DOCTYPE html>
  <html lang="ru">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta http-equiv="X-UA-Compatible" content="ie=edge" />
      <link rel="stylesheet" type="text/css" href="/public/${assetsByChunkName.main[0]}" />
      <title>${c[1].route.title}</title>
    </head>
    <body>
      <div id="root">${content}</div>
      <script>
      window.__PRELOADED_STATE__ = ${serialize(store.getState()).replace(
        /</g,
        '\\u003c'
      )}
      </script>
      <script src="/public/${assetsByChunkName.main[1]}"></script>
    </body>
  </html>`;
};

app.get('*', (req, res) => {
  const params = req.params[0].split('/');
  const id = params[2];

  const routes = matchRoutes(Routes, req.path);

  const promises = routes
    .map(({ route }) => {

      if(route.loadData){
        route.loadData.map((el) => el(store, id));
      }else{
        return null;
      }
      // return route.loadData ? route.loadData(store, id) : null;
    })
    .map(promise => {
      if (promise) {

        return new Promise((resolve, reject) => {
          promise.then(resolve).catch(resolve);
        });

      }

      return null;

    });

  Promise.all(promises).then(() => {
    const context = {};
    const content = renderer(req, store, context);

    if (context.notFound) {
      res.status(404);
    }

    res.send(content);
  });
});

app.listen(3000, () => {
  console.log('Server on port 3000');
});

