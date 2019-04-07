<!--
 * @Author: WangQiBiao
 * @LastEditors: WangQiBiao
 * @Description:
 * @Date: 2019-03-31 13:41:09
 * @LastEditTime: 2019-04-07 22:53:34
 -->
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
      <Subnav></Subnav>
    </div>
    <div class="listsWrapper">
      <TheLists></TheLists>
    </div>
  </div>
</template>
<script>
import Subnav from '@/views/components/subnav'
import TheLists from './lists'
export default {
  components: {
    Subnav,
    TheLists
  },
  data () {
    return {
      searchValue: ''
    }
  },
  methods: {
    focus () {
      this.$router.push({path: '/service/list-search'})
    }
  }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
