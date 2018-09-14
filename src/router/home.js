import _import from './_import';
// 首页
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/home',
        component: _import('home'),
        children: [
          {
            path: 'entry',
            component: _import('home/entry'),
            meta: {
              title: '首页'
            }
          }
        ]
      }
    ]
  }
];
