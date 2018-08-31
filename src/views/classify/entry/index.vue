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
    <div class="subnavWrapper">
      <TheSubnav></TheSubnav>
    </div>
    <div class="listsWrapper">
      <TheLists></TheLists>
    </div>
  </div>
</template>
<script>
import TheSubnav from './subnav';
import TheLists from './lists';
export default {
  components: {
    TheSubnav,
    TheLists
  },
  data () {
    return {
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
<style lang="scss" scoped src="./style.scss"></style>
