<template>
  <div class="news">
    <img class="logo" src="//st.360buyimg.com/m/images/index/jd-news-tit.png" alt="">
    <ul class="list">
      <li :class="['list-item',index==active? 'is-active':'']" v-for="(item,index) in dataList.list" :key="index">{{item.desc}}</li>
    </ul>
    <div class="move">更多</div>
  </div>
</template>
<script>
import dataList from './datas.js';
export default {
  name: 'news',
  data () {
    return {
      active: 0,
      dataList: dataList,
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
      }, 1000);
    }
  }
};
</script>
<style lang="scss" scoped>
@import './style.scss';
</style>
