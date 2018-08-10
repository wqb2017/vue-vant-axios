<template>
  <div class="tabbar">
    <van-tabbar v-model="active" :fixed='false'>
      <van-tabbar-item icon="shop">超市</van-tabbar-item>
      <van-tabbar-item icon="chat" dot>好友</van-tabbar-item>
      <van-tabbar-item icon="records" info="5">朋友圈</van-tabbar-item>
      <van-tabbar-item icon="gold-coin" info="20">赚钱</van-tabbar-item>
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
