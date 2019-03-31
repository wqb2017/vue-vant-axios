<template>
  <div class="todayOrder">
    <h6 class="title">今日订单</h6>
    <OrderListItem :data="serviceList.list"></OrderListItem>
  </div>
</template>
<script>
import datasList from './datas.js'
import OrderListItem from '@/views/components/order-list-item'
export default {
  components: {
    OrderListItem
  },
  data () {
    return {
      serviceList: datasList
    }
  }
}
</script>
<style lang="scss" scoped src="./style.scss"></style>
