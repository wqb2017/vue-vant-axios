<template>
  <div class="submenu">
    <ul class="list clearfix">
      <li class="list-item" v-for="(item,index) in dataList.list" :key="index">
        <img class="img" :src="item.src" alt="">
        <p class="label">{{item.label}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import dataList from './datas.js';
export default {
  data () {
    return {
      active: 1,
      dataList: dataList
    };
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
