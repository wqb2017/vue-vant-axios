import _import from './_import';
// 消息
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/news',
        name: 'News',
        component: _import('news'),
        meta: {
          title: '消息'
        },
        children: [
          {
            path: 'entry',
            name: 'newsEntry',
            component: _import('news/entry')
          }
        ]
      }
    ]
  }
];
