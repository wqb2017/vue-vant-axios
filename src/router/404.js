import _import from './_import'
// 消息
export default [
  {
    path: '/404',
    name: '404',
    component: _import('404'),
    children: [
      {
        path: 'entry',
        name: '404Entry',
        component: _import('404/entry'),
        meta: {
          title: '404 page'
        }
      }
    ]
  }
]
