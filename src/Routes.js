import App from './App';
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';


export default [
  {
    ...App,
    routes: [
      {
        path: "/",
        exact: true,
        ...Home,
      },
      {
        path: "/about",
        ...About,
      },
      {
        path: "/todo",
        ...Todo,
      },
      {
        ...NotFound,
      },
    ]
  }
]
