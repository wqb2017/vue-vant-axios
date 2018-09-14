<template>
  <div class="entry">
    <div class="searchWrapper">
      <div class="selectbox">
        <router-link :to="{path: '/address/city-selected'}" tag="div">
          <label class="label">深圳</label>
          <i class="icon fa fa-angle-down"></i>
        </router-link>
      </div>
      <div class="inputbox">
        <van-search v-model="searchValue" @focus="focus" placeholder="搜索您需要的服务" background=""></van-search>
      </div>
    </div>
    <TheBanner></TheBanner>
    <Subnav></Subnav>
    <TheTodayOrder></TheTodayOrder>
  </div>
</template>
<script>
import TheBanner from './banner';
import Subnav from '@/views/components/subnav';
import TheTodayOrder from './today-order';
export default {
  components: {
    TheBanner,
    Subnav,
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
