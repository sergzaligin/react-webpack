import App from './App';
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';
import NotFound from './pages/NotFound';


export default [
  {
    component: App,
    routes: [
      {
        path: "/",
        exact: true,
        component: Home,
      },
      {
        path: "/about",
        component: About,
      },
      {
        path: "/todo",
        component: Todo,
      },
      {
        component: NotFound,
      },
    ]
  }
]
