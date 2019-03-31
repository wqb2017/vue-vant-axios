<template>
  <div class="citySelected">
    <div class="searchWrapper">
      <van-search placeholder="输入城市名称或者拼音查询" v-model="cityValue" />
    </div>
    <div class="currentWrapper">
      <van-cell is-link value="选择">
        <template slot="title">
          <span class="label">当前城市：</span>
          <span class="desc">深圳</span>
        </template>
      </van-cell>
    </div>
    <div class="boxWrapper visitWrapper">
      <div class="title">最近访问</div>
      <div class="lists">
        <div class="lists-item" v-for="(item,index) in ['深圳','广州','上海','北京']" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="boxWrapper hotCityWrapper">
      <div class="title">热门城市</div>
      <div class="lists">
        <div class="lists-item" v-for="(item,index) in ['深圳','广州','上海','北京','釜山','东莞','惠州','长沙','武汉']" :key="index">{{item}}</div>
      </div>
    </div>
    <div class="searchListWrapper">
      <div class="item" v-for="(item,index) in searchList" :key="index">{{item.label}}</div>
    </div>
    <div class="spellSearchWrapper">
      <div class="spell">
        <div class="spell-item">#</div>
        <div class="spell-item" v-for="(item,index) in spellList" :key="index" :data-id="item.id">{{item.label}}</div>
      </div>
    </div>
  </div>
</template>
<script>
import spellList from './spellList.js'
export default {
  data () {
    return {
      cityValue: '',
      spellList: spellList.list,
      searchList: [
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'},
        {label: '深圳', id: 'shenzhen'}
      ]
    }
  }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
