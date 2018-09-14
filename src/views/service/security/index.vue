<template>
  <div class="security">
    <van-tabs>
      <van-tab v-for="(item,index) in subnavList" :title="item.label" :key="index">
        <ul class="sortList">
          <li class="sortList-item synthesize is-active">
            <div class="name">综合</div>
            <div class="search">
              <i class="fa fa-caret-down"></i>
            </div>
          </li>
          <li class="sortList-item price">
            <div class="name">价格</div>
            <div class="search">
              <i class="fa fa-caret-up"></i>
              <i class="fa fa-caret-down"></i>
            </div>
          </li>
          <li class="sortList-item address">
            <div class="name">全国</div>
            <div class="search">
              <i class="fa fa-caret-down"></i>
            </div>
          </li>
          <li class="sortList-item filtrate">
            <div class="name">筛选</div>
            <div class="search">
              <i class="fa fa-filter"></i>
            </div>
          </li>
        </ul>
        <div class="list">
          <OrderListItem :data="serviceList.list"></OrderListItem>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import datasList from './datas.js';
import OrderListItem from '@/views/components/order-list-item';
export default {
  components: {
    OrderListItem
  },
  data () {
    return {
      subnavList: [
        {
          label: '定点巡逻',
          id: 1
        },
        {
          label: '定岗保安',
          id: 2
        },
        {
          label: '门卫服务',
          id: 3
        },
        {
          label: '形象站岗',
          id: 4
        },
        {
          label: '高端保安',
          id: 5
        },
        {
          label: '私人保镖',
          id: 5
        }
      ],
      serviceList: datasList
    };
  }
};
</script>
<style lang="scss" scoped src="./style.scss"></style>
