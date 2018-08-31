<template>
  <div id="orderDetail">
    <div class="status-bar">
      <van-icon class="status-icon" name="success" /> 交易成功
    </div>
    <div class="location">
      <van-icon name="location" /> 深圳市龙华区留仙大道彩悦大厦
    </div>
    <van-steps class="steps" direction="vertical" :active="0">
      <van-step>
        <p class="text active">已评价，评价人：陈不二</p>
        <p class="time active">2016-07-12 12:40</p>
      </van-step>
      <van-step>
        <p class="text">服务完成，完成人：陈不二</p>
        <p class="time">2016-07-11 10:00</p>
      </van-step>
      <van-step>
        <p class="text">服务开始，服务人：陈不二</p>
        <p class="time">2016-07-10 09:30</p>
      </van-step>
      <van-step>
        <p class="text">订单接单，完成人：陈不二</p>
        <p class="time">2016-07-10 09:30</p>
      </van-step>
      <van-step>
        <p class="text">订单创建，完成人：张三丰</p>
        <p class="time">2016-07-10 09:30</p>
      </van-step>
    </van-steps>
    <listItem :detail='itemDetail' />
    <div class="footer">
      <span>订单编号：123456842356689</span>
      <span>交易单号：1232454444585</span>
      <span>创建时间：2018-07-28</span>
      <span>付款时间：2018-07-30</span>
      <span>接单时间：2018-08-01</span>
      <span>服务时间：2018-08-02</span>
      <span>结束服务：2018-08-02</span>
      <span>验收时间：2018-08-02</span>
      <span>评价时间：2018-08-02</span>
      <van-button class="copy">复制</van-button>
    </div>
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
      itemDetail: {
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
      }
    };
  }
};
</script>

<style lang="scss" src='./index.scss'></style>
