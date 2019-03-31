import _import from './_import'
// 地址选择
export default [
  {
    path: '/address',
    component: _import('address'),
    children: [
      {
        path: 'city-selected',
        component: _import('address/city-selected'),
        meta: {
          title: '城市选择'
        }
      }
    ]
  }
]
