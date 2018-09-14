import _import from './_import';
// 消息
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/news',
        component: _import('news'),
        meta: {
          title: '消息'
        },
        children: [
          {
            path: 'entry',
            component: _import('news/entry')
          }
        ]
      }
    ]
  }
];
