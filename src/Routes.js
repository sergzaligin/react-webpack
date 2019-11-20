import store from './store';


// admin
import AdminHome from './pages/admin/AdminHome';
import AdminPostList from './pages/admin/posts/AdminPostList';
import AdminPostCreate from './pages/admin/posts/AdminPostCreate';

// main
import App from './App';
import Home from './pages/Home';
import Todo from './pages/Todo';
import About from './pages/About';
import Login from './pages/Login';
import NotFound from './pages/NotFound';

import Post from './pages/post/Post';
import PostsListPage from './pages/post/PostsListPage';

// console.log('store.getState().auth.isAuth', store.getState().auth.isAuth);

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
        path: "/login",
        ...Login,
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
        path: "/post/list",
        exact: true,
        ...PostsListPage,
      },
      {
        path: "/post/:id",
        exact: true,
        ...Post,
      },
      {
        path: "/admin",
        ...AdminHome,
      },
      {
        path: "/admin/post/list",
        ...AdminPostList,
      },
      {
        path: "/admin/post/create",
        ...AdminPostCreate,
      },
    ]
  },
]
