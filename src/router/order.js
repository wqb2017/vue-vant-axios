import _import from './_import';
export default [
  {
    path: '/',
    component: _import('layout/index'),
    children: [
      {
        path: '/order',
        component: _import('order'),
        children: [
          {
            path: 'list',
            component: _import('order/list'),
            meta: { title: '我的订单' }
          },
          {
            path: 'detail',
            component: _import('order/detail'),
            meta: { title: '订单详情' }
          }
        ]
      }
    ]
  }
];
