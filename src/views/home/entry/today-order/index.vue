<template>
  <div class="todayOrder">
    <h6 class="title">今日订单</h6>
    <TheLists :data="serviceList.list"></TheLists>
  </div>
</template>
<script>
import datasList from './datas.js';
import TheLists from './lists';
export default {
  components: {
    TheLists
  },
  data () {
    return {
      serviceList: datasList
    };
  }
};
</script>
<style lang="scss" scoped src="./style.scss"></style>
