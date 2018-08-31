<template>
  <div class="serviceList">
    <ul class="lists">
      <li class="lists-item" v-for="(item,index) in data" :key="index">
        <router-link :to="{path:'/service/details'}" tag="div">
          <div class="imgs">
            <img src="https://via.placeholder.com/170x170" alt="">
          </div>
          <div class="info">
            <h6 class="label">{{item.name}}</h6>
            <p class="desc">服务时间：{{item.time}}</p>
            <p class="desc">服务时长：{{item.duration}}</p>
            <EcIps></EcIps>
            <p class="price">￥
              <span class="total">{{item.price}}</span>
            </p>
          </div>
        </router-link>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Array,
      default () {
        return [];
      }
    }
  }
};
</script>
<style lang="scss" scoped src="./style.scss"></style>
