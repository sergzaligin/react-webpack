import AdminHome from '../pages/admin/AdminHome';
import AdminPostList from '../pages/admin/posts/AdminPostList';
import AdminPostCreate from '../pages/admin/posts/AdminPostCreate';
import AdminDashboard from '../pages/admin/Dashboard';

export default [
  {


      ...AdminHome,

      routes: [
          {
            path: "/admin",
            exact: true,
            ...AdminDashboard,
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

  }
];
