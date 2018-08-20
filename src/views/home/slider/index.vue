/*
 * @Author: WangQiBiao
 * @Date: 2018-08-20 12:03:17
 * @Last Modified by: WangQiBiao
 * @Last Modified time: 2018-08-20 16:01:45
 */
<template>
  <div class="slider">
    <ul class="list">
      <template v-for="(item,index) in dataList.list">
        <li :class="['list-item',index==active ? 'is-active' : '']" :key="index">
          <a class="link" :href="item.src" target="_blank">
            <img class="img" :src="item.src" alt="">
          </a>
        </li>
      </template>
    </ul>
    <ul class="key clearfix">
      <li :class="['key-item',index==active ? 'is-active' : '']" v-for="(item,index) in dataList.list" :key="index"></li>
    </ul>
  </div>
</template>
<script>
import dataList from './datas.js';
export default {
  data () {
    return {
      dataList: dataList,
      active: 0,
      timeoutFns: null
    };
  },
  mounted () {
    this.timerToggle();
  },
  beforeDestroy () {
    clearTimeout(this.timeoutFns);
  },
  methods: {
    /**
     * 定时器切换
     */
    timerToggle () {
      clearTimeout(this.timeoutFns);
      this.timeoutFns = setTimeout(() => {
        /**
         * 当是最后一张时，切换到第一张；否则切换到下一张
         */
        if (this.active < this.dataList.list.length - 1) {
          this.active++;
        } else {
          this.active = 0;
        }
        this.timerToggle();
      }, 5000);
    }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
