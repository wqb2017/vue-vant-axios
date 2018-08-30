<template>
  <div id="mineOrder">
    <van-tabs v-model="currentStatus" sticky>
      <van-tab v-for="(item,index) in statusList" :title="item.name" :key="item.value">
        <listItem v-if="index === currentStatus" v-for="order in orderList" :key="order.id" :detail='order' />
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import listItem from '../components/list-item';
export default {
  components: {
    listItem
  },
  data () {
    return {
      statusList: [
        {
          name: '全部订单',
          value: 0
        },
        {
          name: '待接单',
          value: 1
        },
        {
          name: '待支付',
          value: 2
        },
        {
          name: '待验收',
          value: 3
        },
        {
          name: '待评价',
          value: 4
        }
      ],
      currentStatus: 0,
      orderList: [
        {
          id: '11112',
          userName: '七星广场物业管理处',
          status: 1,
          statusName: '待接单',
          servericeImgUrl: 'http://placehold.it/85x85',
          imgUrl: 'http://placehold.it/35x35',
          servericeName:
            '保安巡逻服务，定岗服务，安全保障保安巡逻服务，定岗服务，安全保障',
          servericeTime: '2018-07-25 14:00',
          duration: '2个小时',
          createOrderTime: '2018-07-24 09:00',
          count: 2,
          money: 120
        },
        {
          id: '111123',
          userName: '七星广场物业管理处',
          status: 1,
          statusName: '待接单',
          servericeImgUrl: 'http://placehold.it/85x85',
          imgUrl: 'http://placehold.it/35x35',
          servericeName:
            '保安巡逻服务，定岗服务，安全保障保安巡逻服务，定岗服务，安全保障',
          servericeTime: '2018-07-25 14:00',
          duration: '2个小时',
          createOrderTime: '2018-07-24 09:00',
          count: 2,
          money: 120
        },
        {
          id: '111125',
          userName: '七星广场物业管理处',
          status: 1,
          statusName: '待接单',
          servericeImgUrl: 'http://placehold.it/85x85',
          imgUrl: 'http://placehold.it/35x35',
          servericeName:
            '保安巡逻服务，定岗服务，安全保障保安巡逻服务，定岗服务，安全保障',
          servericeTime: '2018-07-25 14:00',
          duration: '2个小时',
          createOrderTime: '2018-07-24 09:00',
          count: 2,
          money: 120
        }
      ]
    };
  }
};
</script>

<style lang="scss" src='./index.scss'></style>
