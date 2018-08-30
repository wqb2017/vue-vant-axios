import _import from './_import';
// 发布
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/release',
        name: 'Release',
        component: _import('release'),
        meta: {
          title: '发布'
        },
        children: [
          {
            path: 'entry',
            name: 'releaseEntry',
            component: _import('release/entry')
          }
        ]
      }
    ]
  }
];
