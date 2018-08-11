<template>
  <div class="order">
    <div class="order-title">
      <div class="order-title__label">我的订单</div>
      <div class="order-title__search">查看全部</div>
    </div>
    <div class="order-list">
      <van-tabbar v-model="active" :fixed="false">
        <van-tabbar-item icon="shop">待派单</van-tabbar-item>
        <van-tabbar-item icon="chat" dot>待接单</van-tabbar-item>
        <van-tabbar-item icon="records" info="5">待验收</van-tabbar-item>
        <van-tabbar-item icon="gold-coin" info="20">待评价</van-tabbar-item>
      </van-tabbar>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      active: 0
    };
  }
};
</script>

<style lang="scss" scoped>
@import './style.scss';
</style>
