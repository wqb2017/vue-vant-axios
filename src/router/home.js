import _import from './_import';
// 首页
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/home',
        name: 'Home',
        component: _import('home'),
        children: [
          {
            path: 'entry',
            name: 'homeEntry',
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
