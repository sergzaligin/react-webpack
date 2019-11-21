// admin
import Admin from './admin';

// main
import Application from './app';

import Root from '../App';
import NotFound from '../pages/NotFound';

export default [
  {
     ...Root,
    routes: [
      ...Application,
      ...Admin,
      {
        ...NotFound,
      },
    ]
  },
]
