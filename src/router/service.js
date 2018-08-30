import _import from './_import';
// 服务
export default [
  {
    path: '/service',
    name: 'service',
    component: _import('service'),
    meta: {
      title: '服务'
    },
    children: [
      {
        path: 'security',
        name: 'security',
        component: _import('service/security'),
        meta: {
          title: '保安服务'
        }
      },
      {
        path: 'list-search',
        name: 'list-search',
        component: _import('service/list-search'),
        meta: {
          title: '服务查询'
        }
      },
      {
        path: 'details',
        name: 'ServiceDetails',
        component: _import('service/details'),
        meta: {
          title: '服务详情'
        }
      }
    ]
  }
];
