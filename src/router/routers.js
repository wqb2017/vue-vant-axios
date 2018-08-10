import _import from './_import';

export default [
  {
    path: '/',
    redirect: 'home'
  },
  {
    path: '/',
    name: 'Layout',
    component: _import('layout'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: _import('home'),
        meta: {
          title: '首页'
        }
      },
      {
        path: '/mime',
        name: 'Mime',
        component: _import('mime'),
        meta: {
          title: '个人中心'
        }
      }
    ]
  }
];
