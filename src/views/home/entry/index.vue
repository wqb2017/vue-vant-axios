<template>
  <div class="entry">
    <div class="searchWrapper">
      <div class="selectbox">
        <label class="label">{{address}}</label>
        <i class="icon fa fa-angle-down"></i>
      </div>
      <div class="inputbox">
        <van-search v-model="searchValue" @focus="focus" placeholder="搜索您需要的服务" background=""></van-search>
      </div>
    </div>
    <TheBanner></TheBanner>
    <TheSubnav></TheSubnav>
    <TheTodayOrder></TheTodayOrder>
  </div>
</template>
<script>
import TheBanner from './banner';
import TheSubnav from './subnav';
import TheTodayOrder from './today-order';
export default {
  components: {
    TheBanner,
    TheSubnav,
    TheTodayOrder
  },
  data () {
    return {
      address: '财富港大夏D座财富港大夏D座',
      searchValue: ''
    };
  },
  methods: {
    focus () {
      this.$router.push({path: '/service/list-search'});
    }
  }
};
</script>
<style lang="scss" src="./style.scss"></style>
