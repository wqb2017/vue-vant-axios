<template>
  <ul id="mineBill">
    <li class="van-hairline--bottom" v-for="item in list" :key="item.id">
      <div class="left">
        <span class="type">{{item.type}}</span>
        <span class="time">{{item.time}}</span>
      </div>
      <div class="right" :class="{active: item.value === 1}">
        {{item.value === 1 ? '+' : '-'}} {{item.money}}
      </div>
    </li>
  </ul>
</template>
<script>
export default {
  data () {
    return {
      list: [
        {
          type: '订单进账',
          time: '2017-02-15 00:27:29',
          money: '1000',
          value: 1,
          id: 11231
        },
        {
          type: '余额提现',
          time: '2017-02-15 00:27:29',
          money: '1000',
          value: 2,
          id: 112312
        },
        {
          type: '订单进账',
          time: '2017-02-15 00:27:29',
          money: '1000',
          value: 1,
          id: 112313
        }
      ]
    };
  }
};
</script>

<style lang='scss' src='./index.scss'></style>
