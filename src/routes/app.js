
import Home from '../pages/Home';
import Todo from '../pages/Todo';
import About from '../pages/About';
import Login from '../pages/Login';

import Post from '../pages/post/Post';
import PostsListPage from '../pages/post/PostsListPage';

export default [
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
];
