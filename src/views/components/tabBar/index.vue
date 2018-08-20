<template>
  <div class="tabnav">
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home" to="/home">首页</van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/classify">分类</van-tabbar-item>
      <van-tabbar-item icon="wap-home" to="/shopcart">购物车</van-tabbar-item>
      <van-tabbar-item icon="contact" to="/mime">个人中心</van-tabbar-item>
    </van-tabbar>
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
