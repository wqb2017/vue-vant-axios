import _import from './_import';
// 分类
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/classify',
        name: 'Classify',
        component: _import('classify'),
        children: [
          {
            path: 'entry',
            name: 'classifyEntry',
            component: _import('classify/entry'),
            meta: {
              title: '分类'
            }
          }
        ]
      }
    ]
  }
];
